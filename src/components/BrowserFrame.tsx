import { Plus } from "lucide-react";
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
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "overflow-hidden transition-shadow duration-500 rounded-2xl shadow-lg",
        isHero ? "border border-white/10 bg-[#1A1A1A]" : "border border-border bg-card glow-card",
        className
      )}
    >
      {/* Title bar: macOS-style traffic lights + new tab */}
      <div
        className={cn(
          "flex items-center justify-between border-b border-white/5",
          isHero
            ? "px-4 py-3 bg-[#252525]/90"
            : "px-4 py-2.5 border-border bg-background/30"
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full bg-[#ff5f57]",
              isHero ? "w-3 h-3" : "w-2.5 h-2.5"
            )}
          />
          <span
            className={cn(
              "rounded-full bg-[#febc2e]",
              isHero ? "w-3 h-3" : "w-2.5 h-2.5"
            )}
          />
          <span
            className={cn(
              "rounded-full bg-[#28c840]",
              isHero ? "w-3 h-3" : "w-2.5 h-2.5"
            )}
          />
        </div>
        {isHero && (
          <button
            type="button"
            className="p-1 rounded text-white/50 hover:text-white/80 hover:bg-white/5 transition-colors"
            aria-label="New tab"
          >
            <Plus className="size-4" strokeWidth={2} />
          </button>
        )}
      </div>
      {/* Content area: hero uses dark bg, default passes through */}
      <div className={cn(isHero && "bg-[#1A1A1A]")}>{children}</div>
    </div>
  );
}
