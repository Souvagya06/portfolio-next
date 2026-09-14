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
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="section-kicker"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            >
              Crafting the Future with{" "}
              <span className="gradient-text">Code & Intelligence</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="editorial-rule mb-12 grid gap-8 py-8 md:grid-cols-[0.55fr_1.45fr] md:gap-16"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate <span className="text-foreground font-medium">AI and Full-Stack Developer</span> who enjoys building intelligent, scalable, and impactful software solutions. My interests span <span className="text-foreground font-medium">artificial intelligence</span>, <span className="text-foreground font-medium">backend engineering</span>, <span className="text-foreground font-medium">full-stack development</span>, and <span className="text-foreground font-medium">IoT systems</span>. From AI-powered educational platforms and construction safety solutions to underwater robotics, I love transforming innovative ideas into real-world applications.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:mt-0">
              I thrive on solving challenging problems by combining modern AI technologies, scalable backend architectures, and embedded systems. I'm always exploring new technologies and building projects that create meaningful impact. Recently, I was selected as a <span className="text-foreground font-medium">Finalist at the Anvil Hackathon</span> organized by <span className="text-foreground font-medium">Scaler School of Technology</span>, where I collaborated with a team to develop an innovative AI-powered solution under tight deadlines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-none border-l-2 border-l-primary/60 p-6 card-glow transition-all duration-300 hover:-translate-y-1"
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
