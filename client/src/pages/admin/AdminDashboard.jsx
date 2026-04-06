import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import {
  HiOutlineMail, HiOutlineMailOpen, HiTrash, HiLogout,
  HiRefresh, HiInbox,
} from 'react-icons/hi'
import { useAuth } from '../../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <motion.div
      className="glass-card p-5 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20`, border: `1px solid ${color}40` }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
        <p className="text-3xl font-black text-white mt-0.5">{value ?? '—'}</p>
      </div>
    </motion.div>
  )
}

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        className="glass-card p-6 max-w-sm w-full mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <p className="text-white font-semibold mb-2">Confirm Action</p>
        <p className="text-gray-400 text-sm mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl text-sm text-white bg-red-600 hover:bg-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function AdminDashboard() {
  const { token, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [inquiries, setInquiries] = useState([])
  const [stats, setStats] = useState(null)
  const [fetchError, setFetchError] = useState('')
  const [loadingIds, setLoadingIds] = useState(new Set())
  const [confirm, setConfirm] = useState(null)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login', { replace: true })
  }, [isAuthenticated, navigate])

  const authHeaders = { Authorization: `Bearer ${token}` }

  const fetchData = useCallback(async () => {
    if (!token) return
    setFetchError('')
    try {
      const [inqRes, statsRes] = await Promise.all([
        axios.get(`${API_URL}/api/inquiries`, { headers: authHeaders }),
        axios.get(`${API_URL}/api/inquiries/stats`, { headers: authHeaders }),
      ])
      setInquiries(inqRes.data)
      setStats(statsRes.data)
    } catch (err) {
      setFetchError(
        err.response?.status === 401
          ? 'Session expired. Please log in again.'
          : 'Failed to load data. Please try again.',
      )
      if (err.response?.status === 401) {
        logout()
        navigate('/admin/login', { replace: true })
      }
    }
  }, [token]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const toggleRead = async (inquiry) => {
    const id = inquiry._id || inquiry.id
    setLoadingIds((s) => new Set(s).add(id))
    try {
      const { data } = await axios.patch(
        `${API_URL}/api/inquiries/${id}/read`,
        {},
        { headers: authHeaders },
      )
      setInquiries((prev) => prev.map((i) => ((i._id || i.id) === id ? data : i)))
      setStats((s) =>
        s
          ? {
              ...s,
              unread: inquiry.isRead ? s.unread + 1 : Math.max(0, s.unread - 1),
            }
          : s,
      )
    } catch {
      // ignore toggle error silently
    } finally {
      setLoadingIds((s) => { const n = new Set(s); n.delete(id); return n })
    }
  }

  const deleteInquiry = async (id) => {
    setConfirm(null)
    setLoadingIds((s) => new Set(s).add(id))
    try {
      await axios.delete(`${API_URL}/api/inquiries/${id}`, { headers: authHeaders })
      setInquiries((prev) => prev.filter((i) => (i._id || i.id) !== id))
      setStats((s) => s ? { ...s, total: s.total - 1 } : s)
    } catch {
      // ignore delete error silently
    } finally {
      setLoadingIds((s) => { const n = new Set(s); n.delete(id); return n })
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login', { replace: true })
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xs">
              ST
            </div>
            <span className="text-white font-bold">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              title="Refresh"
            >
              <HiRefresh size={18} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
            >
              <HiLogout size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            label="Total Inquiries"
            value={stats?.total}
            icon={HiInbox}
            color="#7c3aed"
          />
          <StatCard
            label="Unread"
            value={stats?.unread}
            icon={HiOutlineMail}
            color="#f59e0b"
          />
          <StatCard
            label="Read"
            value={stats?.total != null && stats?.unread != null ? stats.total - stats.unread : undefined}
            icon={HiOutlineMailOpen}
            color="#10b981"
          />
        </div>

        {fetchError && (
          <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {fetchError}
          </div>
        )}

        {/* Inquiries table */}
        <div className="glass-card overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-white font-bold">All Inquiries</h2>
            <span className="text-gray-600 text-sm">{inquiries.length} total</span>
          </div>

          {inquiries.length === 0 && !fetchError ? (
            <div className="py-20 text-center text-gray-600">
              <HiInbox size={40} className="mx-auto mb-3 opacity-30" />
              <p>No inquiries yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Name</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Email</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium hidden md:table-cell">Subject</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium hidden lg:table-cell">Date</th>
                    <th className="text-left px-6 py-3 text-gray-500 font-medium">Status</th>
                    <th className="text-right px-6 py-3 text-gray-500 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {inquiries.map((inq) => {
                      const id = inq._id || inq.id
                      const isLoading = loadingIds.has(id)
                      const createdAt = inq.createdAt
                        ? new Date(inq.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'short', day: 'numeric',
                          })
                        : '—'

                      return (
                        <motion.tr
                          key={id}
                          className={`border-b border-white/5 transition-colors ${
                            !inq.isRead ? 'bg-purple-500/5' : ''
                          } hover:bg-white/3`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <td className="px-6 py-4 text-white font-medium whitespace-nowrap">
                            {!inq.isRead && (
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full inline-block mr-2 flex-shrink-0" />
                            )}
                            {inq.name}
                          </td>
                          <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{inq.email}</td>
                          <td className="px-6 py-4 text-gray-400 hidden md:table-cell max-w-xs truncate">
                            {inq.subject}
                          </td>
                          <td className="px-6 py-4 text-gray-600 hidden lg:table-cell whitespace-nowrap">
                            {createdAt}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                inq.isRead
                                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                  : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                              }`}
                            >
                              {inq.isRead ? 'Read' : 'Unread'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => toggleRead(inq)}
                                disabled={isLoading}
                                title={inq.isRead ? 'Mark as Unread' : 'Mark as Read'}
                                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-40"
                              >
                                {inq.isRead ? <HiOutlineMail size={16} /> : <HiOutlineMailOpen size={16} />}
                              </button>
                              <button
                                onClick={() =>
                                  setConfirm({
                                    id,
                                    message: `Delete inquiry from "${inq.name}"? This cannot be undone.`,
                                  })
                                }
                                disabled={isLoading}
                                title="Delete"
                                className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-40"
                              >
                                <HiTrash size={16} />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Confirm dialog */}
      <AnimatePresence>
        {confirm && (
          <ConfirmDialog
            key="confirm"
            message={confirm.message}
            onConfirm={() => deleteInquiry(confirm.id)}
            onCancel={() => setConfirm(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
