import { ArrowDown } from "lucide-react";
import { BrowserFrame } from "@/components/BrowserFrame";
import { FadeIn } from "@/components/FadeIn";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pt-20">
      <FadeIn duration={900} delay={200}>
        <BrowserFrame variant="hero" className="w-full max-w-5xl mx-auto">
          <div className="relative flex flex-col min-h-[420px] md:min-h-[380px] px-6 md:px-10 lg:px-12 py-10 md:py-14">
            {/* Stacked: headline left-aligned, description below right-aligned */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium -tracking-[0.05em] text-white leading-[1.15] text-left">
                I build systems,
                <br />
                security &{" "}
                <em className="font-serif italic font-semibold bg-linear-to-t from-muted-foreground via-white/90 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  scale.
                </em>
              </h1>
              <div className="text-right">
                <FadeIn delay={400} duration={600}>
                  <p className="text-sm md:text-base text-white/70 font-medium leading-snug">
                    Software Engineer Tech Lead at RapidFort.
                  </p>
                </FadeIn>
                <FadeIn delay={550} duration={600}>
                  <p className="mt-1.5 text-sm text-white/45 leading-snug">
                    Based in Bengaluru. NIT Jalandhar &apos;24.
                  </p>
                </FadeIn>
              </div>
            </div>
            {/* Scroll indicator centered at bottom */}

          </div>
        </BrowserFrame>
        <FadeIn delay={700} duration={600} className="w-full flex items-center justify-center py-10 -mt-20 bg-linear-to-b from-transparent to-background" >
          <div
            className="text-white/40 hover:text-white/60 transition-colors duration-300 cursor-pointer"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            <ArrowDown size={32} strokeWidth={1.5} />
          </div>
        </FadeIn>
      </FadeIn>
    </section>
  );
}
