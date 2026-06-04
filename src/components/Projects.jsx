import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.proj-title', 
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

      // Cards stagger animation
      gsap.fromTo('.anim-proj-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
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

  const projectList = [
    {
      title: 'FinAccura',
      description: 'An ERP System for Financial and Operational Workflow Management. Features process tracking, detailed reporting, centralized data handling, role-based authentication, and custom database services.',
      tools: ['React.js', 'Redux Toolkit', 'Node.js'],
      github: 'https://github.com/VishnuVk02/FinAccura---ERP',
    },
    {
      title: 'AI Churn Prediction',
      description: 'An AI-powered customer churn prediction system designed to identify behavioral patterns and user retention indicators by analyzing customer usage databases.',
      tools: ['React.js', 'Python', 'Spring Boot'],
      github: 'https://github.com/VishnuVk02/Customer-churn',
    }
  ]

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="w-full min-h-screen flex justify-center items-center relative z-10 px-4 md:px-8 py-16 overflow-hidden"
    >
      <div className="glass-panel w-full max-w-[1050px] bg-[#080914]/2 backdrop-blur-2xl border border-white/7 rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col gap-8">
        <h2 className="proj-title text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-left">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index}
              className="anim-proj-card bg-white/2 border border-white/6 rounded-[24px] p-6 md:p-8 text-left flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-semibold text-blue-500 bg-blue-500/7 border border-blue-500/15 px-3 py-1 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-slate-200 bg-white/4 border border-white/10 hover:bg-white/8 hover:text-white transition-all duration-300 self-start"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
