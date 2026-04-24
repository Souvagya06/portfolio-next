"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Server, Brain, Database, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "FastAPI", "Python", "REST APIs"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Groq", "Gemini", "OpenRouter", "LLM APIs", "Whisper", "LangChain"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["Turso", "SQLite", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    title: "Hardware & IoT",
    icon: Cpu,
    skills: ["ESP32", "Raspberry Pi", "Arduino", "Sensors", "RFID"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-accent/5 to-background pointer-events-none" />

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
              Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              Technical <span className="gradient-text">Expertise</span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass rounded-xl p-6 card-glow transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </motion.div>
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
