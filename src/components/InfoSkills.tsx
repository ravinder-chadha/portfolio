import { Trophy, Star, Code2, Wrench, Brain, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const skillGroups = [
  {
    icon: Code2,
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "Bash", "Lua"],
  },
  {
    icon: Wrench,
    label: "Dev Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "Linux",
      "AWS",
      "Redis",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    icon: Brain,
    label: "Engineering",
    skills: [
      "System Design",
      "Distributed Systems",
      "Data Pipelines",
      "Networking",
      "DBMS",
      "OOPs",
      "DSA",
    ],
  },
  {
    icon: Star,
    label: "AI / ML",
    skills: ["Machine Learning", "TensorFlow", "AI Tools", "Kaggle"],
  },
  {
    icon: Globe,
    label: "Testing & APIs",
    skills: ["Postman", "Selenium", "REST APIs"],
  },
];

const achievements = [
  {
    label: "All India Rank 1",
    sub: "National Engineering Olympiad",
  },
  {
    label: "2nd Prize — Hackmol 3.0",
    sub: "Google Developer Student Clubs Hackathon",
  },
  {
    label: "Top 10 — Winter of Code",
    sub: "GDSC IIIT Kalyani, Open Source Contributions",
  },
  {
    label: "Microsoft Cybersecurity",
    sub: "Engage Program Completion Certificate",
  },
];

export function InfoSkills() {
  return (
    <section className="px-6 md:px-8 pb-24 md:pb-32 max-w-5xl mx-auto">
      {/* Skills */}
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12 font-medium">
          Skills
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <FadeIn key={group.label} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 glow-card hover:border-foreground/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={16} className="text-muted-foreground" />
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground/70 bg-foreground/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Achievements */}
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12 font-medium">
          Achievements
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((item, i) => (
          <FadeIn key={item.label} delay={i * 80}>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 glow-card hover:border-foreground/20 transition-all duration-500">
              <div className="mt-0.5 flex-shrink-0">
                <Trophy size={16} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education */}
      <FadeIn delay={100}>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 glow-card">
          <div className="flex items-start gap-4">
            <div className="mt-0.5">
              <Star size={16} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                B.Tech, Electrical Engineering — CGPA 8.56
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Dr. B R Ambedkar NIT Jalandhar &middot; Dec 2020 — Jun 2024
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
