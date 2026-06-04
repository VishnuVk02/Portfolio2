import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Home({ handleNavClick }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.glass-panel',
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      )
        .fromTo('.hero-tag',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.8'
        )
        .fromTo('.hero-name',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo('.hero-desc',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo('.btn-anim',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          '-=0.6'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="w-full min-h-screen flex justify-center items-center relative z-10 px-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="glass-panel w-full max-w-[1050px] bg-[#080914]/2 backdrop-blur-2xl border border-white/7 rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center gap-6">
        <span className="hero-tag text-xs md:text-sm font-bold uppercase tracking-[3px] text-blue-500 bg-blue-500/8 border border-blue-500/20 px-5 py-2 rounded-full">
          Full-Stack Developer
        </span>

        <h1 className="hero-name text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-r from-white via-indigo-200 to-blue-500 bg-clip-text text-transparent max-w-4xl">
          Vishnu Kumar V
        </h1>

        <p className="hero-desc text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Computer Science graduate with a Master's degree and hands-on experience in React, Node.js, Express.js, and PostgreSQL. Passionate about backend development, problem-solving, and building real-world web applications while continuously learning and growing as a software engineer.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#projects"
            onClick={(e) => handleNavClick('projects', e)}
            className="btn-anim px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(0,119,255,0.35)] hover:shadow-[0_15px_30px_rgba(0,119,255,0.5)] cursor-pointer text-sm md:text-base"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="btn-anim px-6 py-3 rounded-full font-semibold text-slate-200 bg-white/4 border border-white/10 hover:bg-white/8 hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm md:text-base"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
