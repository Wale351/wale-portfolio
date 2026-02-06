import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const styles =
    variant === "primary"
      ? "bg-accent-teal text-bg hover:-translate-y-0.5 hover:shadow-lift"
      : "border border-border text-text-primary hover:bg-surfaceAlt hover:-translate-y-0.5";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={cn(base, styles, className)}>
      {children}
    </a>
  );
}
