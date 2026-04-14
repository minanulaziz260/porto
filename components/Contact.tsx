'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-blue-900/40 bg-[#0d0d14] text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/60 transition-all duration-200'
  const labelClass =
    'block text-xs font-medium text-blue-400/70 tracking-wide uppercase mb-1.5'

  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="space-y-7 md:pt-2"
          >
            <div className="space-y-3">
              <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Let&apos;s work
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  together.
                </span>
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Whether
              it&apos;s a full web build, an AI integration, or a creative
              collaboration — drop a message and I&apos;ll get back to you.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { icon: '📍', label: 'Location', value: 'Semarang, Indonesia' },
                { icon: '📧', label: 'Email', value: 'hello@azizverse.dev' },
                { icon: '⚡', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-blue-400/60 font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-300 font-medium mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 gap-4"
              >
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-semibold text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-slate-400">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={labelClass}>Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="Project inquiry, collaboration..."
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message" name="message" rows={6} required
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Send Message →
                </motion.button>
                <p className="text-xs text-center text-slate-600">
                  No spam. I&apos;ll only use your info to respond to your message.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
    }
