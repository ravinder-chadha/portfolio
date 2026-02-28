import { FadeIn } from "@/components/FadeIn";

const storyBlocks = [
  {
    heading: "Building from the ground up.",
    body: "I studied Electrical Engineering at NIT Jalandhar — one of India's premier technical institutes. But I spent most of my time writing code, not wiring circuits. I was drawn to software that solved real problems at scale: distributed systems, automation, security.",
    image: "https://placehold.co/600x420",
    imageAlt: "NIT Jalandhar campus",
    imageRight: false,
  },
  {
    heading: "Falling into open source & security.",
    body: "During college I started contributing to open source and got deep into container security at RapidFort as a consultant. I found my niche in vulnerability scanning — the kind of infrastructure work that most people never see but everyone depends on.",
    image: "https://placehold.co/600x420",
    imageAlt: "Open source contributions",
    imageRight: true,
  },
  {
    heading: "From intern to Tech Lead.",
    body: "What started as a consulting role turned into a full-time Software Engineer position, and eventually a Tech Lead role — all before graduating. I now lead the Scanner team, architecting high-volume data pipelines that process over 10,000 container images every single day.",
    image: "https://placehold.co/600x420",
    imageAlt: "Engineering work",
    imageRight: false,
  },
  {
    heading: "Teaching what I know.",
    body: "As Flutter Lead at Google Developer Students Club, NITJ, I ran hands-on workshops covering full Flutter courses, IoT with Arduino & ESP32, and Android development. Mentoring became a core part of how I grow — you learn best by teaching.",
    image: "https://placehold.co/600x420",
    imageAlt: "Workshop and mentoring",
    imageRight: true,
  },
];

export function InfoAbout() {
  return (
    <section className="px-6 md:px-8 py-24 md:py-32 max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10 font-medium">
          About Me
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-2xl">
          I&apos;m passionate about building systems that{" "}
          <em className="font-serif italic font-normal">scale.</em>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          This is my story — from an Electrical Engineering degree to leading
          container security infrastructure at a Silicon Valley startup.
        </p>
      </FadeIn>

      <div className="mt-20 flex flex-col gap-24 md:gap-32">
        {storyBlocks.map((block, i) => (
          <FadeIn key={block.heading} delay={i * 100}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                block.imageRight ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Text */}
              <div className={block.imageRight ? "" : "md:order-1"}>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-4">
                  {block.heading}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {block.body}
                </p>
              </div>

              {/* Image */}
              <div
                className={`rounded-2xl border border-border overflow-hidden glow-card ${
                  block.imageRight ? "md:order-2" : ""
                }`}
              >
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <p className="mt-24 text-foreground/60 text-base leading-relaxed max-w-xl">
          In my spare time, I&apos;m probably tinkering with side projects,
          reading about systems design, or playing basketball. Thanks for
          stopping by.
        </p>
      </FadeIn>
    </section>
  );
}
