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

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4">
      {/* Hamburger */}
      <div className="relative">
        <button
          aria-label="Open navigation"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary shadow-soft hover:-translate-y-0.5 hover:shadow-lift transition-all"
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
              className="absolute left-0 mt-3 w-48 rounded-2xl border border-border bg-surface shadow-lift overflow-hidden"
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
      <motion.div
        className="font-heading text-4xl md:text-5xl"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block"
          animate={{ x: [0, 4, 0], skewX: [0, -6, 0], opacity: [0.8, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        >
          W
        </motion.span>
      </motion.div>

      {/* Theme toggle */}
      <button
        aria-label="Toggle theme"
        className="relative flex h-10 w-14 items-center rounded-full border border-border bg-surface px-1 overflow-hidden"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
        <motion.div
          layout
          className="absolute top-1 bottom-1 w-6 rounded-full bg-[rgba(var(--accent-rgb),0.8)] shadow-soft"
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          animate={{ left: theme === "dark" ? 4 : 24 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-surfaceAlt via-surface to-surfaceAlt opacity-50"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </button>
    </header>
  );
}
