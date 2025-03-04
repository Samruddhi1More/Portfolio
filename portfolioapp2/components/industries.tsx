"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, Lightbulb, Factory } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const industries = [
  {
    title: "Technology & AI Solutions",
    company: "Pyrack Technologies",
    role: "Machine Learning Engineer",
    description: "Projects involving AI-powered surveillance, technical chatbots, and computer vision",
    logo: "/pyrack_logo.jpeg",
    icon: Building2,
  },
  {
    title: "Renewable Energy",
    company: "Enerdatics",
    role: "Business Analyst Intern",
    description: "Focused on mergers and acquisitions in the renewable sector",
    logo: "/enerdatics.jpg",
    icon: Lightbulb,
  },
  {
    title: "Manufacturing & Industrial IoT",
    company: "CAM TOOLS Pvt Ltd",
    role: "Data Scientist Intern",
    description:
      "Worked on IoT data analysis, Overall Equipment Effectiveness (OEE) reporting, data visualization and process digitization in manufacturing plants",
    logo: "/ct2.jpg",
    icon: Factory,
  },
]

export default function Industries() {
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
    <section id="industries" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Industries I&apos;ve Worked <span className="gradient-text">In</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-secondary/30 backdrop-blur-sm border-primary/20 overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 relative">
                        <Image
                          width={100}
                          height={100}
                          src={industry.logo || "/placeholder.svg"}
                          alt={`${industry.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                    <div className="mb-4">
                      <p className="text-lg font-medium gradient-text">{industry.company}</p>
                      <p className="text-sm text-muted-foreground">{industry.role}</p>
                    </div>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

