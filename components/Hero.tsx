'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
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
      {/* Background orbs — FIXED: removed bg-gradient-radial (not standard Tailwind) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neutral-200/30 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-neutral-100/60 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-neutral-100/60 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto space-y-7"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-neutral-500 uppercase border border-neutral-200 rounded-full px-4 py-1.5 bg-white/80 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for New Projects
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-neutral-900 leading-[1.05]"
        >
          Building the
          <br />
          <span className="text-neutral-400">Future with AI.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto leading-relaxed"
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
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-all duration-200 hover:shadow-xl hover:shadow-neutral-900/20"
          >
            View My Work
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full hover:border-neutral-400 hover:text-neutral-900 hover:bg-white transition-all duration-200 bg-white/50 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-10 pt-4 border-t border-neutral-200/60 mt-6"
        >
          {[
            { value: '50+', label: 'Projects Built' },
            { value: '3+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-semibold text-neutral-900">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">{stat.label}</div>
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
        <span className="text-[10px] text-neutral-400 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent"
        />
      </motion.div>
    </section>
  )
}
