type TimelineItem = {
  title: string;
  company: string;
  duration: string;
  summary: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article key={`${item.company}-${item.title}`} className="card space-y-4">
            <header className="space-y-2">
              <h3
                className={
                  item.title === "Head of Community"
                    ? "text-2xl font-heading text-text-primary"
                    : "text-xl font-heading text-text-primary"
                }
              >
                {item.title}
              </h3>
              <div className="text-sm text-text-secondary">
                <p className="font-medium text-text-primary/90">{item.company}</p>
                <p>{item.duration}</p>
              </div>
            </header>
            <p className="text-text-secondary leading-relaxed">{item.summary}</p>
          </article>
        ))}
    </div>
  );
}
