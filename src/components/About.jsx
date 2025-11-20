import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_30%,rgba(30,144,255,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="h-48 w-48 rounded-full p-1 bg-gradient-to-br from-blue-500/40 to-blue-300/40">
              <div className="h-full w-full rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(30,144,255,0.35)]" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">About</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
            <p className="text-blue-100/80 leading-relaxed">
              I'm a web designer focused on minimalist, high-end interfaces that balance aesthetics and performance. I craft experiences that feel fluid, premium, and human.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Interface Design','Motion Systems','Design Systems','Web Performance'].map((i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-100/90">
                  {i}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
