# Design Reference -- Tailwind Implementation

Detailed component patterns with Tailwind classes for the portfolio.

---

## Navigation Component

```tsx
// Sticky nav bar
<nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4">
  {/* Left: identity */}
  <div>
    <div className="text-white font-bold text-sm">Ravinder Chadha</div>
    <div className="text-neutral-400 text-xs">Software Engineer</div>
  </div>

  {/* Center: pill toggle */}
  <div className="flex items-center rounded-full border border-white/10 bg-neutral-800/60 backdrop-blur-md">
    <a className="px-5 py-1.5 text-sm text-white rounded-full bg-white/10">Work</a>
    <a className="px-5 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors">Info</a>
  </div>

  {/* Right: external links */}
  <div className="flex items-center gap-6 text-sm text-neutral-400">
    <a className="flex items-center gap-1 hover:text-white transition-colors">
      LinkedIn <ArrowUpRight size={14} />
    </a>
    <a className="flex items-center gap-1 hover:text-white transition-colors">
      Resume <ArrowUpRight size={14} />
    </a>
  </div>
</nav>
```

## Hero Section

```tsx
<section className="min-h-screen flex flex-col items-center justify-center px-8">
  {/* Browser chrome wrapper */}
  <div className="w-full max-w-4xl rounded-xl border border-white/10 bg-neutral-900 overflow-hidden">
    {/* Toolbar */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
      <span className="w-3 h-3 rounded-full bg-red-500" />
      <span className="w-3 h-3 rounded-full bg-yellow-500" />
      <span className="w-3 h-3 rounded-full bg-green-500" />
    </div>

    {/* Content */}
    <div className="px-12 py-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
        I build systems,<br />
        security & <em className="font-serif italic">scale.</em>
      </h1>
      <p className="mt-8 text-lg text-neutral-300">
        Software Engineer Tech Lead at RapidFort.
      </p>
      <p className="text-neutral-400">
        Based in Bengaluru. NIT Jalandhar '24.
      </p>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="mt-12 text-neutral-500">
    <ArrowDown size={24} />
  </div>
</section>
```

## Project Card

```tsx
<a className="group block rounded-2xl border border-white/10 bg-neutral-900 p-8 md:p-12 transition-colors hover:border-white/20">
  {/* Header */}
  <div className="flex items-center justify-between">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      Project Title
    </h3>
    <ArrowRight className="text-neutral-400 group-hover:text-white transition-colors" size={24} />
  </div>

  {/* Meta */}
  <p className="mt-2 text-neutral-400">
    Company, 'YY &mdash; Short one-line description.
  </p>

  {/* Screenshot in browser frame */}
  <div className="mt-8 rounded-lg border border-white/5 bg-neutral-950 overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
    </div>
    <img src="/projects/screenshot.png" alt="Project screenshot" className="w-full" />
  </div>
</a>
```

## Projects Section

```tsx
<section className="px-8 py-24 max-w-5xl mx-auto">
  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-12">
    Selected Work
  </p>
  <div className="flex flex-col gap-10">
    {/* ProjectCard components here */}
  </div>
</section>
```

## Footer

```tsx
<footer className="border-t border-white/10 px-8 py-16 max-w-5xl mx-auto">
  <div className="grid grid-cols-2 gap-16 mb-16">
    {/* Main */}
    <div>
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Main</p>
      <div className="flex flex-col gap-4">
        <a className="text-white hover:text-neutral-300 transition-colors">Work</a>
        <a className="text-white hover:text-neutral-300 transition-colors">Info</a>
      </div>
    </div>

    {/* Contact */}
    <div>
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Contact</p>
      <div className="flex flex-col gap-4">
        <a className="flex items-center gap-1 text-white hover:text-neutral-300 transition-colors">
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <a className="flex items-center gap-1 text-white hover:text-neutral-300 transition-colors">
          Resume <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </div>

  <p className="text-neutral-500 text-sm">
    &copy; 2026 Ravinder Chadha. All Rights Reserved.
  </p>
</footer>
```

## Browser Chrome Wrapper (Reusable)

A reusable wrapper component for displaying screenshots in a macOS-style browser frame:

```tsx
interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

function BrowserFrame({ children, className }: BrowserFrameProps) {
  return (
    <div className={cn("rounded-lg border border-white/5 bg-neutral-950 overflow-hidden", className)}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
      </div>
      {children}
    </div>
  );
}
```

## Spacing Reference

| Section gap      | Class         |
|------------------|---------------|
| Between sections | `py-24`       |
| Card gap         | `gap-10`      |
| Card padding     | `p-8 md:p-12` |
| Nav padding      | `px-8 py-4`   |
| Content max-w    | `max-w-5xl`   |

## Transition Defaults

All interactive elements should use `transition-colors` for smooth hover states. Keep durations at the Tailwind default (150ms). No dramatic transforms -- at most a subtle `hover:border-white/20` on cards.
