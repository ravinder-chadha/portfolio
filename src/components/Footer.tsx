import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const mainLinks = [
  { label: "Work", href: "/" },
  { label: "Info", href: "/info" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ravinder-chadha",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/ravinder-chadha",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:ravinderchadha1233@gmail.com",
    external: true,
  },
];

export function Footer() {
  return (
    <footer
      id="info"
      className="border-t border-border px-6 md:px-8 py-16 md:py-20 max-w-5xl mx-auto"
    >
      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
              Main
            </p>
            <div className="flex flex-col gap-4">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-foreground w-fit hover:text-foreground/70 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground/30 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center gap-1.5 text-foreground w-fit hover:text-foreground/70 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground/30 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                  {link.external && (
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="text-muted-foreground text-sm">
          &copy; 2026 Ravinder Chadha. All Rights Reserved.
        </p>
      </FadeIn>
    </footer>
  );
}
