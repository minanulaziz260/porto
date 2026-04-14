'use client'

import { motion } from 'framer-motion'
import ProjectCard, { ProjectProps } from '@/components/ProjectCard'

const projects: ProjectProps[] = [
  {
    title: 'AI Image Generator Studio',
    description:
      'Full-stack web app generating stunning images using diffusion models with custom prompt engineering and real-time preview.',
    tags: ['Next.js', 'Stable Diffusion', 'AI'],
    link: '#',
    featured: true,
  },
  {
    title: 'Digital Wedding Invitation',
    description:
      'Interactive animated digital invitation with RSVP system, music autoplay, countdown timer, and WhatsApp integration.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: 'Affiliate Marketing Hub',
    description:
      'High-converting affiliate landing pages with optimized CTAs, A/B testing support, and integrated analytics tracking.',
    tags: ['Next.js', 'SEO', 'Marketing'],
    link: '#',
  },
  {
    title: 'Video AI Automation Pipeline',
    description:
      'Automated video generation workflow that converts text prompts into cinematic short films using generative models.',
    tags: ['Python', 'Video AI', 'Automation'],
    link: '#',
  },
  {
    title: 'Web Translation Tool',
    description:
      'Custom multi-language web translator supporting Indonesian regional languages with real-time conversion and clean UI.',
    tags: ['JavaScript', 'NLP', 'API'],
    link: '#',
  },
  {
    title: 'Creative Prompt Studio',
    description:
      'An intuitive studio for engineering, managing, and iterating AI art prompts with live preview and categorization.',
    tags: ['React', 'AI', 'UI Design'],
    link: '#',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-14 space-y-3"
        >
          <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">
            Selected Work
          </span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Projects
            </h2>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400/40 pb-0.5"
            >
              View all on GitHub →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeInUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
    }
