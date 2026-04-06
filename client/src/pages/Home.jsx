import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'

const SKILLS_BADGES = ['SEO', 'React', 'Flutter', 'JavaScript', 'Content Creation', 'Node.js', 'Social Media']

const TYPEWRITER_TEXTS = [
  'Digital Marketing Manager',
  'Web Developer',
  'Flutter Developer',
  'SEO Specialist',
]

function useTypewriter(texts, speed = 80) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setTextIdx((i) => (i + 1) % texts.length)
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, textIdx, texts, speed])

  return displayed
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Home() {
  const typedText = useTypewriter(TYPEWRITER_TEXTS)

  return (
    <motion.main
      className="min-h-screen bg-dark relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-800/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-screen flex flex-col justify-center pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Available for hire
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Sailesh Kumar Tamang
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-xl sm:text-2xl text-gray-400 font-medium mb-6 h-8"
            >
              <span className="text-purple-400">{typedText}</span>
              <span className="animate-pulse text-purple-400">|</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg"
            >
              Passionate about driving digital growth through strategic marketing and building elegant web & mobile applications. Based in Kathmandu, Nepal.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Hire Me <HiArrowRight />
              </Link>
              <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
                View Work <HiArrowRight />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex gap-8"
            >
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Completed', value: '20+' },
                { label: 'Happy Clients', value: '15+' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-3xl font-black gradient-text">{value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-80 h-80">
              {/* Central avatar */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-violet-900/30 border-2 border-purple-500/30 flex items-center justify-center"
                style={{ animation: 'pulseGlow 2.5s ease-in-out infinite' }}
              >
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-5xl font-black text-white shadow-2xl">
                  SKT
                </div>
              </div>

              {/* Floating skill badges */}
              {SKILLS_BADGES.slice(0, 5).map((skill, i) => {
                const angles = [0, 72, 144, 216, 288]
                const angle = (angles[i] * Math.PI) / 180
                const radius = 145
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const delays = [0, 0.8, 1.6, 2.4, 3.2]
                return (
                  <motion.div
                    key={skill}
                    className="absolute glass-card px-3 py-1.5 text-xs font-semibold text-purple-300 border-purple-500/30 whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animation: `float 6s ease-in-out ${delays[i]}s infinite`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  >
                    {skill}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  )
}
