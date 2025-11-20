import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(30,144,255,0.10),transparent),radial-gradient(700px_400px_at_90%_20%,rgba(74,168,255,0.10),transparent)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
