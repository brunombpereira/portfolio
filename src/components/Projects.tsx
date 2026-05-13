import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sky-500/30 hover:bg-white/[0.05]">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-white md:text-xl">{project.title}</h3>
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {project.context}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
        {project.description}
      </p>

      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-sky-500">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex gap-4">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Selected Projects
        </h2>

        <div className="mt-8 grid gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
