import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-10 mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-blue-200/60">© {new Date().getFullYear()} Designer. All rights reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          {['Twitter','Dribbble','Behance','LinkedIn'].map((s) => (
            <a key={s} href="#" className="text-blue-200/70 hover:text-white transition relative group">
              {s}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
