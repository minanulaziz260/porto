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
    'w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all duration-200'
  const labelClass =
    'block text-xs font-medium text-neutral-500 tracking-wide uppercase mb-1.5'

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="space-y-7 md:pt-2"
          >
            <div className="space-y-3">
              <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight">
                Let&apos;s work
                <br />
                <span className="text-neutral-400">together.</span>
              </h2>
            </div>

            <p className="text-neutral-500 leading-relaxed">
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
                    <div className="text-xs text-neutral-400 font-medium uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-sm text-neutral-700 font-medium mt-0.5">
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
                className="flex flex-col items-center justify-center text-center py-20 px-6 rounded-2xl border border-neutral-200 bg-neutral-50 gap-4"
              >
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  Message Sent!
                </h3>
                <p className="text-sm text-neutral-500">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry, collaboration..."
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-700 transition-all duration-200 hover:shadow-xl hover:shadow-neutral-900/20"
                >
                  Send Message →
                </motion.button>

                <p className="text-xs text-center text-neutral-400">
                  No spam. I&apos;ll only use your info to respond to your
                  message.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
