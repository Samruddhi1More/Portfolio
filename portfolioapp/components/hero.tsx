"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-primary mb-2"
          >
            Hello, I&apos;m
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Samruddhi More
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold mb-6 gradient-text"
          >
            Machine Learning Engineer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-muted-foreground text-lg mb-8 max-w-lg"
          >
            Specializing in AI-powered solutions, chatbots, computer vision, and data science to solve complex problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 relative z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personal%20photo.jpg-kiURXHyX5WYVd2cfP8L1y6U6PjqRuP.jpeg"
                alt="Samruddhi More"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="text-primary w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  )
}

