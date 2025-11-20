import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Fintech Dashboard', tag: 'UI / Motion', cover: 'https://images.unsplash.com/photo-1551281044-8e146f88f407?q=80&w=1200&auto=format&fit=crop' },
  { title: 'SaaS Website', tag: 'Web / System', cover: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Mobile App', tag: 'iOS / Prototype', cover: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'E-commerce', tag: 'Brand / UX', cover: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop' },
]

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_70%_60%,rgba(30,144,255,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="" className="h-full w-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 ring-1 ring-blue-300/30 text-xs mb-3">{p.tag}</div>
                <h3 className="text-xl text-white font-medium">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-4 rounded-2xl bg-[#0A0A0F]/60 border border-white/10 p-4 flex items-end">
                  <a href="#" className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm shadow-[0_10px_30px_-10px_rgba(30,144,255,0.6)]">View Case Study</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
