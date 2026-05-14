import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b1118] px-6 text-center text-slate-100 antialiased">
      <p className="font-serif text-7xl tracking-tight text-white md:text-8xl">404</p>
      <h1 className="mt-4 bg-gradient-to-r from-sky-300 via-violet-300 to-amber-300 bg-clip-text text-xl text-transparent md:text-2xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">
        The link may be broken or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/[0.08] px-5 py-2 text-sm text-sky-200 transition-colors hover:bg-sky-500/[0.16]"
      >
        ← Back home
      </Link>
    </main>
  );
}
