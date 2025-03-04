"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "QueryMate - AI Customer Support Chatbot",
    description:
      "An AI-powered customer support chatbot designed to provide businesses with a highly customizable support solution using proprietary code documentation.",
    technologies: ["Django Rest Framework", "LangChain", "OpenAI", "PostgreSQL", "FAISS/Chroma"],
    points: [
      "Document-Based Training: Upload company-specific documentation to generate precise answers",
      "Intelligent Query Processing: AI-powered analysis and context-aware responses",
      "Multilingual Support: Automatically detects and responds in the user's language",
      "Secure & Role-Based Access: Ensures controlled access and protects company data",
    ],
    image: "/CSS.webp?height=300&width=500",
    github: "https://github.com/Samruddhi1More/QueryMate",
    status: "Under Development",
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-primary/20 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    src={project.image || "/CSS.webp"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm">
                      {project.points.slice(0, 2).map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium skill-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.status && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium self-center">
                          {project.status}
                        </span>
                      )}
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

