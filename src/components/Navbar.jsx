import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Mail } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(30,144,255,0.25)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white/90 hover:text-white">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 ring-1 ring-white/20 shadow-lg shadow-blue-500/30 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Designer</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition-colors relative group">
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all" />
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 shadow-lg backdrop-blur-xl transition-all">
              <Mail className="h-4 w-4 text-blue-300" /> Contact
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-blue-100/90 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
