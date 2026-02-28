import { useState, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setSuccess(true);
      window.history.replaceState({}, "", "/contact");
    }
  }, []);

  if (success) {
    return (
      <FadeIn direction="up">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <CheckCircle size={48} className="text-foreground/60 mb-6" />
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
            Message sent.
          </h3>
          <p className="text-muted-foreground max-w-md">
            Thanks for reaching out — I'll get back to you as soon as I can.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={200}>
      <form
        action="https://formsubmit.co/ravinderchadha1233@gmail.com"
        method="POST"
        className="mt-12 max-w-xl space-y-6"
      >
        <input type="hidden" name="_subject" value="New contact from portfolio" />
        <input type="hidden" name="_captcha" value="true" />
        <input
          type="hidden"
          name="_next"
          value={typeof window !== "undefined" ? `${window.location.origin}/contact?success=true` : "/contact?success=true"}
        />
        <input type="text" name="_honey" className="hidden" />

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 bg-secondary/40 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors duration-300"
        >
          Send message
          <Send size={16} />
        </button>
      </form>
    </FadeIn>
  );
}
