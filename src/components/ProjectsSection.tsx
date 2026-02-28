import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Image Vulnerability & Scanning Pipeline",
    company: "RapidFort",
    year: "23",
    description:
      "Automated pipeline scanning 10,000+ container images daily across 10+ VMs with detailed security reports.",
    imageUrl: "https://placehold.co/1200x700",
  },
  {
    title: "Package Release Dates",
    company: "RapidFort",
    year: "24",
    description:
      "Tracking release dates for millions of packages across 15+ Linux distributions for precise vulnerability detection.",
    imageUrl: "https://placehold.co/1200x700",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="px-6 md:px-8 py-24 md:py-32 max-w-5xl mx-auto"
    >
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12 font-medium">
          Selected Work
        </p>
      </FadeIn>
      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 150}>
            <ProjectCard {...project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
