"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#top",        label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Timeline" },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0b1118]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="font-serif text-lg tracking-tight text-white transition hover:text-sky-300"
          aria-label="Back to top"
        >
          B.
        </a>

        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition hover:text-sky-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/brunombpereira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/brunombpereira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.83v1.7h.05c.53-.97 1.83-2 3.77-2 4.03 0 4.78 2.51 4.78 5.78V21h-4v-5.42c0-1.3-.02-2.97-1.92-2.97-1.93 0-2.23 1.4-2.23 2.87V21h-4V9z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
