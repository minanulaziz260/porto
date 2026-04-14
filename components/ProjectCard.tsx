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
      className={`group relative flex flex-col gap-5 rounded-2xl border p-6 cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-neutral-900/8 ${
        featured
          ? 'bg-neutral-900 border-neutral-800 text-white'
          : 'bg-white border-neutral-200 text-neutral-900'
      }`}
    >
      {/* Header icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
          featured
            ? 'bg-neutral-800 group-hover:bg-neutral-700'
            : 'bg-neutral-100 group-hover:bg-neutral-200'
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={featured ? 'text-neutral-400' : 'text-neutral-600'}
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
            featured ? 'text-white' : 'text-neutral-900'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            featured ? 'text-neutral-400' : 'text-neutral-500'
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
                ? 'bg-neutral-800 text-neutral-300'
                : 'bg-neutral-100 text-neutral-600'
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
            ? 'text-neutral-500 hover:text-white'
            : 'text-neutral-400 hover:text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        View Project
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  )
}
