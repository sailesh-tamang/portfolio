import { motion } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiLocationMarker, HiMail } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const EXPERIENCE = [
  {
    role: 'Digital Marketing Manager',
    company: 'Kataho Mobile Application',
    period: '2023 – Present',
    duration: '1+ year',
    description:
      'Leading all digital marketing efforts including SEO, content strategy, social media management, and performance marketing for the mobile application platform.',
    tags: ['SEO', 'Social Media', 'Content Strategy', 'Analytics'],
    active: true,
  },
  {
    role: 'Tutor & Marketing Executive',
    company: 'Maya Animation',
    period: '2022 – 2023',
    duration: '1 year',
    description:
      'Provided tutoring services in digital tools and animation software while executing marketing campaigns to increase brand visibility and student enrollment.',
    tags: ['Teaching', 'Marketing', 'Branding'],
    active: false,
  },
  {
    role: 'Marketing Executive & Content Creator',
    company: 'Alipse Ecom',
    period: '2021 – 2022',
    duration: '1 year',
    description:
      'Managed e-commerce marketing campaigns, created engaging content for multiple platforms, and drove growth through data-driven marketing strategies.',
    tags: ['E-Commerce', 'Content Creation', 'Email Marketing'],
    active: false,
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor\'s in IT & E-Commerce',
    institution: 'Softwarica College of IT and E-Commerce',
    period: '2021 – Present',
    description: 'Focusing on software development, e-commerce systems, and information technology management.',
  },
  {
    degree: 'A Levels',
    institution: 'Global College International',
    period: '2019 – 2021',
    description: 'Completed A Levels with focus on Science and Mathematics.',
  },
]

export default function About() {
  return (
    <motion.main
      className="min-h-screen bg-dark pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-purple-400 font-medium mb-2 tracking-widest uppercase text-sm">Get to know me</p>
          <h1 className="section-title">About <span className="gradient-text">Me</span></h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Profile + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="relative">
              <div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-5xl font-black text-white shadow-2xl"
                style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
              >
                SKT
              </div>
              <div className="absolute -bottom-3 -right-3 glass-card px-3 py-2 text-sm font-semibold text-purple-300">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2 animate-pulse" />
                Available
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-500/30 border border-purple-500/50" />
              <div className="absolute top-8 -left-8 w-4 h-4 rounded-full bg-violet-400/40 border border-violet-400/50" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Sailesh Kumar <span className="gradient-text">Tamang</span>
            </h2>
            <p className="text-purple-400 font-medium mb-5">Digital Marketing Manager & Web Developer</p>
            <p className="text-gray-400 leading-relaxed mb-5">
              I'm a results-driven Digital Marketing Manager and Web Developer based in Kathmandu, Nepal.
              With over 3 years of experience, I specialize in crafting data-driven marketing strategies
              and building modern web and mobile applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              My unique blend of technical skills and marketing expertise allows me to bridge the gap
              between technology and business growth. I'm passionate about helping businesses thrive
              in the digital landscape through strategic SEO, compelling content, and innovative development.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <HiLocationMarker className="text-purple-400 flex-shrink-0" size={18} />
                Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <HiMail className="text-purple-400 flex-shrink-0" size={18} />
                sailesh@example.com
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.section
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <HiBriefcase className="text-purple-400" size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-600/30 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className="relative sm:pl-16"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden sm:block ${
                    exp.active
                      ? 'bg-purple-500 border-purple-300 shadow-lg shadow-purple-500/50'
                      : 'bg-dark-card border-purple-600/50'
                  }`} />

                  <div className="glass-card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        <p className="gradient-text font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                        <p className="text-purple-400 text-xs">{exp.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <HiAcademicCap className="text-purple-400" size={22} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="glass-card-hover p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <HiAcademicCap className="text-purple-400" size={20} />
                </div>
                <h3 className="text-white font-bold mb-1">{edu.degree}</h3>
                <p className="gradient-text text-sm font-semibold mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-xs mb-3">{edu.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.main>
  )
}
