import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            About
          </p>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
