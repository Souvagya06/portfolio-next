"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowDownRight, Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="hero-section relative flex min-h-[90vh] items-center overflow-hidden pb-20 pt-32">
      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="section-kicker">Developer · Builder · Problem solver</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }} className="hero-title mb-7 text-balance font-semibold">
              I build <span className="gradient-text">useful</span><br className="hidden sm:block" /> things with code.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }} className="mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I&apos;m Souvagya Karmakar, a full-stack developer working across AI, connected devices, and thoughtful digital products.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .28 }} className="mb-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                <a href="#projects">Explore my work <ArrowUpRight size={17} className="ml-2" /></a>
              </Button>
              <a href="#contact" className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground transition hover:border-primary/60 hover:text-primary">Let&apos;s talk <ArrowDownRight size={16} /></a>
            </motion.div>
            <div className="flex items-center gap-3">
              <span className="mr-2 text-xs uppercase tracking-[.16em] text-muted-foreground">Find me</span>
              <a href="https://github.com/Souvagya06" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/souvagya-karmakar-4b818a389/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="mailto:souvagyakarmakar0712@gmail.com" className="social-link" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8, delay: .18 }} className="hero-portrait-wrap relative mx-auto w-full max-w-[410px] lg:mx-0 lg:justify-self-end">
            <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/souvagya-portrait.png" alt="Souvagya Karmakar" fill priority sizes="(max-width: 1024px) 86vw, 410px" className="object-cover object-top transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191c]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div><span className="block text-xs uppercase tracking-[.18em] text-white/70">Based in</span><span className="mt-1 block text-sm font-medium">Kolkata, India</span></div>
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs backdrop-blur">Open to opportunities</span>
              </div>
            </div>
            <div className="portrait-index" aria-hidden="true">SK<span> / 01</span></div>
          </motion.div>
        </div>
        <a href="#about" className="hero-scroll hidden items-center gap-3 text-xs uppercase tracking-[.16em] text-muted-foreground lg:flex">Scroll to explore <span className="h-px w-12 bg-primary/70" /></a>
      </div>
    </section>
  )
}
