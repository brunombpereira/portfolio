import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24">
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
          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={200} className="space-y-6">
            {profile.stack.map((group) => (
              <div key={group.group}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {group.group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200 transition hover:border-sky-500/40 hover:text-sky-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Languages
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {profile.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="inline-flex items-baseline gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200"
                  >
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="text-[10px] uppercase tracking-wide text-slate-400">
                      {lang.level}
                    </span>
                  </li>
                ))}
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
