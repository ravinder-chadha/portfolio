import { ArrowUpRight, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
}

export function BlogCard({
  title,
  link,
  pubDate,
  categories,
  thumbnail,
  excerpt,
}: BlogCardProps) {
  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-card overflow-hidden glow-card transition-all duration-500 ease-out hover:glow-card-hover hover:border-foreground/20 hover:-translate-y-1"
    >
      <div className="aspect-[16/9] overflow-hidden bg-background">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar size={12} />
          <time dateTime={pubDate}>{formattedDate}</time>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {categories.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-full border border-border text-muted-foreground bg-foreground/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
          Read on Medium
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </a>
  );
}
