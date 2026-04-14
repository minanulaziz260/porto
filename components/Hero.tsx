'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-20 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-blue-800/15 blur-3xl" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto space-y-7"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-blue-400 uppercase border border-blue-500/30 rounded-full px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Available for New Projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.05]"
        >
          Building the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Future with AI.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          AI Engineer &amp; Creative Developer crafting intelligent experiences
          through code, design, and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-500 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/40"
          >
            View My Work
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-blue-500/30 text-slate-300 text-sm font-medium rounded-full hover:border-blue-400 hover:text-white transition-all duration-200 bg-blue-500/5"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-10 pt-4 border-t border-blue-900/40 mt-6"
        >
          {[
            { value: '50+', label: 'Projects Built' },
            { value: '3+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-semibold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-600 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  )
          }
