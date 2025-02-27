"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor in Data Science",
    institution: "Symbiosis Skills and Professional University",
    period: "Aug 2020 - June 2023",
    grade: "CGPA: 8.432",
  },
  {
    degree: "CBSE Class 12th",
    institution: "Dhruv Global School",
    period: "June 2018 - March 2020",
    grade: "Passed with 75%",
    stream: "Science",
  },
]

const certifications = [
  "Internshala: Advanced Excel",
  "DataCamp: Data Analyst using Power BI",
  "Udemy: Django Rest Framework",
]

const achievements = [
  "Kathak Level 3 (Distinction)",
  "All-Rounder Girl Award in Cricket",
  "Secretary for Kids Rotary Club (Age 16)",
  "Nail Artist",
]

export default function Education() {
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
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education & <span className="gradient-text">Achievements</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 card-hover"
                  >
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <h5 className="text-lg gradient-text mb-2">{edu.institution}</h5>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="font-medium">{edu.grade}</p>
                    {edu.stream && <p className="text-sm text-muted-foreground">Stream: {edu.stream}</p>}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-primary" />
                  Certifications
                </h3>

                <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 card-hover">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-primary" />
                  Extracurricular & Achievements
                </h3>

                <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 card-hover">
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

