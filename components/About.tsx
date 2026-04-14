'use client'

import { motion } from 'framer-motion'

const skills = [
  'AI Engineering',
  'Web Development',
  'Video AI',
  'Prompt Engineering',
  'UI/UX Design',
  'Automation',
  'Affiliate Marketing',
  'Digital Branding',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="space-y-7"
          >
            <div className="space-y-2">
              <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                I build intelligent,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  beautiful things.
                </span>
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
              I&apos;m a creative developer and AI engineer passionate about
              merging cutting-edge technology with elegant design. Based in
              Indonesia, I craft web experiences, AI tools, and automated
              systems that are both functional and beautiful.
            </p>

            <p className="text-slate-400 leading-relaxed">
              From interactive digital invitations to AI-powered video
              generation pipelines — I love bringing ambitious ideas to life
              through code, creativity, and automation.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-500/40 hover:border-blue-400 pb-0.5"
            >
              See my work →
            </a>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
                className="px-4 py-2.5 border border-blue-500/20 rounded-full text-sm text-slate-400 font-medium hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}

            {/* Feature card */}
            <motion.div
              variants={fadeInUp}
              className="w-full mt-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/20"
            >
              <div className="text-xs font-medium text-blue-400/70 tracking-widest uppercase mb-2">
                Currently Working On
              </div>
              <div className="text-base font-medium text-white">
                AI-Powered Creative Studio &amp; Digital Automation Tools
              </div>
              <div className="mt-3 text-sm text-slate-400">
                Building the next generation of creative tools that blend
                generative AI with beautiful interfaces.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
