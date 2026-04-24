"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Brain, Cpu, Rocket } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI Systems",
    description: "Designing intelligent solutions using LLMs, Gemini, Whisper, and custom ML pipelines",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "Building end-to-end applications with React, Next.js, Node.js, and FastAPI",
  },
  {
    icon: Cpu,
    title: "IoT & Hardware",
    description: "Creating embedded systems with Raspberry Pi, ESP32, and sensor integration",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, scalable solutions",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            >
              Crafting the Future with{" "}
              <span className="gradient-text">Code & Intelligence</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-8 md:p-10 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate developer who bridges the gap between{" "}
              <span className="text-foreground font-medium">artificial intelligence</span>,{" "}
              <span className="text-foreground font-medium">full-stack development</span>, and{" "}
              <span className="text-foreground font-medium">IoT systems</span>. My work focuses on
              building real-world applications that make a tangible impact—from AI-powered
              educational platforms to emergency response systems and underwater drones.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I thrive on solving complex problems by combining cutting-edge technologies with
              practical engineering. Whether it&apos;s integrating LLMs for intelligent assistance,
              building responsive web applications, or programming embedded systems, I bring a
              holistic approach to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
