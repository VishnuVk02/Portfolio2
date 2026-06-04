import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Navbar({ activeSection, handleNavClick }) {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
    )
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav 
      ref={navRef}
      className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0a0b1c]/45 backdrop-blur-md border border-white/8 rounded-full px-6 py-2 items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)] select-none"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(item.id, e)}
            className={`
              text-xs uppercase font-semibold tracking-wider px-3 sm:px-4 py-2 rounded-full cursor-pointer transition-all duration-300
              ${isActive 
                ? 'text-white bg-blue-500/20 shadow-[0_0_15px_rgba(0,119,255,0.25)] border border-blue-500/20' 
                : 'text-[#94a3b8] border border-transparent hover:text-white hover:bg-white/5 hover:border-white/5'
              }
            `}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
