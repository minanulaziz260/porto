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
    <section id="about" className="py-28 px-6 bg-white">
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
              <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight">
                I build intelligent,
                <br />
                <span className="text-neutral-400">beautiful things.</span>
              </h2>
            </div>

            <p className="text-neutral-500 leading-relaxed text-base md:text-lg">
              I&apos;m a creative developer and AI engineer passionate about
              merging cutting-edge technology with elegant design. Based in
              Indonesia, I craft web experiences, AI tools, and automated
              systems that are both functional and beautiful.
            </p>

            <p className="text-neutral-500 leading-relaxed">
              From interactive digital invitations to AI-powered video
              generation pipelines — I love bringing ambitious ideas to life
              through code, creativity, and automation.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 border-b border-neutral-900 hover:border-neutral-400 hover:text-neutral-500 transition-all duration-200 pb-0.5"
              >
                See my work →
              </a>
            </div>
          </motion.div>

          {/* Right: Skill Tags */}
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
                className="px-4 py-2.5 border border-neutral-200 rounded-full text-sm text-neutral-600 font-medium hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}

            {/* Large decorative card */}
            <motion.div
              variants={fadeInUp}
              className="w-full mt-4 p-6 rounded-2xl bg-neutral-900 text-white"
            >
              <div className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-2">
                Currently Working On
              </div>
              <div className="text-base font-medium">
                AI-Powered Creative Studio &amp; Digital Automation Tools
              </div>
              <div className="mt-3 text-sm text-neutral-400">
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
