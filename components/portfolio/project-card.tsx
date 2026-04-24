"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MouseEvent } from "react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  index: number
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  featured = false,
  index,
}: ProjectCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        rotateX: featured ? rotateX : 0,
        rotateY: featured ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={featured ? handleMouseMove : undefined}
      onMouseLeave={featured ? handleMouseLeave : undefined}
      className={`group relative ${featured ? "perspective-1000" : ""}`}
    >
      <div
        className={`glass rounded-2xl overflow-hidden card-glow transition-all duration-300 h-full ${
          featured ? "p-8" : "p-6"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        <div className="relative z-10">
          <h3
            className={`font-bold mb-3 group-hover:gradient-text transition-all duration-300 ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {title}
          </h3>

          <p
            className={`text-muted-foreground mb-6 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              size={featured ? "default" : "sm"}
              className="border-primary/50 hover:bg-primary/10"
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={featured ? 18 : 16} />
                GitHub
              </a>
            </Button>
            {liveUrl && (
              <Button
                asChild
                size={featured ? "default" : "sm"}
                className="bg-primary hover:bg-primary/90"
              >
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={featured ? 18 : 16} />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
