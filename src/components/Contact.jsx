import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo('.contact-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      )

      // Contact cards
      gsap.fromTo('.anim-contact-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full min-h-screen flex justify-center items-center relative z-10 px-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="glass-panel w-full max-w-[850px] bg-[#080914]/2 backdrop-blur-2xl border border-white/7 rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col gap-8 text-center">
        <h2 className="contact-title text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <p className="anim-contact-card text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          I am open to new opportunities, freelance work, or discussing interesting tech projects.
          Feel free to reach out via email, phone, or connect with me on LinkedIn and GitHub!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto w-full mt-4">
          <a
            href="mailto:vishnukumarv5467@gmail.com"
            className="anim-contact-card bg-white/2 border border-white/6 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-0.5 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 shrink-0">
              @
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
              <span className="text-slate-200 text-sm md:text-base break-all">vishnukumarv5467@gmail.com</span>
            </div>
          </a>

          <a
            href="tel:9087683150"
            className="anim-contact-card bg-white/2 border border-white/6 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-0.5 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 shrink-0">
              ✆
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</span>
              <span className="text-slate-200 text-sm md:text-base">+91 9087683150</span>
            </div>
          </a>

          <a
            href="https://github.com/VishnuVk02"
            target="_blank"
            rel="noreferrer"
            className="anim-contact-card bg-white/2 border border-white/6 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-0.5 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 shrink-0">
              git
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
              <span className="text-slate-200 text-sm md:text-base">github.com/VishnuVk02</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/imvishnu-v/"
            target="_blank"
            rel="noreferrer"
            className="anim-contact-card bg-white/2 border border-white/6 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-0.5 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group text-left"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs transition-colors duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/20 shrink-0">
              in
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
              <span className="text-slate-200 text-sm md:text-base">Profile Link</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
