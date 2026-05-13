import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sky-500/40 hover:bg-white/[0.05] md:p-7">
      {/* Subtle hover gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/0 opacity-0 transition group-hover:from-sky-500/10 group-hover:opacity-100"
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

        <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-sky-500">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-300"
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
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 transition hover:text-sky-300"
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

const GROUP_LABELS: Record<NonNullable<Project["group"]>, string> = {
  "open-source": "Open Source / Personal Projects",
  work: "Work",
  academic: "Academic & Other",
};

const GROUP_ORDER: NonNullable<Project["group"]>[] = ["open-source", "work", "academic"];

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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Selected Projects
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Things I&apos;ve shipped
          </h2>
        </Reveal>

        <div className="mt-10 space-y-14">
          {grouped.map((g) => (
            <div key={g.group}>
              <Reveal>
                <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {g.label}
                </h3>
              </Reveal>
              <div className="grid gap-5">
                {g.items.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
