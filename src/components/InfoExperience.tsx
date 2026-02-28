import { FadeIn } from "@/components/FadeIn";

const experience = [
  {
    company: "RapidFort",
    role: "Software Engineer Technical Lead",
    period: "07/'25 — Present",
    location: "Sunnyvale, CA",
    description:
      "Leading the Scanner team to build and scale core container security systems. Designing distributed systems and high-volume data pipelines. Mentoring engineers and guiding technical direction.",
  },
  {
    company: "RapidFort",
    role: "Software Engineer",
    period: "06/'24 — 06/'25",
    location: "Sunnyvale, CA",
    description:
      "Enhancing Linux vulnerability scanning capabilities. Developed tooling to manage release dates for packages across different ecosystems, ensuring accuracy and efficiency in package management and security.",
  },
  {
    company: "RapidFort",
    role: "Software Developer Consultant",
    period: "05/'23 — 05/'24",
    location: "Sunnyvale, CA",
    description:
      "Built an automated pipeline scanning 10,000+ container images daily. Created AI-assisted tools to justify CVEs and automation to compare results across scanners. Near 100% accuracy, 99% efficiency in CVE remediation.",
  },
  {
    company: "NIT Jalandhar",
    role: "Full Stack Web Developer",
    period: "06/'22 — 04/'23",
    location: "Jalandhar, India",
    description:
      "Built and maintained web applications for the institute. Worked on full-stack solutions contributing to the academic infrastructure of Dr. B R Ambedkar NIT Jalandhar.",
  },
  {
    company: "GDSC, NIT Jalandhar",
    role: "Flutter Lead",
    period: "07/'22 — 06/'23",
    location: "Jalandhar, India",
    description:
      "Led hands-on Flutter workshops covering full course content, Dart, and backend integration. Ran IoT sessions with Firebase, Blynk, and TinkerCAD using Arduino UNO and ESP32.",
  },
  {
    company: "Writo Education",
    role: "SDE Intern",
    period: "10/'21 — 12/'21",
    location: "Jalandhar, India",
    description:
      "Wrote code for two alpha-stage Flutter apps. Integrated Razorpay, AWS, OCR, and FCM. Implemented dark mode and animations for improved UX.",
  },
];

export function InfoExperience() {
  return (
    <section className="px-6 md:px-8 pb-24 md:pb-32 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12 font-medium">
          Experience
        </p>
      </FadeIn>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <FadeIn key={`${job.company}-${job.role}`} delay={i * 80}>
            <div className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-8 border-b border-border last:border-b-0 hover:bg-foreground/[0.02] transition-colors duration-300 -mx-4 px-4 rounded-lg">
              {/* Left: meta */}
              <div className="flex flex-col gap-1">
                <span className="text-base md:text-lg font-semibold text-foreground tracking-tight">
                  {job.company}
                </span>
                <span className="text-xs text-muted-foreground/60 font-mono">
                  {job.period}
                </span>
                <span className="text-xs text-muted-foreground/50">
                  {job.location}
                </span>
              </div>

              {/* Right: role + description */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {job.role}
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
