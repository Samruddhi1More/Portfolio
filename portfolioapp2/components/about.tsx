"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20"
          >
            <p className="text-lg mb-4">
              I&apos;m a passionate Machine Learning Engineer with expertise in developing AI-powered solutions that
              solve real-world problems. My journey in the field of data science and machine learning has equipped me
              with a diverse skill set spanning from natural language processing to computer vision.
            </p>
            <p className="text-lg mb-4">
              Currently working at Pyrack Technologies, I specialize in building intelligent systems including
              multilingual chatbots, security surveillance solutions, and defect classification systems. I enjoy the
              challenge of turning complex data into actionable insights and creating AI applications that enhance user
              experiences.
            </p>
            <p className="text-lg">
              Beyond my technical skills, I&apos;m also a trained Kathak dancer and have been recognized for my
              contributions in sports and social work. I believe in continuous learning and am always excited to explore
              new technologies and methodologies in the ever-evolving field of artificial intelligence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

