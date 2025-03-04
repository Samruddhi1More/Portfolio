"use client"

import type React from "react"

// import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // In a real application, you would handle form submission here
  //   console.log("Form submitted:", formData)
  //   alert("Thank you for your message! I'll get back to you soon.")
  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   })
  // }

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
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:samruddhimore@hotmail.com"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        samruddhimore@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/moresamruddhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        linkedin.com/in/moresamruddhi
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href="https://github.com/Samruddhi1More"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        github.com/Samruddhi1More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20 h-full">
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>

                <p className="text-lg mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Feel free to reach out to me via email or connect with me on LinkedIn.
                </p>

                <div className="flex flex-col space-y-4">
                  <Button
                    className="w-full bg-primary hover:bg-primary/80 text-white"
                    onClick={() => window.open("mailto:samruddhimore@hotmail.com")}
                  >
                    <Mail className="w-5 h-5 mr-2 text-white" />
                    <span className="text-white">Email Me</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open("https://www.linkedin.com/in/moresamruddhi", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open("https://github.com/Samruddhi1More", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Follow on GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </section>
  )
}

