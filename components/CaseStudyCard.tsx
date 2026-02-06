import { Tag } from "@/components/Tag";

export type CaseStudy = {
  title: string;
  timeframe: string;
  summary: string;
  results: string[];
};

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="card space-y-4" aria-label={study.title}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-heading">{study.title}</h3>
        <Tag>{study.timeframe}</Tag>
      </div>
      <p className="text-text-secondary">{study.summary}</p>
      <ul className="space-y-2 text-sm text-text-secondary">
        {study.results.map((result) => (
          <li key={result} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-teal" aria-hidden="true" />
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
