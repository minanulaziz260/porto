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
      className="bg-[#0a0a0f] border-t border-blue-900/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-base font-semibold tracking-tight text-white">
              AZIZ<span className="text-blue-500">VERSE</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Building intelligent experiences through code, design, and
              automation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <div className="text-xs font-medium text-blue-500/60 uppercase tracking-widest">
              Navigation
            </div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-blue-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <div className="text-xs font-medium text-blue-500/60 uppercase tracking-widest">
              Connect
            </div>
            <nav className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-blue-400 transition-colors w-fit"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AZIZVERSE. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
