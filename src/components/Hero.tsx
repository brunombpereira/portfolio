import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-3xl">
        {/* Badge de localização */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available · {profile.location}
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-sky-400 md:text-2xl">{profile.tagline}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          {profile.pitch}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-sky-400"
          >
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
