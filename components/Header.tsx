"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
      {/* Hamburger */}
      <div className="relative">
        <button
          aria-label="Open navigation"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg/90 backdrop-blur text-text-primary transition-all hover:border-[color:rgba(var(--accent-rgb),0.35)]"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-[2px] w-6 rounded-full bg-text-primary transition-all group-hover:w-7" />
            <span className="block h-[2px] w-5 rounded-full bg-text-primary transition-all group-hover:w-7" />
            <span className="block h-[2px] w-6 rounded-full bg-text-primary transition-all group-hover:w-7" />
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-3 w-48 rounded-2xl border border-border bg-bg/95 backdrop-blur overflow-hidden"
            >
              <ul className="py-2 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-text-primary hover:bg-surfaceAlt transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Center W motion */}
      <motion.div className="font-heading text-4xl md:text-5xl">
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          W
        </motion.span>
      </motion.div>

      {/* Theme toggle */}
      <button
        aria-label="Toggle theme"
        className="relative flex h-10 w-14 items-center rounded-full border border-border bg-bg/90 backdrop-blur px-1"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        <motion.div
          layout
          className="absolute top-1 bottom-1 w-6 rounded-full bg-[rgba(var(--accent-rgb),0.85)]"
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          animate={{ left: theme === "dark" ? 4 : 24 }}
        />
      </button>
      </div>
    </header>
  );
}
