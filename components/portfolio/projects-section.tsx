"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ProjectCard } from "./project-card"

const featuredProjects = [
  {
    title: "StudyBuddy.AI",
    description:
      "AI-powered academic platform integrating Google Classroom, LLM-based difficulty prediction, assignment analysis, and AI doubt assistance for enhanced learning.",
    techStack: ["React", "Node.js", "OpenRouter", "Google APIs", "SQLite"],
    githubUrl: "https://github.com/Souvagya06/studybuddy-ai",
    liveUrl: "https://studybuddy-ai-4px8.onrender.com",
  },
  {
    title: "Talentra (AI Hiring System)",
    description:
      "AI-based hiring assistant using Whisper and Gemini for resume analysis and interview evaluation with structured scoring, feedback, and unbiased hiring recommendations.",
    techStack: ["FastAPI", "Whisper", "Gemini", "React", "Tailwind"],
    githubUrl: "https://github.com/Souvagya06/talentra-unbiased-hiring",
  },
  {
    title: "CrisisConnect AI",
    description:
      "AI-powered emergency response system that analyzes voice/text input, detects severity, and guides users to nearest hospitals with real-time assistance.",
    techStack: ["Next.js", "Gemini", "Maps API", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/Souvagya06/crisis-connect-ai",
    liveUrl: "https://crisis-connect-ai.vercel.app/",
  },
  {
    title: "Underwater Drone (Aqua Pi)",
    description:
      "Raspberry Pi-based underwater drone for environmental monitoring featuring multiple sensors, live video streaming, and precision robotic control systems.",
    techStack: ["Raspberry Pi", "Python", "OpenCV", "Flask", "WebSocket"],
    githubUrl: "https://github.com/Souvagya06/Underwater-Drone-AquaPi",
  },
]

const otherProjects = [
  {
    title: "RFID Attendance System",
    description:
      "Smart attendance tracking system using RFID technology with real-time data logging and admin dashboard.",
    techStack: ["ESP32", "RFID", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Souvagya06/smart-rfid-attendance-system",
  },
  {
    title: "Event Organizer Web App",
    description:
      "Full-featured event management platform with registration, scheduling, and notification capabilities.",
    techStack: ["React", "Express", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/Souvagya06/event-organizer",
  },
  {
    title: "Restaurant Reservation System",
    description:
      "Modern restaurant booking system with table management, menu display, and customer notifications.",
    techStack: ["React", "Node.js", "SQLite", "Tailwind"],
    githubUrl: "https://github.com/Souvagya06/restaurant-website",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} featured />
            ))}
          </div>

          {/* Other projects header */}
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold"
            >
              Other <span className="gradient-text">Projects</span>
            </motion.h3>
          </div>

          {/* Other projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
