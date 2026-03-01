import { cn } from "@/lib/utils";
import navLinksConfig from "@/config/nav-links.json";

export type NavPageId = "work" | "info" | "blogs" | "contact";

interface NavLinkConfig {
  id: NavPageId;
  label: string;
  href: string;
}

const links = navLinksConfig as NavLinkConfig[];

interface NavLinksProps {
  activePage?: NavPageId;
}

export function NavLinks({ activePage = "work" }: NavLinksProps) {
  return (
    <div className="flex items-center rounded-full border border-border bg-secondary/40 backdrop-blur-xl p-1 animate-fade-in ml-auto md:ml-0">
      {links.map((link) => {
        const isActive = activePage === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            className={cn(
              "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
              isActive
                ? "text-foreground bg-foreground/10 shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
            )}
          >
            {isActive && (
              <span
                className="nav-link-indicator-glow absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-0.5 w-5 rounded-full bg-foreground"
                aria-hidden
              />
            )}
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
