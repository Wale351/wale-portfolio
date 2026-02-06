"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { experience, projects, skills, strengths, tools } from "@/data/site";

const lineVariant = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HomePage() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <main id="main" className="relative">
      {/* Hero */}
      <section id="home" className="section">
        <div className="container-max flex flex-col items-center gap-10 text-center">
          <p className="text-xs tracking-[0.3em] text-text-muted uppercase">
            MANAGING COMMUNITIES SINCE - Y:2021
          </p>
          <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-0 text-[18vw] leading-none font-heading font-extrabold tracking-tight text-text-primary">
              <span className="inline-block text-accent-teal drop-shadow-[0_0_25px_rgba(var(--accent-rgb),0.35)]">
                WA
              </span>
              <div className="-mx-2 h-[18vw] w-[18vw] min-h-[160px] min-w-[160px] flex items-center justify-center overflow-visible">
                <img
                  src="/Wale.PNG"
                  alt="Wale mascot"
                  className="block h-full w-full object-contain object-center"
                />
              </div>
              <span className="inline-block text-accent-teal drop-shadow-[0_0_25px_rgba(var(--accent-rgb),0.35)]">
                LE
              </span>
            </div>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl">
            I’m Wale, a Community Lead with 4 years of experience creating safe, engaging, and
            well-managed online spaces.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container-max space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="section-title">ABOUT</h2>
            <motion.div
              className="h-px bg-border flex-1"
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 text-text-secondary">
            <p>
              A community lead with 4yrs+ of hands-on experience growing active, engaged
              communities. I&apos;ve managed teams, hosted events, and kept things running smoothly across
              different platforms. I&apos;m big on clear communication, staying organized and making sure
              members actually enjoy being part of the space. I like building communities that feel
              welcoming and fun.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Discord",
                  desc: "Set up roles, channels, and permissions; enforce rules and keep channels spam-free",
                  stat: "96%"
                },
                {
                  title: "Community Engagement",
                  desc: "Plan and run events, contests, and AMAs to boost activity and retention",
                  stat: "95%"
                },
                {
                  title: "Auto-Mod Bots",
                  desc: "Configure Carl-bot, Dyno, MEE6 for filters, auto-warnings, and welcome messages",
                  stat: "89%"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-1 hover:border-[color:rgba(var(--accent-rgb),0.4)]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[rgba(var(--accent-rgb),0.7)]" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-heading text-base text-text-primary">{item.title}</p>
                      <p className="text-xs text-text-secondary">{item.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[color:rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.12)] px-3 py-1 text-xs font-semibold text-accent-teal">
                      {item.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container-max space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="section-title">PROJECTS</h2>
            <motion.div
              className="h-px bg-border flex-1"
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="relative aspect-[4/3] rounded-2xl border border-border bg-surfaceAlt overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ scale: activeProject === project.title ? 1.04 : 1 }}
                onClick={() => setActiveProject(activeProject === project.title ? null : project.title)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-rgb),0.15)] to-surface"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: activeProject === project.title ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono text-sm">
                  Placeholder
                </div>
                <AnimatePresence>
                  {activeProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      className="absolute bottom-0 left-0 right-0 bg-surface backdrop-blur border-t border-border px-4 py-3"
                    >
                      <p className="text-sm font-heading text-text-primary">{project.title}</p>
                      <p className="text-xs text-text-secondary">{project.tag}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container-max space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="section-title">EXPERIENCE</h2>
            <motion.div
              className="h-px bg-border flex-1"
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {experience.map((item) => (
              <div key={`${item.company}-${item.title}`} className="space-y-3">
                <div>
                  <h3 className="font-heading text-xl text-text-primary">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.company}</p>
                  <p className="text-sm text-text-muted">{item.duration}</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{item.summary}</p>
                <div className="h-px w-full bg-border/70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-max grid gap-6 md:grid-cols-3 text-center">
          {[
            { label: "Daily active moderation", value: "8+ hrs" },
            { label: "Response time", value: "2 Mins" },
            { label: "Positive feedback rate", value: "100%" }
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="h-px w-full bg-border/70" />
              <p className="text-2xl font-heading text-text-primary">{stat.value}</p>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container-max space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="section-title">SKILLS</h2>
            <motion.div
              className="h-px bg-border flex-1"
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Capabilities</p>
              <h3 className="mt-2 font-heading text-lg text-text-primary">Community Strengths</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <Tag key={item.title}>{item.title}</Tag>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Tooling</p>
              <h3 className="mt-2 font-heading text-lg text-text-primary">Platforms & Bots</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container-max flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl text-text-primary">Let&apos;s build together.</h2>
          <p className="text-text-secondary max-w-xl">
            Reach out for roles or consulting. Share your goals and I&apos;ll respond with a focused
            plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="mailto:hello@alexrivera.xyz">Email me</Button>
            <Button href="#projects" variant="secondary">
              View projects
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
