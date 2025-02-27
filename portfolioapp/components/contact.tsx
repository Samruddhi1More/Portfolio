"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+917757953164" className="text-lg font-medium hover:text-primary transition-colors">
                        +91 7757953164
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
              <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

