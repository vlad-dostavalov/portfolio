import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { LightboxImage } from "@/components/ui/lightbox";
import Link from "next/link";

const D = 0.04;

type OverviewItem = {
  label: string;
  value: string;
};

type CaseSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ToolingCase = {
  title: string;
  subtitle: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  overview: OverviewItem[];
  challenge: string[];
  solution: string[];
  features: CaseSection[];
  architecture: CaseSection[];
  impact: string[];
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
};

export function ToolingCasePage({ project }: { project: ToolingCase }) {
  return (
    <article className="flex flex-col gap-12">
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 2}>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          {project.overview.map((item) => (
            <div key={item.label}>
              <p className="text-muted-foreground">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={D * 3}>
        <LightboxImage
          src={project.cover}
          alt={project.coverAlt}
          className="w-full rounded-xl border shadow-sm"
        />
      </BlurFade>

      <BlurFade delay={D * 4}>
        <TextSection title="Challenge" paragraphs={project.challenge} />
      </BlurFade>

      <BlurFade delay={D * 5}>
        <TextSection title="Solution" paragraphs={project.solution} />
      </BlurFade>

      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Key Features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <FeatureBlock key={feature.title} section={feature} />
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-4 rounded-xl border bg-muted/30 p-6">
          <h2 className="text-xl font-bold">Technical Architecture</h2>
          <div className="grid gap-4">
            {project.architecture.map((section) => (
              <FeatureBlock key={section.title} section={section} />
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Impact</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </BlurFade>

      <BlurFade delay={D * 9}>
        <div className="flex items-center justify-between gap-4 border-t pt-4">
          {project.previous ? (
            <Link
              href={project.previous.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; {project.previous.title}
            </Link>
          ) : (
            <Link
              href="/#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              &larr; All Projects
            </Link>
          )}
          {project.next ? (
            <Link
              href={project.next.href}
              className="text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {project.next.title} &rarr;
            </Link>
          ) : (
            <Link
              href="/#projects"
              className="text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All Projects &rarr;
            </Link>
          )}
        </div>
      </BlurFade>
    </article>
  );
}

function TextSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function FeatureBlock({ section }: { section: CaseSection }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">{section.title}</h3>
      {section.body?.map((paragraph) => (
        <p
          key={paragraph}
          className="text-sm leading-relaxed text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
