"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-2xl font-bold gradient-text mb-2">SK</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Made by Souvagya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Souvagya06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/souvagya-karmakar-4b818a389/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:souvagyakarmakar0712@gmail.com"
              className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground text-center md:text-right"
          >
            © {currentYear} Souvagya Karmakar. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
