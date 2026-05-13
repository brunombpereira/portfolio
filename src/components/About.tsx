import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          About
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {profile.stack.map((group) => (
            <div key={group.group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {group.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
