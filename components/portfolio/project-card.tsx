"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  index: number
}

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl, featured = false, index }: ProjectCardProps) {
  return (
    <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .45, delay: (index % 2) * .08 }} className={`project-card group ${featured ? "project-card-featured" : ""}`}>
      <div className="project-card-top"><span className="project-number">0{index + 1}</span><span className="project-type">{featured ? "Featured project" : "Selected work"}</span><ArrowUpRight size={18} className="project-arrow" /></div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={16} /> Source code</a>
        {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live project</a>}
      </div>
    </motion.article>
  )
}
