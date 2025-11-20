import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/70 to-[#0A0A0F] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/30 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" /> Available for select projects
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_0_30px_rgba(30,144,255,0.25)]">
            Crafting Premium Digital Experiences
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 leading-relaxed">
            I design and build elegant, high-performance interfaces with a focus on clarity, motion, and modern craft.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(30,144,255,0.65)] ring-1 ring-blue-300/40 hover:from-blue-400 hover:to-blue-600 transition-all">
              View Work
              <span className="h-1.5 w-1.5 rounded-full bg-white/80 group-hover:scale-125 transition-transform" />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-2xl text-blue-200 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
