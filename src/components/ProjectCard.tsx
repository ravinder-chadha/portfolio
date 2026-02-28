import { ArrowRight } from "lucide-react";
import { BrowserFrame } from "@/components/BrowserFrame";

interface ProjectCardProps {
  title: string;
  company: string;
  year: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({
  title,
  company,
  year,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="group block rounded-2xl border border-border bg-card p-6 md:p-10 lg:p-12 glow-card transition-all duration-500 ease-out hover:glow-card-hover hover:border-foreground/20 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>
        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-foreground/20 group-hover:bg-foreground/5 transition-all duration-500">
          <ArrowRight
            className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300"
            size={18}
          />
        </div>
      </div>

      <p className="mt-3 text-muted-foreground text-sm md:text-base">
        {company}, &apos;{year} &mdash; {description}
      </p>

      <BrowserFrame className="mt-8 transition-shadow duration-500 group-hover:glow-card-hover">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </BrowserFrame>
    </div>
  );
}
