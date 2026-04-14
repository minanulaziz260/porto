'use client'

import { motion } from 'framer-motion'

export interface ProjectProps {
  title: string
  description: string
  tags: string[]
  link?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  link = '#',
  featured = false,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative flex flex-col gap-5 rounded-2xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
        featured
          ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500/50 hover:shadow-blue-600/30'
          : 'bg-[#111118] border-blue-900/30 hover:border-blue-500/40 hover:shadow-blue-900/30'
      }`}
    >
      {/* Header icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
          featured
            ? 'bg-blue-500/30 group-hover:bg-blue-400/30'
            : 'bg-blue-500/10 group-hover:bg-blue-500/20'
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={featured ? 'text-white' : 'text-blue-400'}
        >
          <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor" opacity="0.7" />
          <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor" />
          <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor" />
          <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div className="space-y-2 flex-1">
        <h3
          className={`text-base font-semibold tracking-tight ${
            featured ? 'text-white' : 'text-white'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            featured ? 'text-blue-100/80' : 'text-slate-400'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              featured
                ? 'bg-blue-500/30 text-blue-100'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group-hover:gap-2.5 ${
          featured
            ? 'text-blue-200/70 hover:text-white'
            : 'text-slate-600 hover:text-blue-400'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        View Project
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  )
}
