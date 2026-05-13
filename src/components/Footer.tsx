import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Get in touch
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Let&apos;s talk
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Open to junior / entry-level roles in Aveiro, Porto, Braga or Lisbon
            (hybrid/remote) and fully-remote across Portugal and Europe.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 grid gap-3 text-sm md:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-200 transition hover:border-sky-500/40 hover:bg-white/[0.06]"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Email</span>
              <span className="mt-1.5 flex items-center justify-between gap-2 break-all">
                <span>{profile.email}</span>
                <span className="text-sky-400 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-200 transition hover:border-sky-500/40 hover:bg-white/[0.06]"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">LinkedIn</span>
              <span className="mt-1.5 flex items-center justify-between gap-2">
                <span>linkedin.com/in/brunombpereira</span>
                <span className="text-sky-400 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-slate-200 transition hover:border-sky-500/40 hover:bg-white/[0.06]"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">GitHub</span>
              <span className="mt-1.5 flex items-center justify-between gap-2">
                <span>github.com/brunombpereira</span>
                <span className="text-sky-400 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </Reveal>

        <p className="mt-14 text-xs text-slate-500">
          © {year} {profile.name}. Built with Next.js, TypeScript & Tailwind ·{" "}
          <a
            href="https://github.com/brunombpereira/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-sky-400 hover:underline"
          >
            view source
          </a>
        </p>
      </div>
    </footer>
  );
}
