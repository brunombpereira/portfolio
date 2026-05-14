import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

/**
 * Tailwind colour bands for the stack chip groups. Order matches
 * `profile.stack` in src/data/profile.ts. Cycles through sky → amber →
 * emerald → violet so the four groups feel distinct.
 */
const STACK_TONES = [
  {
    eyebrow: "text-sky-300",
    chipBorder: "border-sky-400/30",
    chipBg: "bg-sky-500/[0.06]",
    chipText: "text-sky-100",
    hoverBorder: "hover:border-sky-300/60",
  },
  {
    eyebrow: "text-amber-300",
    chipBorder: "border-amber-400/30",
    chipBg: "bg-amber-500/[0.06]",
    chipText: "text-amber-100",
    hoverBorder: "hover:border-amber-300/60",
  },
  {
    eyebrow: "text-emerald-300",
    chipBorder: "border-emerald-400/30",
    chipBg: "bg-emerald-500/[0.06]",
    chipText: "text-emerald-100",
    hoverBorder: "hover:border-emerald-300/60",
  },
  {
    eyebrow: "text-violet-300",
    chipBorder: "border-violet-400/30",
    chipBg: "bg-violet-500/[0.06]",
    chipText: "text-violet-100",
    hoverBorder: "hover:border-violet-300/60",
  },
] as const;

const LANG_TONES: Record<string, string> = {
  Portuguese: "text-amber-200 border-amber-400/40 bg-amber-500/[0.08]",
  English: "text-sky-200    border-sky-400/40    bg-sky-500/[0.08]",
};

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div
        aria-hidden="true"
        className="divider-line divider-sky absolute inset-x-0 top-0 mx-auto max-w-3xl"
      />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-slate-600">01</span>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              About
            </p>
          </div>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            What I work on, day-to-day
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[3fr,2fr]">
          {/* Prose + code-card column */}
          <div className="space-y-6">
            <Reveal
              delay={120}
              className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={220}>
              <WhoamiCard />
            </Reveal>
          </div>

          <Reveal delay={200} className="space-y-6">
            {profile.stack.map((group, i) => {
              const tone = STACK_TONES[i % STACK_TONES.length];
              return (
                <div key={group.group}>
                  <h3
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${tone.eyebrow}`}
                  >
                    {group.group}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-md border px-2.5 py-1 text-xs transition ${tone.chipBorder} ${tone.chipBg} ${tone.chipText} ${tone.hoverBorder}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-300">
                Languages
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {profile.languages.map((lang) => {
                  const tone =
                    LANG_TONES[lang.name] ??
                    "text-slate-200 border-white/10 bg-white/[0.04]";
                  return (
                    <li
                      key={lang.name}
                      className={`inline-flex items-baseline gap-1.5 rounded-md border px-2.5 py-1 text-xs ${tone}`}
                    >
                      <span className="font-medium text-white">{lang.name}</span>
                      <span className="text-[10px] uppercase tracking-wide opacity-80">
                        {lang.level}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        {profile.availability && (
          <Reveal delay={320}>
            <div className="mt-12 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.08] via-emerald-500/[0.04] to-transparent px-5 py-4 text-sm text-slate-300">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400"
              />
              <p>
                <span className="font-semibold text-emerald-300">Available now.</span>{" "}
                {profile.availability}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/**
 * "Looks like a code editor" intro card. Stays in the prose column so
 * the eye gets a structured second hook after the three paragraphs —
 * basically a STAR-formatted bio rendered as syntax-coloured pseudo-JS.
 */
function WhoamiCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1620] shadow-2xl shadow-sky-500/5">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          whoami.ts
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed text-slate-300 md:text-[13px]">
        {`const bruno = {
  role:     "Junior Full-Stack Developer",
  at:       "Wiremaze · Porto",
  stack:    ["Rails", "React", "Postgres", "TypeScript"],
  ships:    [
    "Apple+Google Wallet integrations",
    "Monaco-based internal IDE",
    "GDPR consent rewrite",
  ],
  finishing: "CS degree @ Universidade de Aveiro",
  open_to:   "junior roles · PT or remote · available now",
};

export default bruno;`}
      </pre>
    </div>
  );
}
