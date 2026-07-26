import { PlaceholderImage } from "./PlaceholderImage";

interface ArticleCardProps {
  category: string;
  date: string;
  title: string;
}

// Article card (design.md §7): category tag + dot separator + date meta,
// title, Read More.
export function ArticleCard({ category, date, title }: ArticleCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <PlaceholderImage
        label={`${title} — article placeholder`}
        className="aspect-[4/3] w-full rounded-media"
      />
      <div className="flex items-center gap-2 text-body-sm text-primary">
        <span className="uppercase">{category}</span>
        <span aria-hidden="true" className="text-xs">●</span>
        <span className="text-muted">{date}</span>
      </div>
      <h3 className="text-[1.5rem] text-ink">{title}</h3>
      <a href="#" className="text-body text-primary transition-colors hover:text-primary-700">
        Read More
      </a>
    </article>
  );
}
