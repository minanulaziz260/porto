'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#FAFAF8]/85 border-b border-neutral-200/70 shadow-sm'
          : 'backdrop-blur-md bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-base font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          AZIZVERSE
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-all duration-200 hover:shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-700 transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden border-t border-neutral-200/60 bg-[#FAFAF8]/95 backdrop-blur-xl"
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-center px-4 py-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-700 transition-colors mt-1"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
