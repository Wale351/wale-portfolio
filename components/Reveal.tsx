"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      // Subtle motion keeps focus on content.
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
