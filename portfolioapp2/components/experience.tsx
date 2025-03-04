"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "Pyrack Technologies Pvt, Ltd.",
    period: "Jan 2024 - Present",
    description: [
      "Leading the development of an AI-powered customer support chatbot with multilingual capabilities",
      "Implementing vector stores for efficient knowledge retrieval and context-aware responses",
      "Designing intelligent query processing systems with fallback mechanisms for out-of-scope questions",
      "Building robust backend infrastructure with Django Rest Framework for seamless integration",
    ],
    client: "Technology Company",
    project: "AI Customer Support Solution",
  },
  {
    title: "Data Science Intern",
    company: "Pyrack Technologies Pvt, Ltd.",
    period: "Sep 2023 - Dec 2023",
    description: [
      "Researched and prototyped innovative video content search technologies",
      "Developed multimodal solutions combining speech recognition, text processing, and video analysis",
      "Implemented speaker diarization for enhanced content understanding",
      "Created proof-of-concept demonstrations for stakeholder presentations",
    ],
    client: "Internal R&D",
    project: "Video Content Intelligence Platform",
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 relative">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline dot and line */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    {index !== experiences.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-4"></div>}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 card-hover">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-medium gradient-text mb-2">{exp.company}</h4>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium mb-1">Project: {exp.project}</h5>
                        <p className="text-sm text-muted-foreground">Client: {exp.client}</p>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

