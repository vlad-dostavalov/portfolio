/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LightboxImage } from "@/components/ui/lightbox";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const D = 0.04;

type OverviewItem = {
  label: string;
  value: string;
};

type ImpactItem = {
  value: string;
  label: string;
};

type CaseImage = {
  src: string;
  alt: string;
  caption?: string;
  narrow?: boolean;
};

type CaseLink = {
  title: string;
  href: string;
  image: string;
  description: string;
};

type CaseSection = {
  eyebrow?: string;
  title: string;
  body?: string[];
  bullets?: string[];
  cards?: CaseSection[];
  images?: CaseImage[];
  relatedCases?: CaseLink[];
  details?: CaseSection[];
  contained?: boolean;
};

export type ToolingCase = {
  title: string;
  subtitle: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  overview: OverviewItem[];
  tldr?: string[];
  impactStats?: ImpactItem[];
  sections: CaseSection[];
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
        <QuickRead project={project} />
      </BlurFade>

      <BlurFade delay={D * 4}>
        <LightboxImage
          src={project.cover}
          alt={project.coverAlt}
          className="w-full rounded-xl border shadow-sm"
        />
      </BlurFade>

      {project.sections.map((section, index) => (
        <BlurFade key={section.title} delay={D * (index + 5)}>
          <StorySection section={section} />
        </BlurFade>
      ))}

      <BlurFade delay={D * (project.sections.length + 5)}>
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

function QuickRead({ project }: { project: ToolingCase }) {
  if (!project.tldr?.length && !project.impactStats?.length) {
    return null;
  }

  return (
    <div className="grid gap-4 rounded-xl border bg-muted/30 p-5 sm:grid-cols-[1.2fr_1fr]">
      {project.tldr?.length ? (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Quick read
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {project.tldr.map((item) => (
              <li key={item}>
                <RichText>{item}</RichText>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {project.impactStats?.length ? (
        <div className="grid gap-3 sm:grid-cols-1">
          {project.impactStats.map((item) => (
            <div key={`${item.value}-${item.label}`}>
              <p className="text-lg font-semibold leading-none">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                <RichText>{item.label}</RichText>
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function StorySection({ section }: { section: CaseSection }) {
  const content = (
    <>
      <div className="flex flex-col gap-2">
        {section.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {section.eyebrow}
          </p>
        ) : null}
        <h2 className="text-xl font-bold">
          <RichText>{section.title}</RichText>
        </h2>
      </div>
      {section.body?.map((paragraph) => (
        <p key={paragraph} className="leading-relaxed text-muted-foreground">
          <RichText>{paragraph}</RichText>
        </p>
      ))}
      {section.bullets ? (
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <RichText>{bullet}</RichText>
            </li>
          ))}
        </ul>
      ) : null}
      {section.cards ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {section.cards.map((card) => (
            <FeatureBlock key={card.title} section={card} />
          ))}
        </div>
      ) : null}
      {section.images ? (
        <div
          className={
            section.images.length > 1
              ? "grid gap-4 sm:grid-cols-2 sm:items-start"
              : "grid gap-4"
          }
        >
          {section.images.map((image) => (
            <figure
              key={image.src}
              className={
                image.narrow
                  ? "mx-auto flex w-full max-w-[320px] flex-col gap-2"
                  : "flex flex-col gap-2"
              }
            >
              <LightboxImage
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl border bg-muted/30 shadow-sm"
              />
              {image.caption ? (
                <figcaption className="text-xs leading-relaxed text-muted-foreground">
                  <RichText>{image.caption}</RichText>
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      ) : null}
      {section.relatedCases ? (
        <RelatedCases items={section.relatedCases} />
      ) : null}
      {section.details ? (
        <DetailAccordion details={section.details} />
      ) : null}
    </>
  );

  return (
    <div
      className={
        section.contained
          ? "flex flex-col gap-4 rounded-xl border bg-muted/30 p-6"
          : "flex flex-col gap-4"
      }
    >
      {content}
    </div>
  );
}

function DetailAccordion({ details }: { details: CaseSection[] }) {
  return (
    <Accordion
      type="multiple"
      className="overflow-hidden rounded-xl border bg-background/70"
    >
      {details.map((detail, index) => (
        <AccordionItem
          key={`${detail.title}-${index}`}
          value={`${detail.title}-${index}`}
          className="border-b last:border-b-0"
        >
          <AccordionTrigger className="gap-4 px-4 py-3 text-left hover:no-underline">
            <div className="flex flex-col gap-1">
              {detail.eyebrow ? (
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {detail.eyebrow}
                </span>
              ) : null}
              <span className="text-sm font-semibold leading-snug text-foreground">
                <RichText>{detail.title}</RichText>
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="flex flex-col gap-4">
              <DetailContent section={detail} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function DetailContent({ section }: { section: CaseSection }) {
  return (
    <>
      {section.body?.map((paragraph) => (
        <p
          key={paragraph}
          className="text-sm leading-relaxed text-muted-foreground"
        >
          <RichText>{paragraph}</RichText>
        </p>
      ))}
      {section.bullets ? (
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <RichText>{bullet}</RichText>
            </li>
          ))}
        </ul>
      ) : null}
      {section.cards ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {section.cards.map((card) => (
            <FeatureBlock key={card.title} section={card} />
          ))}
        </div>
      ) : null}
      {section.relatedCases ? (
        <RelatedCases items={section.relatedCases} />
      ) : null}
    </>
  );
}

function RelatedCases({ items }: { items: CaseLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Related case studies
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group grid grid-cols-[96px_1fr] gap-3 overflow-hidden rounded-xl border bg-background shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md"
          >
            <div className="h-full min-h-24 overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-1 py-3 pr-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="truncate text-sm font-semibold">{item.title}</h3>
                <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FeatureBlock({ section }: { section: CaseSection }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">
        <RichText>{section.title}</RichText>
      </h3>
      {section.body?.map((paragraph) => (
        <p
          key={paragraph}
          className="text-sm leading-relaxed text-muted-foreground"
        >
          <RichText>{paragraph}</RichText>
        </p>
      ))}
      {section.bullets ? (
        <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <RichText>{bullet}</RichText>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function RichText({ children }: { children: string }) {
  return (
    <Markdown
      components={{
        p: ({ children }) => <>{children}</>,
        strong: ({ children }) => (
          <strong className="case-keyword">
            {children}
          </strong>
        ),
        a: ({ href, children }) => {
          if (!href) {
            return <>{children}</>;
          }

          const className =
            "rounded-sm text-inherit no-underline underline-offset-2 transition-colors hover:bg-muted hover:text-foreground hover:underline";

          if (href.startsWith("/")) {
            return (
              <Link href={href} className={className}>
                {children}
              </Link>
            );
          }

          return (
            <a
              href={href}
              className={className}
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
}
