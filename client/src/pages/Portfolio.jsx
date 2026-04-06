import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const CATEGORIES = ['All', 'Marketing', 'Web Dev', 'Flutter']

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce SEO Campaign',
    category: 'Marketing',
    description:
      'Comprehensive SEO strategy for an e-commerce platform resulting in 150% organic traffic increase and 40% growth in conversions within 6 months.',
    tags: ['SEO', 'Content Strategy', 'Analytics', 'Google Ads'],
    gradient: 'from-purple-600/30 to-violet-800/30',
    icon: '📈',
    link: '#',
  },
  {
    id: 2,
    title: 'React Portfolio Website',
    category: 'Web Dev',
    description:
      'Modern portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, glassmorphism design, and full responsiveness.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    gradient: 'from-blue-600/30 to-cyan-800/30',
    icon: '💻',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Flutter Mobile App',
    category: 'Flutter',
    description:
      'Cross-platform mobile application with real-time data sync, push notifications, and an intuitive UI built using Flutter and Firebase.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    gradient: 'from-cyan-600/30 to-blue-900/30',
    icon: '📱',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Content Marketing Strategy',
    category: 'Marketing',
    description:
      'End-to-end content marketing strategy including blog content, social media calendars, email campaigns, and performance tracking dashboards.',
    tags: ['Content Creation', 'Social Media', 'Email Marketing', 'Branding'],
    gradient: 'from-pink-600/30 to-purple-800/30',
    icon: '✍️',
    link: '#',
  },
  {
    id: 5,
    title: 'Node.js REST API',
    category: 'Web Dev',
    description:
      'Scalable RESTful API with JWT authentication, role-based access control, rate limiting, and comprehensive API documentation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    gradient: 'from-green-600/30 to-emerald-900/30',
    icon: '🔧',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Marketing',
    description:
      'Multi-platform social media campaign achieving 500% increase in engagement, 10K new followers, and significant brand awareness growth.',
    tags: ['Instagram', 'Facebook', 'Analytics', 'Content Creation'],
    gradient: 'from-orange-600/30 to-red-800/30',
    icon: '🚀',
    link: '#',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <motion.main
      className="min-h-screen bg-dark pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-purple-400 font-medium mb-2 tracking-widest uppercase text-sm">My work</p>
          <h1 className="section-title">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="section-subtitle text-center">
            A selection of projects showcasing my marketing and development expertise.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-primary text-white shadow-lg shadow-purple-500/30'
                  : 'glass-card text-gray-400 hover:text-white hover:border-purple-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
                className="glass-card-hover overflow-hidden group flex flex-col"
              >
                {/* Image placeholder */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-6xl">{project.icon}</span>
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-dark/60 backdrop-blur-sm rounded-lg text-purple-400 text-xs font-semibold border border-purple-500/20">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      <HiExternalLink size={16} />
                      View Project
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 text-sm font-medium transition-colors"
                      >
                        <FaGithub size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            <HiCode size={48} className="mx-auto mb-4 opacity-30" />
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </motion.main>
  )
}
