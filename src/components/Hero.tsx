import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const STATS = [
  { label: "Shipping production", value: "1+ yr" },
  { label: "Stack", value: "Rails · React" },
  { label: "Status", value: "Final-year CS @ UA" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* Subtle grid backdrop, only visible inside the hero */}
      <div
        aria-hidden="true"
        className="grid-pattern pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr,auto]">
          {/* Text column */}
          <div className="min-w-0">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/[0.08] px-3 py-1 text-xs text-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available immediately · {profile.location}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-xl text-sky-300 md:text-2xl">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                {profile.pitch}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-md bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 hover:shadow-sky-500/30"
                >
                  Get in touch
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
                {STATS.map((s) => (
                  <div key={s.label} className="px-4 py-3">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Photo column — drop /public/me.jpg (square, ~600px) and it
              renders automatically; otherwise the gradient placeholder
              keeps the layout intact. */}
          <Reveal delay={160} className="order-first md:order-last">
            <PhotoFrame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhotoFrame() {
  return (
    <div className="relative h-48 w-48 md:h-64 md:w-64">
      {/* Slow-rotating conic gradient ring */}
      <div className="photo-ring" />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-amber-500/10 shadow-2xl shadow-sky-500/10">
        <Image
          src="/me.jpg"
          alt="Bruno Borlido Pereira"
          fill
          sizes="(max-width: 768px) 12rem, 16rem"
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}
