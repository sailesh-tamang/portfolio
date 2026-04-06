import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
} from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const SOCIAL_LINKS = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0a66c2' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter/X', color: '#1da1f2' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#e1306c' },
]

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function Toast({ type, message, onClose }) {
  return (
    <motion.div
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl border ${
        type === 'success'
          ? 'bg-green-500/10 border-green-500/30 text-green-400'
          : 'bg-red-500/10 border-red-500/30 text-red-400'
      }`}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {type === 'success' ? (
        <HiCheckCircle size={22} />
      ) : (
        <HiXCircle size={22} />
      )}
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 transition-opacity">
        ✕
      </button>
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      showToast('error', 'Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      await axios.post(`${API_URL}/api/contact`, form)
      showToast('success', "Message sent! I'll get back to you soon.")
      setForm(INITIAL_FORM)
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to send message. Please try again.'
      showToast('error', msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.main
      className="min-h-screen bg-dark pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {toast && (
          <Toast
            key="toast"
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-purple-400 font-medium mb-2 tracking-widest uppercase text-sm">Let's talk</p>
          <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
          <p className="section-subtitle text-center">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-6">Contact Info</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                    <HiMail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Email</p>
                    <a
                      href="mailto:sailesh@example.com"
                      className="text-white text-sm hover:text-purple-400 transition-colors"
                    >
                      sailesh@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                    <HiLocationMarker className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Location</p>
                    <p className="text-white text-sm">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-200 group"
                  >
                    <Icon size={18} style={{ color }} className="flex-shrink-0" />
                    <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
              <h2 className="text-xl font-bold text-white mb-2">Send a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5" htmlFor="name">
                    Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5" htmlFor="email">
                    Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 text-sm mb-1.5" htmlFor="subject">
                  Subject <span className="text-purple-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm mb-1.5" htmlFor="message">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.main>
  )
}
