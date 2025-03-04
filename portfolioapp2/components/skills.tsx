"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "SQL", "HTML"],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "LangChain",
      "Llama-Index",
      "FastAPI",
      "Django Rest Framework",
      "OpenAI",
      "PyTorch",
      "GroqCloud",
      "Streamlit",
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      "Computer Vision",
      "NLP",
      "TensorFlow",
      "YOLO",
      "Hugging Face",
      "OpenAI",
      "Ollama",
      "Krutrium",
      "Anthropic",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS-EC2", "Docker", "GitHub"],
  },
  {
    name: "Data Visualization",
    skills: ["PowerBI", "Tableau"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 card-hover"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium skill-pill"
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

