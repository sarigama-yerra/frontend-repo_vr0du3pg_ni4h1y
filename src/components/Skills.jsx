import React from 'react'
import { motion } from 'framer-motion'
import { Figma, Cpu, Palette, Zap } from 'lucide-react'

const skills = [
  { name: 'UI/UX', icon: Palette, level: 92 },
  { name: 'Design Systems', icon: Cpu, level: 88 },
  { name: 'Prototyping', icon: Figma, level: 86 },
  { name: 'Micro-interactions', icon: Zap, level: 90 },
]

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_60%,rgba(30,144,255,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ name, icon: Icon, level }) => (
            <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(30,144,255,0.25)] hover:shadow-[0_20px_40px_-12px_rgba(30,144,255,0.35)] transition-all">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-300/30 ring-1 ring-white/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
                <span className="text-white font-medium">{name}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" style={{ width: level + '%' }} />
              </div>
              <div className="mt-2 text-right text-sm text-blue-200/70">{level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
