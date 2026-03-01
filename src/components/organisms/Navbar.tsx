import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import { NavLinks, type NavPageId } from "@/components/molecules/NavLinks";

interface NavbarProps {
  activePage?: NavPageId;
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
    <nav className="fixed top-0 w-full z-50 flex items-center gap-2 justify-between px-6 md:px-8 py-6">
      <a href="/" className="animate-fade-in group">
        <div className="text-foreground font-bold text-lg tracking-tight group-hover:text-foreground/80 transition-colors duration-300">
          Ravinder Chadha
        </div>
        <div className="text-muted-foreground text-sm">Software Engineer</div>
      </a>

      <NavLinks activePage={activePage} />

      {/* Desktop: inline links */}
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground animate-fade-in">
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

      {/* Mobile: dropdown with blur-styled trigger */}
      <div className="flex md:hidden animate-fade-in">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="glass"
              size="icon-lg"
              className="transition-colors duration-300"
              aria-label="Open links menu"
            >
              <Menu size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} align="end" className="min-w-40">
            {navLinks.map((link) => (
              <DropdownMenuItem asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center gap-1.5 rounded-sm px-2 py-1.5 text-sm text-muted-foreground outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
