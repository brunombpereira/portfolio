import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

type Group = NonNullable<Project["group"]>;

const GROUP_LABELS: Record<Group, string> = {
  "open-source": "Open Source / Personal Projects",
  work: "Work",
  academic: "Academic & Other",
};

const GROUP_ORDER: Group[] = ["open-source", "work", "academic"];

/**
 * Per-group accent so the three sections feel distinct in a dark page
 * instead of every card sharing the same sky-blue hover.
 *
 *   open-source  → sky    (community, public code)
 *   work         → amber  (Wiremaze, shipped commercially)
 *   academic     → violet (university)
 */
const GROUP_TONE: Record<
  Group,
  {
    label: string;          // eyebrow text colour
    chip: string;           // group label chip ring + text
    marker: string;         // bullet marker color
    border: string;         // card hover border
    glow: string;           // card hover background gradient
    link: string;           // links inside the card
  }
> = {
  "open-source": {
    label:  "text-sky-300",
    chip:   "text-sky-300 ring-sky-500/30 bg-sky-500/[0.06]",
    marker: "marker:text-sky-500",
    border: "hover:border-sky-500/40",
    glow:   "group-hover:from-sky-500/15 group-hover:via-sky-500/[0.04] group-hover:to-transparent",
    link:   "text-sky-300 hover:text-sky-200",
  },
  work: {
    label:  "text-amber-300",
    chip:   "text-amber-300 ring-amber-500/30 bg-amber-500/[0.06]",
    marker: "marker:text-amber-500",
    border: "hover:border-amber-500/40",
    glow:   "group-hover:from-amber-500/15 group-hover:via-amber-500/[0.04] group-hover:to-transparent",
    link:   "text-amber-300 hover:text-amber-200",
  },
  academic: {
    label:  "text-violet-300",
    chip:   "text-violet-300 ring-violet-500/30 bg-violet-500/[0.06]",
    marker: "marker:text-violet-500",
    border: "hover:border-violet-500/40",
    glow:   "group-hover:from-violet-500/15 group-hover:via-violet-500/[0.04] group-hover:to-transparent",
    link:   "text-violet-300 hover:text-violet-200",
  },
};

function ProjectCard({ project, tone }: { project: Project; tone: (typeof GROUP_TONE)[Group] }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05] md:p-7 ${tone.border}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition group-hover:opacity-100 ${tone.glow}`}
      />

      <div className="relative">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-serif text-xl text-white md:text-2xl">{project.title}</h3>
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
            {project.context}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {project.description}
        </p>

        <ul className={`mt-5 list-disc space-y-1.5 pl-5 text-sm text-slate-400 ${tone.marker}`}>
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-300 transition group-hover:border-white/20"
            >
              {t}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-5 border-t border-white/5 pt-5">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/link inline-flex items-center gap-1.5 text-sm font-medium transition ${tone.link}`}
              >
                {l.label}
                <span className="transition group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const grouped = GROUP_ORDER.map((group) => ({
    group,
    label: GROUP_LABELS[group],
    items: projects.filter((p) => (p.group ?? "work") === group),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="projects" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-slate-600">03</span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Selected Projects
            </p>
          </div>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Things I&apos;ve shipped
          </h2>
        </Reveal>

        <div className="mt-10 space-y-14">
          {grouped.map((g) => {
            const tone = GROUP_TONE[g.group];
            return (
              <div key={g.group}>
                <Reveal>
                  <h3 className="mb-5 inline-flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ring-1 ${tone.chip}`}
                    >
                      {g.label}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({g.items.length})
                    </span>
                  </h3>
                </Reveal>
                <div className="grid gap-5">
                  {g.items.map((p, i) => (
                    <Reveal key={p.title} delay={i * 80}>
                      <ProjectCard project={p} tone={tone} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
