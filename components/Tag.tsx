import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surfaceAlt px-3 py-1 text-xs font-medium text-text-secondary shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:border-[color:rgba(var(--accent-rgb),0.4)] hover:text-text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
