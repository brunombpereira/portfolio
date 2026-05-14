import { experience, type TimelineEntry } from "@/data/experience";
import { Reveal } from "./Reveal";

const TONES: Record<
  NonNullable<TimelineEntry["tone"]>,
  { dot: string; text: string; ring: string; bg: string }
> = {
  sky: {
    dot: "bg-sky-400",
    text: "text-sky-300",
    ring: "ring-sky-500/30",
    bg: "bg-sky-500/[0.06]",
  },
  amber: {
    dot: "bg-amber-400",
    text: "text-amber-300",
    ring: "ring-amber-500/30",
    bg: "bg-amber-500/[0.06]",
  },
  violet: {
    dot: "bg-violet-400",
    text: "text-violet-300",
    ring: "ring-violet-500/30",
    bg: "bg-violet-500/[0.06]",
  },
  emerald: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    ring: "ring-emerald-500/30",
    bg: "bg-emerald-500/[0.06]",
  },
};

const KIND_LABEL: Record<TimelineEntry["kind"], string> = {
  work: "Work",
  education: "Education",
  certification: "Certification",
};

const KIND_ICON = (kind: TimelineEntry["kind"]) => {
  switch (kind) {
    case "work":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "education":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 10-10-5L2 10l10 5 10-5z" />
          <path d="M6 12v5c3 1.5 9 1.5 12 0v-5" />
        </svg>
      );
    case "certification":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="m8.5 12 -1.5 9 5-3 5 3 -1.5-9" />
        </svg>
      );
  }
};

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div
        aria-hidden="true"
        className="divider-line divider-amber absolute inset-x-0 top-0 mx-auto max-w-3xl"
      />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-slate-600">02</span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Timeline
            </p>
          </div>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Where I&apos;ve been
          </h2>
        </Reveal>

        <ol className="relative mt-10 space-y-3 border-l border-white/10 pl-6 md:pl-8">
          {experience.map((e, i) => {
            const tone = TONES[e.tone ?? "sky"];
            return (
              <Reveal
                key={`${e.title}-${i}`}
                delay={i * 80}
                as="article"
                className="relative"
              >
                {/* Connector dot on the timeline */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[1.85rem] top-3 h-3 w-3 rounded-full ring-4 ring-[#0b1118] md:-left-[2.15rem] ${tone.dot}`}
                />

                <div
                  className={`rounded-xl border border-white/10 ${tone.bg} px-5 py-4 transition hover:border-white/20`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${tone.text} ring-1 ${tone.ring}`}
                    >
                      {KIND_ICON(e.kind)}
                      {KIND_LABEL[e.kind]}
                    </span>
                    <h3 className="font-serif text-xl text-white">{e.title}</h3>
                    <span className="text-sm text-slate-300">@ {e.org}</span>
                  </div>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    {e.context}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                    {e.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
