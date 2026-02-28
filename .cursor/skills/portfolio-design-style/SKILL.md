---
name: portfolio-design-style
description: Defines the visual design system and layout patterns for the portfolio website, inspired by perryw-2023.webflow.io. Use when building pages, creating components, styling sections, or making any UI decisions for the portfolio.
---

# Portfolio Design Style

Visual style reference: [perryw-2023.webflow.io](https://perryw-2023.webflow.io/)

For detailed component specs and Tailwind classes, see [reference.md](reference.md).

---

## Core Aesthetic

- **Dark-mode only** -- near-black background, light text
- **Ultra-minimal** -- generous whitespace, no visual clutter
- **Editorial typography** -- oversized bold sans-serif headings, with selective italic serif for emphasis words
- **Subtle depth** -- faint borders (`border-white/10`), no heavy shadows or gradients
- **Muted accents** -- no bright brand colors; rely on white, gray tones, and typography contrast

## Color Palette (Tailwind)

| Token        | Value                  | Usage                        |
|--------------|------------------------|------------------------------|
| Background   | `bg-neutral-950`       | Page background              |
| Surface      | `bg-neutral-900`       | Cards, elevated sections     |
| Border       | `border-white/10`      | Subtle dividers, card edges  |
| Text primary | `text-white`           | Headings, primary content    |
| Text muted   | `text-neutral-400`     | Subtitles, descriptions      |
| Text dim     | `text-neutral-500`     | Footer, meta info            |

## Typography

- **Hero headline**: 5xl-7xl, font-bold, tracking-tight, leading-tight
- **Emphasis word**: italic serif (use a serif font class for one key word in the headline)
- **Section label**: xs-sm, uppercase, tracking-widest, text-neutral-500 (e.g. "Selected Work '23")
- **Project title**: 2xl-3xl, font-semibold
- **Project meta**: base-lg, text-neutral-400 (format: "Company, 'YY -- Description")
- **Body text**: base-lg, text-neutral-300, leading-relaxed
- **Nav links**: sm, text-neutral-400, hover:text-white

## Layout Structure

```
[Sticky Nav]
[Hero Section]
[Projects Section -- stacked full-width cards]
[Footer]
```

### Navigation (sticky top)

- Left: Name (font-bold text-white) + role subtitle (text-neutral-400 text-sm)
- Center: Pill toggle with two links (e.g. Work / Info) -- rounded-full bg-neutral-800 border border-white/10
- Right: External links (LinkedIn, Resume) with arrow-up-right icon

### Hero Section

- Full viewport height, centered content
- Browser window chrome mockup frame containing the hero content:
  - Three traffic-light dots (red, yellow, green) top-left
  - Large headline inside: bold sans-serif, one word in italic serif
  - Subtitle lines below: text-neutral-400, smaller
- Scroll-down arrow indicator at bottom

### Project Cards

Each card is a full-width block, stacked vertically with gap:

```
[Title ---------------------- Arrow icon]
[Company, 'YY -- short description      ]
[                                        ]
[   Browser mockup with screenshot       ]
[                                        ]
```

- Container: rounded-xl or rounded-2xl, border border-white/10, bg-neutral-900, p-8 to p-12
- Title row: flex justify-between items-center; title left, ArrowRight icon right
- Meta line: text-neutral-400, format "Company, 'YY -- one-line description"
- Image area: browser chrome frame (traffic-light dots, dark toolbar) wrapping a project screenshot
- Hover: subtle lift or border-white/20 transition

### Footer

- Thin top border (`border-white/10`)
- Two-column grid: Main links (left), Contact links (right)
- Column labels: xs uppercase tracking-widest text-neutral-500
- Links: text-white, external links get arrow-up-right icon
- Copyright line at very bottom: text-neutral-500 text-sm

## Key Patterns

1. **Browser mockup frame**: Wrap screenshots in a rounded container with a dark toolbar row containing three small colored dots (red/yellow/green circles, ~10px). Used in hero and project cards.
2. **Pill nav toggle**: Centered inline-flex rounded-full container, items inside have px-4 py-1.5, active state has subtle bg change.
3. **External link style**: Text + `ArrowUpRight` icon from lucide-react, size 16.
4. **Section heading**: Small uppercase label above the content (e.g. "MAIN", "CONTACT", "Selected Work").
5. **Generous spacing**: Sections separated by py-24 to py-32. Cards have gap-8 to gap-12 between them.
