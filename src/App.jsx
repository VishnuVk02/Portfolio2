import { useState, useEffect } from 'react'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = (sectionId, e) => {
    e.preventDefault()
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact']

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#030308] text-slate-200 selection:bg-blue-500/30 selection:text-white">
      {/* 3D Cosmic Background */}
      <ThreeBackground />

      {/* Floating Navigation Header */}
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />

      {/* Main Sections */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Home handleNavClick={handleNavClick} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
