import { ArrowDown } from "lucide-react";
import { BrowserFrame } from "@/components/BrowserFrame";
import { FadeIn } from "@/components/FadeIn";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-20">
      <FadeIn duration={900} delay={200}>
        <BrowserFrame variant="hero" className="w-full max-w-4xl">
          <div className="px-8 md:px-12 py-16 md:py-24 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              I build systems,
              <br />
              security &{" "}
              <em className="font-serif italic font-normal bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
                scale.
              </em>
            </h1>
            <FadeIn delay={500} duration={600}>
              <p className="mt-8 text-base md:text-lg text-foreground/80 font-medium">
                Software Engineer Tech Lead at RapidFort.
              </p>
            </FadeIn>
            <FadeIn delay={650} duration={600}>
              <p className="mt-2 text-muted-foreground">
                Based in Bengaluru. NIT Jalandhar &apos;24.
              </p>
            </FadeIn>
          </div>
        </BrowserFrame>
      </FadeIn>

      <FadeIn delay={900} duration={600}>
        <div
          className="mt-12 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 cursor-pointer"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </FadeIn>
    </section>
  );
}
