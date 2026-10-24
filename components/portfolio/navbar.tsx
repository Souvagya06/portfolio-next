"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav initial={{ y: -36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5 }} className={`site-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "site-nav-scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Souvagya Karmakar home">
          <span className="brand-mark">S</span>
          <span className="text-sm font-semibold tracking-wide">Souvagya<span className="text-primary">.</span></span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => <a key={item.name} href={item.href} className="nav-link">{item.name}</a>)}
          <a href="#contact" className="nav-cta">Get in touch <span>↗</span></a>
        </div>
        <button className="menu-toggle md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mobile-nav md:hidden">
          {navItems.map((item) => <a key={item.name} href={item.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{item.name}<span>↗</span></a>)}
        </motion.div>}
      </AnimatePresence>
    </motion.nav>
  )
}
