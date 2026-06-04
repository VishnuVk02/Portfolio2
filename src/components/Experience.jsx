import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.exp-title', 
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

      // Animate left side (Experience)
      gsap.fromTo('.anim-exp-left', 
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      // Animate right side (Education)
      gsap.fromTo('.anim-exp-right', 
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
      id="experience" 
      ref={sectionRef}
      className="w-full min-h-screen flex justify-center items-center relative z-10 px-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="glass-panel w-full max-w-[1050px] bg-[#080914]/2 backdrop-blur-2xl border border-white/7 rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col gap-8">
        <h2 className="exp-title text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-left">
          Experience & Education
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Experience Column */}
          <div className="flex flex-col gap-6 text-left">
            <h3 className="anim-exp-left text-lg md:text-xl font-bold text-white mb-1">
              Professional Experience
            </h3>
            
            <div className="anim-exp-left bg-white/2 border border-white/6 rounded-[20px] p-5 md:p-6 transition-all duration-300 hover:border-blue-500/30 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h4 className="font-bold text-white text-base md:text-lg leading-snug">
                    Full-Stack Development Intern
                  </h4>
                  <div className="text-xs md:text-sm font-semibold text-blue-500 uppercase tracking-wider mt-0.5">
                    Ambattur Fashion India Pvt Ltd.
                  </div>
                </div>
                <span className="text-xs text-slate-400 bg-white/4 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  Dec 2024 - Mar 2025
                </span>
              </div>
              <ul className="list-disc pl-5 text-slate-400 text-xs md:text-sm leading-relaxed flex flex-col gap-2">
                <li>Analyzed organizational workflows and business processes to develop a custom ERP system.</li>
                <li>Designed secure database schemas and backend logic aligned with company requirements.</li>
                <li>Implemented Role-Based Access Control (RBAC) to manage user permissions.</li>
                <li>Identified key process gaps and enhanced system features for better workflow efficiency.</li>
              </ul>
            </div>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-6 text-left">
            <h3 className="anim-exp-right text-lg md:text-xl font-bold text-white mb-1">
              Education History
            </h3>
            
            <div className="anim-exp-right bg-white/2 border border-white/6 rounded-[20px] p-5 md:p-6 transition-all duration-300 hover:border-blue-500/30 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h4 className="font-bold text-white text-base md:text-lg leading-snug">
                    Master of Computer Application (MCA)
                  </h4>
                  <div className="text-xs md:text-sm font-semibold text-blue-500 uppercase tracking-wider mt-0.5">
                    Dwaraka Doss Goverdhan Doss Vaishnav College
                  </div>
                </div>
                <span className="text-xs text-slate-400 bg-white/4 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  2024 - 2026
                </span>
              </div>
              <span className="text-xs md:text-sm font-bold text-green-400 mt-1">
                CGPA: 8.45
              </span>
            </div>

            <div className="anim-exp-right bg-white/2 border border-white/6 rounded-[20px] p-5 md:p-6 transition-all duration-300 hover:border-blue-500/30 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                <div>
                  <h4 className="font-bold text-white text-base md:text-lg leading-snug">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <div className="text-xs md:text-sm font-semibold text-blue-500 uppercase tracking-wider mt-0.5">
                    Dr. MGR Educational and Research Institute
                  </div>
                </div>
                <span className="text-xs text-slate-400 bg-white/4 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  2021 - 2024
                </span>
              </div>
              <span className="text-xs md:text-sm font-bold text-green-400 mt-1">
                CGPA: 7.8
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
