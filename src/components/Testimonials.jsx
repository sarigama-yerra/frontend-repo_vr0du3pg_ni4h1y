import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Ava Chen', role: 'Product Lead, Aurora', quote: 'A rare blend of taste and execution. Our product leveled up.', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Liam Patel', role: 'Founder, Nimbus', quote: 'Flawless motion and detail. Feels premium and effortless.', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Sofia Rivera', role: 'Design Ops, Halo', quote: 'Organized, fast, and thoughtful. A joy to collaborate with.', avatar: 'https://i.pravatar.cc/100?img=8' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(30,144,255,0.25)]">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full ring-2 ring-blue-400/40" />
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-xs text-blue-200/70">{t.role}</div>
                </div>
              </div>
              <p className="text-blue-100/85">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
