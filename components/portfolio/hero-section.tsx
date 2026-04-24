"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ParticleField = dynamic(
  () => import("./particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
)

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full glass text-primary">
              Full Stack Developer | AI Systems Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Souvagya Karmakar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            Building intelligent systems that solve real-world problems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/Souvagya06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              whileHover={{ y: -3 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/souvagya-karmakar-4b818a389/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:souvagyakarmakar0712@gmail.com"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              whileHover={{ y: -3 }}
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
