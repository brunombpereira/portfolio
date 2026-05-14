import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

const STATS = [
  { label: "Shipping production", value: "1+ yr", tone: "sky" },
  { label: "Stack", value: "Rails · React", tone: "amber" },
  { label: "Status", value: "Final-year CS @ UA", tone: "violet" },
] as const;

const STAT_TONE = {
  sky: "text-sky-300",
  amber: "text-amber-300",
  violet: "text-violet-300",
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      {/* Subtle grid backdrop, only visible inside the hero */}
      <div
        aria-hidden="true"
        className="grid-pattern pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr,auto] md:gap-16">
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
              <p className="mt-4 bg-gradient-to-r from-sky-300 via-violet-300 to-amber-300 bg-clip-text text-xl text-transparent md:text-2xl">
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
                  className="rounded-md bg-gradient-to-br from-sky-500 to-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:from-sky-400 hover:to-sky-500 hover:shadow-sky-500/50"
                >
                  Get in touch
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-amber-400/40 hover:bg-amber-500/[0.06] hover:text-amber-200"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-violet-400/40 hover:bg-violet-500/[0.06] hover:text-violet-200"
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
                    <dd className={`mt-1 text-sm font-medium ${STAT_TONE[s.tone]}`}>
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Photo column — circular crop, larger, with decorative blobs
              behind. Drop /public/me.jpg to override the placeholder. */}
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
    <div className="relative">
      {/* Decorative offset blobs — large, blurred, low opacity. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/30 to-pink-500/30 blur-3xl"
      />

      {/* Sticker-like accent chip */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 z-10 hidden rounded-full border border-amber-400/30 bg-[#0b1118] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300 shadow-xl shadow-amber-500/10 sm:block"
      >
        Junior · PT
      </div>

      <div className="relative h-60 w-60 md:h-80 md:w-80">
        {/* Slow-rotating conic gradient ring */}
        <div className="photo-ring rounded-full" />

        {/* The actual avatar — circular crop, layered on a subtle inner
            gradient so the placeholder still looks intentional when
            the file is missing. */}
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-amber-500/10 shadow-2xl shadow-sky-500/20">
          <Image
            src="/me.jpg"
            alt="Bruno Borlido Pereira"
            fill
            sizes="(max-width: 768px) 15rem, 20rem"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </div>
  );
}
