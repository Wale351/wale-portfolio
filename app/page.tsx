"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { experience, projects, skills, tools } from "@/data/site";

const lineVariant = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <main id="main" className="relative">
      {/* Hero */}
      <section id="home" className="section pt-32 md:pt-40">
        <div className="container-max flex flex-col items-center gap-10 text-center">
          <p className="text-xs tracking-[0.3em] text-text-muted uppercase">
            MANAGING COMMUNITIES SINCE - Y:2021
          </p>
          <div className="relative flex items-center justify-center gap-0 text-[24vw] md:text-[18vw] leading-none font-heading font-extrabold tracking-tight text-text-primary">
            <span className="-mr-[0.5vw] inline-block text-accent-teal">WA</span>
            <motion.img
              src="/Wale.PNG"
              alt="Wale mascot"
              className="-mx-[1.2vw] h-[24vw] w-[24vw] min-h-[190px] min-w-[190px] object-contain"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="-ml-[0.5vw] inline-block text-accent-teal">LE</span>
          </div>
          <Reveal delay={0.6}>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              I’m Wale, a Community Lead with 4 years of experience creating safe, engaging, and
              well-managed online spaces.
            </p>
          </Reveal>
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
          <div className="grid gap-12 md:grid-cols-2 text-text-secondary">
            <p className="text-base md:text-lg leading-relaxed">
              A community lead with 4yrs+ of hands-on experience growing active, engaged communities.
              I&apos;ve managed teams, hosted events, and kept things running smoothly across different
              platforms. I&apos;m big on clear communication, staying organized and making sure members
              actually enjoy being part of the space. I like building communities that feel
              welcoming and fun.
            </p>
            <div className="divide-y divide-border">
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
                <div key={item.title} className="py-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="space-y-2">
                      <p className="font-heading text-base text-text-primary">{item.title}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-accent-teal">
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
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative aspect-[4/3] overflow-hidden bg-surfaceAlt"
              >
                <div className="absolute inset-0 p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-rgb),0.12)] to-[rgba(var(--bg-rgb),0.35)]" />
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full translate-y-6 bg-[rgba(var(--bg-rgb),0.88)] px-4 py-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-heading text-text-primary">{project.title}</p>
                    <p className="text-xs text-text-secondary">{project.tag}</p>
                  </div>
                </div>
              </a>
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
          <div className="divide-y divide-border">
            {experience.map((item) => (
              <div key={`${item.company}-${item.title}`} className="py-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="font-heading text-2xl text-text-primary">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.company}</p>
                  </div>
                  <p className="text-sm text-text-muted">{item.duration}</p>
                </div>
                <p className="mt-4 text-text-secondary text-base leading-relaxed max-w-3xl">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-max">
          <div className="grid gap-6 md:grid-cols-3 text-left divide-y divide-border md:divide-y-0 md:divide-x">
            {[
              { label: "Daily active moderation", value: "8+ hrs" },
              { label: "Response time", value: "2 Mins" },
              { label: "Positive feedback rate", value: "100%" }
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:px-6 md:py-0">
                <p className="text-3xl md:text-4xl font-heading text-text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
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
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Capabilities</p>
              <h3 className="mt-3 font-heading text-2xl text-text-primary">Community Strengths</h3>
              <ul className="mt-6 space-y-3 text-sm text-text-secondary">
                {skills.map((item) => (
                  <li key={item} className="border-b border-border pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-text-muted">Tools</p>
              <h3 className="mt-3 font-heading text-2xl text-text-primary">Platforms & Bots</h3>
              <ul className="mt-6 space-y-3 text-sm text-text-secondary">
                {tools.map((tool) => (
                  <li key={tool} className="border-b border-border pb-3">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container-max space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="section-title">CONTACT</h2>
            <motion.div
              className="h-px bg-border flex-1"
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-heading text-2xl text-text-primary">Need a Community Lead? Let’s talk</h3>
            <div className="flex flex-wrap gap-6 text-sm">
              <a className="link-underline" href="https://x.com/wale246?s=21">
                X
              </a>
              <a className="link-underline" href="https://t.me/Wale_351">
                Telegram
              </a>
              <a className="link-underline" href="discord://-/users/956190502607290419">
                Discord
              </a>
              <a className="link-underline" href="mailto:real0xwale@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
