import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiGoogleanalytics, SiMailchimp, SiInstagram,
  SiJavascript, SiReact, SiFlutter, SiNodedotjs,
} from 'react-icons/si'
import { FaSearch, FaPenFancy } from 'react-icons/fa'

const MARKETING_SKILLS = [
  { name: 'SEO', level: 90, icon: FaSearch, color: '#7c3aed' },
  { name: 'Content Creation', level: 85, icon: FaPenFancy, color: '#8b5cf6' },
  { name: 'Social Media Marketing', level: 80, icon: SiInstagram, color: '#a78bfa' },
  { name: 'Email Marketing', level: 75, icon: SiMailchimp, color: '#7c3aed' },
  { name: 'Analytics & Reporting', level: 82, icon: SiGoogleanalytics, color: '#8b5cf6' },
]

const TECH_SKILLS = [
  { name: 'JavaScript', level: 80, icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', level: 75, icon: SiReact, color: '#61dafb' },
  { name: 'Flutter', level: 70, icon: SiFlutter, color: '#54c5f8' },
  { name: 'Node.js', level: 65, icon: SiNodedotjs, color: '#68a063' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function SkillBar({ name, level, icon: Icon, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card-hover p-5"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${color}20`, border: `1px solid ${color}40` }}
          >
            <Icon style={{ color }} size={20} />
          </div>
          <span className="text-white font-semibold">{name}</span>
        </div>
        <span className="text-purple-400 font-bold text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <motion.main
      className="min-h-screen bg-dark pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-purple-400 font-medium mb-2 tracking-widest uppercase text-sm">What I can do</p>
          <h1 className="section-title">My <span className="gradient-text">Skills</span></h1>
          <p className="section-subtitle text-center">
            A diverse skill set spanning digital marketing and software development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Marketing Skills */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <SiGoogleanalytics className="text-purple-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Marketing Skills</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {MARKETING_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <SiReact className="text-purple-400" size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Tech Skills</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {TECH_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional technologies */}
        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-white text-center mb-8">Also familiar with</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML/CSS', 'Tailwind CSS', 'Git', 'Firebase',
              'Google Analytics', 'Figma', 'WordPress', 'Dart',
              'REST APIs', 'MongoDB', 'MySQL', 'Canva',
            ].map((tech) => (
              <span
                key={tech}
                className="glass-card px-4 py-2 text-sm text-gray-300 hover:text-purple-300 hover:border-purple-500/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
