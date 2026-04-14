'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#FAFAF8] border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-base font-semibold text-neutral-900 tracking-tight">
              AZIZVERSE
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Building intelligent experiences through code, design, and
              automation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Navigation
            </div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Connect
            </div>
            <nav className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors w-fit"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} AZIZVERSE. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
