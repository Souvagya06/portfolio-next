"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect } from "react"

const ParticleField = dynamic(
  () => import("./particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
)

function CursorTrail() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.25 })
  const smoothY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.25 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-trail fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_6px_oklch(0.82_0.15_175_/_0.2)] pointer-events-none"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
    />
  )
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <CursorTrail />
      <ParticleField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,oklch(0.35_0.08_175_/_0.18),transparent_28%),linear-gradient(to_bottom,transparent,oklch(0.08_0.012_190_/_0.92))] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-10 bg-primary" />
              <span className="section-kicker">Full stack / AI systems / IoT</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="display-title mb-8 font-bold text-balance">
              Souvagya<br /><span className="gradient-text">Karmakar.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Building intelligent systems that solve real-world problems, from AI-powered platforms to connected hardware that works in the physical world.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex justify-center gap-5 lg:justify-start">
            <motion.a
              href="https://github.com/Souvagya06"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              whileHover={{ y: -3 }}
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/souvagya-karmakar-4b818a389/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:souvagyakarmakar0712@gmail.com"
              className="glass rounded-full p-3 text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              whileHover={{ y: -3 }}
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
          >
            <div className="profile-orbit absolute -inset-5 rounded-[2rem] border border-primary/20" />
            <div className="profile-orbit profile-orbit-delayed absolute -inset-10 rounded-[2.5rem] border border-accent/15" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/80 p-2 shadow-2xl shadow-primary/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-secondary">
                <Image
                  src="https://avatars.githubusercontent.com/u/221105245?v=4"
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
            <div className="absolute -right-5 top-5 glass rounded-xl px-4 py-3 shadow-xl">
              <p className="font-mono text-xs text-muted-foreground">AVAILABLE FOR WORK</p>
              <p className="mt-1 text-sm font-medium">AI + IoT systems</p>
            </div>
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
