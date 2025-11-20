import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_20%,rgba(30,144,255,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(30,144,255,0.25)]">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s build something great</h2>
          <p className="mt-2 text-blue-200/80">Tell me about your project and timeline. I typically respond within 24 hours.</p>
          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-200/70 mb-2">Name</label>
              <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-200/70 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition" placeholder="you@studio.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-200/70 mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition" placeholder="Share a quick brief" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full sm:w-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(30,144,255,0.65)] ring-1 ring-blue-300/40 hover:from-blue-400 hover:to-blue-600 transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
