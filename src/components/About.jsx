import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.fromTo('.about-title', 
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

      // Animate left column contents
      gsap.fromTo('.anim-left', 
        { x: -30, opacity: 0 },
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

      // Animate right column contents
      gsap.fromTo('.anim-right', 
        { x: 30, opacity: 0 },
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

  const technicalExposure = [
    'React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 
    'PostgreSQL', 'MongoDB', 'RESTful APIs', 'RBAC Auth', 
    'SDLC Basics', 'UI/UX Layouts', 'Manual Testing'
  ]

  const tools = ['Git & GitHub', 'VS Code', 'Figma']

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="w-full min-h-screen flex justify-center items-center relative z-10 px-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="glass-panel w-full max-w-[1050px] bg-[#080914]/2 backdrop-blur-2xl border border-white/7 rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col gap-8">
        <h2 className="about-title text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-left">
          About & Skills
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6 text-left">
            <div className="anim-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Who I Am</h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                I am a motivated developer with practical experience in modern technologies. 
                I have a strong understanding of REST API design, state management, role-based authentication, 
                and database schema operations. I am committed to continuous learning and writing clean, maintainable code.
              </p>
            </div>
            
            <div className="anim-left">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Technical Exposure</h3>
              <div className="flex flex-wrap gap-2.5">
                {technicalExposure.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-white/3 border border-white/8 text-slate-300 px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white hover:shadow-[0_0_10px_rgba(0,119,255,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 text-left">
            <div className="anim-right">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-white/3 border border-white/8 text-slate-300 px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500 hover:text-white hover:shadow-[0_0_10px_rgba(0,119,255,0.2)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="anim-right flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Certifications</h3>
              
              <div className="bg-white/2 border border-white/6 rounded-2xl p-4 flex flex-col gap-1.5 transition-all duration-300 hover:border-blue-500/30">
                <span className="font-semibold text-white text-sm md:text-base">Full Stack Development</span>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">Inlustro</span>
              </div>
              
              <div className="bg-white/2 border border-white/6 rounded-2xl p-4 flex flex-col gap-1.5 transition-all duration-300 hover:border-blue-500/30">
                <span className="font-semibold text-white text-sm md:text-base">UI/UX Designing</span>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">TVS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
