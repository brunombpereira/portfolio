// Adiciona/remove/edita projetos aqui — a página puxa esta lista.
export type Project = {
  title: string;
  context: string;     // ex.: "Wiremaze · 2025"
  description: string; // 1-2 frases
  highlights: string[];
  tech: string[];
  links?: { label: string; url: string }[];
  /** Optional category tag — used to visually group projects on the page. */
  group?: "work" | "open-source" | "academic";
};

export const projects: Project[] = [
  // ---- Open-source / personal projects (newest first) ----
  {
    title: "JobTracker — Full-Stack App for Managing Job Applications",
    context: "Open source · 2026 · github.com/brunombpereira/job-tracker",
    description:
      "End-to-end Rails 8 API + React/Vite app I built to manage my own pipeline of job offers, with a Kanban board, full-text filters, and a status state machine on the backend.",
    highlights: [
      "Rails 7.1 API with a normalised data model (Offer, Source, Note, StatusChange) and a server-side state machine that validates every transition.",
      "React 18 + TypeScript + Tailwind frontend: CRUD via TanStack Query mutations, debounced search, multi-status filter, match-score range, server-side pagination.",
      "Kanban view powered by @dnd-kit with optimistic UI — drag a card from \"interested\" to \"applied\" and the API persists the transition.",
      "44 RSpec examples covering filters, sort, pagination, and the state machine. CI-friendly setup (one bin/setup away on a fresh Linux box).",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "RSpec", "React", "TypeScript", "TanStack Query", "@dnd-kit", "Tailwind"],
    links: [
      { label: "Code →", url: "https://github.com/brunombpereira/job-tracker" },
    ],
    group: "open-source",
  },
  {
    title: "dotfiles — Reproducible WSL Ubuntu Dev Environment",
    context: "Open source · 2026 · github.com/brunombpereira/dotfiles",
    description:
      "Bash bootstrap that turns a blank Ubuntu 24.04 (WSL or otherwise) into a Rails + React dev environment in ~15 minutes via a single ./install.sh.",
    highlights: [
      "Idempotent lib/*.sh scripts ordered by concern: apt base packages, zsh + starship + plugins, modern CLI tools (fzf/ripgrep/bat/eza/lazygit/direnv), asdf for Ruby and Node, PostgreSQL 16 with trust auth on localhost.",
      "Symlink phase backs up any existing dotfiles to ~/.dotfiles-backup-<ts>/ before replacing them — re-runnable safely.",
      "Shellcheck on every PR via GitHub Actions; conventional commits throughout.",
    ],
    tech: ["Bash", "asdf", "zsh", "starship", "PostgreSQL", "GitHub Actions"],
    links: [
      { label: "Code →", url: "https://github.com/brunombpereira/dotfiles" },
    ],
    group: "open-source",
  },
  {
    title: "This Portfolio Site",
    context: "Open source · 2026 · github.com/brunombpereira/portfolio",
    description:
      "The site you're reading. Next.js 14 App Router + TypeScript + Tailwind, deployed on Vercel. Content is type-checked TS data files — adding a project is a typed object literal, not a CMS dance.",
    highlights: [
      "Single-page composition with semantic sections (Hero, About, Projects, Footer) and a dark-mode-only palette intentionally tuned for readability.",
      "Edit content in src/data/{profile,projects}.ts — no markdown, no headless CMS, no build step beyond next build.",
      "Vercel auto-deploy on every push to main.",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [
      { label: "Code →", url: "https://github.com/brunombpereira/portfolio" },
    ],
    group: "open-source",
  },

  // ---- Work / Wiremaze ----
  {
    title: "Municipal Discount Card · Apple Wallet & Google Wallet",
    context: "Wiremaze · 2025–present",
    description:
      "End-to-end Rails + PostgreSQL system that issues digital discount cards for a public-sector client, with native wallet integrations on both iOS and Android.",
    highlights: [
      "Apple Wallet (PassKit) and Google Wallet (Issuer API) integrations: signing, push provisioning, lifecycle.",
      "Owned the full path from data model to mobile-ready frontend.",
      "Automated tests around the issuance pipeline.",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "Apple Wallet", "Google Wallet", "REST APIs"],
    group: "work",
  },
  {
    title: "Internal Web Code Editor (Monaco / VS Code stack)",
    context: "Wiremaze · 2025",
    description:
      "Embedded an in-product code editor on top of Monaco Editor — the same engine that powers VS Code — replacing a slower legacy tool.",
    highlights: [
      "Researched and integrated VS Code-style language features (syntax, hover, autocomplete) inside a React app.",
      "Materially improved authoring speed and reduced context switches for internal users.",
      "Picked up Monaco internals from a standing start — example of fast ramp-up on unfamiliar stacks.",
    ],
    tech: ["React", "Monaco Editor", "TypeScript", "VS Code APIs"],
    group: "work",
  },
  {
    title: "Day-to-day Engineering at Wiremaze",
    context: "Porto · May 2025 – present",
    description:
      "Junior full-stack engineer in a small product team — feature delivery, code review, refactoring across the entire stack.",
    highlights: [
      "Comfortable across Rails models/services/jobs, React components/hooks, and DB schema design.",
      "Practical exposure to CI, automated tests, and code review culture.",
      "Cross-functional delivery with non-engineering stakeholders.",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Git"],
    group: "work",
  },

  // ---- Academic ----
  {
    title: "Academic & Personal Work",
    context: "University of Aveiro · GitHub",
    description:
      "Final-year Computer & Informatics Engineering coursework plus side projects exploring different stacks.",
    highlights: [
      "Coursework spans algorithms, OS, networks, databases, software engineering.",
      "Side experience with Python (Flask), C# / SQL Server, and JavaScript outside the React ecosystem.",
      "Active GitHub profile with personal and academic projects.",
    ],
    tech: ["Python", "Flask", "C#", "SQL Server", "JavaScript"],
    links: [
      { label: "GitHub →", url: "https://github.com/brunombpereira" },
    ],
    group: "academic",
  },
];
