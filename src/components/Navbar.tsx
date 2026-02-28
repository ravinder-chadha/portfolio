import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activePage?: "work" | "info" | "blogs" | "contact";
}

const navLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ravinder-chadha",
  },
  {
    label: "GitHub",
    href: "https://github.com/ravinder-chadha",
  },
];

export function Navbar({ activePage = "work" }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-background/60 backdrop-blur-xl border-b border-border glow-nav">
      <a href="/" className="animate-fade-in group">
        <div className="text-foreground font-bold text-sm tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
          Ravinder Chadha
        </div>
        <div className="text-muted-foreground text-xs">Software Engineer</div>
      </a>

      <div className="flex items-center rounded-full border border-border bg-secondary/40 backdrop-blur-xl p-1 animate-fade-in">
        <a
          href="/"
          className={cn(
            "px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            activePage === "work"
              ? "text-foreground bg-foreground/10 shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          )}
        >
          Work
        </a>
        <a
          href="/info"
          className={cn(
            "px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            activePage === "info"
              ? "text-foreground bg-foreground/10 shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          )}
        >
          Info
        </a>
        <a
          href="/blogs"
          className={cn(
            "px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            activePage === "blogs"
              ? "text-foreground bg-foreground/10 shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          )}
        >
          Blogs
        </a>
        <a
          href="/contact"
          className={cn(
            "px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
            activePage === "contact"
              ? "text-foreground bg-foreground/10 shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          )}
        >
          Contact
        </a>
      </div>

      <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground animate-fade-in">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 hover:text-foreground transition-colors duration-300"
          >
            {link.label}
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
