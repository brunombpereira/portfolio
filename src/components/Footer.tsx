import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Get in touch
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
          Open to junior / entry-level roles in Aveiro, Porto, Braga, Lisbon (hybrid/remote)
          or fully remote across Portugal and Europe.
        </p>

        <div className="mt-6 grid gap-3 text-sm md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 transition hover:bg-white/[0.06]"
          >
            <span className="block text-xs uppercase tracking-widest text-slate-500">Email</span>
            <span className="mt-1 block break-all">{profile.email}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 transition hover:bg-white/[0.06]"
          >
            <span className="block text-xs uppercase tracking-widest text-slate-500">LinkedIn</span>
            <span className="mt-1 block">linkedin.com/in/brunombpereira</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 transition hover:bg-white/[0.06]"
          >
            <span className="block text-xs uppercase tracking-widest text-slate-500">GitHub</span>
            <span className="mt-1 block">github.com/brunombpereira</span>
          </a>
        </div>

        <p className="mt-12 text-xs text-slate-500">
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
