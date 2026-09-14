"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import Image from "next/image"

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
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-3xl text-center lg:text-left">
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
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-balance leading-[0.98]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Souvagya Karmakar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl text-pretty"
          >
            Building intelligent systems that solve real-world problems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
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
            className="flex gap-6 justify-center lg:justify-start"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
          >
            <div className="profile-orbit absolute -inset-5 rounded-[2rem] border border-primary/20" />
            <div className="profile-orbit profile-orbit-delayed absolute -inset-10 rounded-[2.5rem] border border-accent/15" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/80 p-2 shadow-2xl shadow-primary/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-secondary">
                <Image
                  src="/souvagya-profile.jpg"
                  alt="Portrait of Souvagya Karmakar"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 360px"
                  className="object-cover object-top grayscale-[15%] transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Currently building</p>
                    <p className="mt-1 text-lg font-semibold text-white">Useful intelligence</p>
                  </div>
                  <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 glass rounded-xl px-4 py-3 shadow-xl">
              <p className="font-mono text-xs text-muted-foreground">01 / 05</p>
              <p className="mt-1 text-sm font-medium">AI + IoT systems</p>
            </div>
          </motion.div>
        </div>
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
