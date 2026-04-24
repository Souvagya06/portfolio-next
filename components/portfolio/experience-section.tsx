"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Pinnacle Labs",
    period: "Mar 2026 – Apr 2026",
    description: [
      "Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
      "Improved UI/UX by optimizing layouts, styling consistency, and mobile responsiveness.",
      "Collaborated on real-world web development tasks, gaining experience in debugging, version control, and deployment workflows."
    ].join(" "),
  
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Node.js", "Express.js"],
  },
  {
    role: "Python Development Intern",
    company: "Pinnacle Labs",
    period: "March 2026 – April 2026",
    description: [
      "Developed backend logic and automation scripts using Python for real-world problem solving.",
      "Worked on data processing and handling structured data efficiently.",
      "Gained hands-on experience in writing clean, modular, and maintainable Python code."
    ].join(" "),
  
    skills: ["Python", "Data Processing", "Automation", "Problem Solving"],
  },
  {
    role: "Web Development Intern",
    company: "SyntecxHub",
    period: "April 2026 - May 2026",
  description: [
    "Selected as a Web Development Intern at SyntecxHub based on technical skills and project experience.",
    "Worked on building responsive web interfaces using modern frontend technologies.",
    "Gained hands-on exposure to real-world development workflows, debugging, and UI optimization."
  ].join(" "),
  
  skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
}
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
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
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mt-4"
            >
              My <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)] md:text-right" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 rounded-full bg-primary glow top-1 -left-2 md:left-1/2 md:-translate-x-1/2`}
                />

                <div className="glass rounded-xl p-6 card-glow transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground mb-4">
                    {exp.period}
                  </span>

                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded bg-primary/20 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
