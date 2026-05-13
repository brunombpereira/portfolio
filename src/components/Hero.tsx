import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 md:grid-cols-[1fr,auto]">
          {/* Text column */}
          <div className="min-w-0">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available · {profile.location}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-xl text-sky-400 md:text-2xl">{profile.tagline}</p>
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
  // next/image with a /public/me.jpg — when the file isn't present, the
  // <Image> still renders the alt + the wrapper still shows the gradient,
  // so the layout doesn't break.
  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent shadow-2xl shadow-sky-500/10 md:h-56 md:w-56">
      <Image
        src="/me.jpg"
        alt="Bruno Borlido Pereira"
        fill
        sizes="(max-width: 768px) 11rem, 14rem"
        className="object-cover"
        priority
      />
      {/* Subtle inner ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}
