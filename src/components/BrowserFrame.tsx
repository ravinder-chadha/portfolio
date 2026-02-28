import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero";
}

export function BrowserFrame({
  children,
  className,
  variant = "default",
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card overflow-hidden transition-shadow duration-500",
        variant === "hero" ? "glow-hero" : "glow-card",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b border-border bg-background/30",
          variant === "hero" ? "px-5 py-3.5" : "px-4 py-2.5"
        )}
      >
        <span
          className={cn(
            "rounded-full bg-red-500/80",
            variant === "hero" ? "w-3 h-3" : "w-2.5 h-2.5"
          )}
        />
        <span
          className={cn(
            "rounded-full bg-yellow-500/80",
            variant === "hero" ? "w-3 h-3" : "w-2.5 h-2.5"
          )}
        />
        <span
          className={cn(
            "rounded-full bg-green-500/80",
            variant === "hero" ? "w-3 h-3" : "w-2.5 h-2.5"
          )}
        />
      </div>
      {children}
    </div>
  );
}
