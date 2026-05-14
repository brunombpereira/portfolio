// Adiciona/remove/edita projetos aqui — a página puxa esta lista.
export type Project = {
  title: string;
  context: string; // ex.: "Wiremaze · 2025"
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
      "End-to-end Rails 7.1 API + React/Vite app I built to manage my own pipeline of job offers, with a Kanban board, full-text filters, multi-source scraping, and a state machine on the backend.",
    highlights: [
      "Rails 7.1 API with a normalised data model (Offer, Source, Note, StatusChange, SearchBatch) and a server-side state machine that validates every transition.",
      "React 18 + TypeScript + Tailwind frontend: CRUD via TanStack Query mutations, debounced search, multi-status filter, match-score range, server-side pagination.",
      "Multi-source job scraping (Remotive, Landing.jobs, WWR, HN Who's Hiring, Net-Empregos, Teamlyzer, LinkedIn guest API) fanned out via Sidekiq jobs into a SearchBatch with live progress.",
      'Kanban view powered by @dnd-kit with optimistic UI — drag a card from "interested" to "applied" and the API persists the transition.',
      "140+ RSpec examples covering filters, sort, pagination, scrapers, the state machine, and a profile-aware match-score algorithm. CI-friendly setup (one bin/setup away on a fresh Linux box).",
    ],
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "Sidekiq",
      "RSpec",
      "React",
      "TypeScript",
      "TanStack Query",
      "@dnd-kit",
      "Tailwind",
    ],
    links: [{ label: "Code →", url: "https://github.com/brunombpereira/job-tracker" }],
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
    links: [{ label: "Code →", url: "https://github.com/brunombpereira/dotfiles" }],
    group: "open-source",
  },
  {
    title: "This Portfolio Site",
    context: "Open source · 2026 · github.com/brunombpereira/portfolio",
    description:
      "The site you're reading. Next.js 14 App Router + TypeScript + Tailwind, deployed on Vercel. Content is type-checked TS data files — adding a project is a typed object literal, not a CMS dance.",
    highlights: [
      "Single-page composition with semantic sections (Hero, About, Projects, Footer) and a dark-mode-only palette intentionally tuned for readability.",
      "Reveal-on-scroll without framer-motion — a 30-line IntersectionObserver wrapper that respects prefers-reduced-motion.",
      "Edit content in src/data/{profile,projects}.ts — no markdown, no headless CMS, no build step beyond next build.",
      "Vercel auto-deploy on every push to main.",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Code →", url: "https://github.com/brunombpereira/portfolio" }],
    group: "open-source",
  },

  // ---- Work / Wiremaze ----
  {
    title: "Municipal Discount Card · Apple Wallet & Google Wallet",
    context: "Wiremaze · 2025–present",
    description:
      "End-to-end Rails + PostgreSQL system that issues digital discount cards for a public-sector client (municipality), with native wallet integrations on both iOS and Android plus an admin dashboard.",
    highlights: [
      "Apple Wallet (PassKit) and Google Wallet (Issuer API) integrations: pass signing, push provisioning, and lifecycle (issuance, revocation, expiry).",
      "Owned the full path from data model to mobile-ready frontend — including the usage-analytics dashboard the municipality uses to monitor adoption.",
      "Automated tests around the issuance pipeline; integration into the GitLab CI build.",
    ],
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "Apple Wallet (PassKit)",
      "Google Wallet Issuer API",
      "REST APIs",
    ],
    group: "work",
  },
  {
    title: "Internal Web Code Editor (Monaco / VS Code stack)",
    context: "Wiremaze · 2025",
    description:
      "Embedded an in-product code editor on top of Monaco Editor — the same engine that powers VS Code — replacing a plain-textarea legacy tool. Measurable productivity bump for internal users authoring product content.",
    highlights: [
      "Researched and integrated VS Code-style language features (syntax highlighting, hover hints, autocomplete, linting) inside a React app.",
      "Materially improved authoring speed and reduced context switches for the internal users of the company's products.",
      "Picked up Monaco internals from a standing start — example of fast ramp-up on unfamiliar stacks.",
    ],
    tech: ["React", "Monaco Editor", "TypeScript", "VS Code APIs"],
    group: "work",
  },
  {
    title: "GDPR Cookie Consent — Full Rewrite",
    context: "Wiremaze · 2025",
    description:
      "Redesigned and migrated the cookie-consent and preference-management system across the product suite to meet the new GDPR + web-accessibility requirements.",
    highlights: [
      "New consent structure (granular per-category opt-in, persistent preference centre, audit trail) replacing the previous all-or-nothing banner.",
      "Reworked the UI to satisfy accessibility checks (keyboard navigation, contrast, screen-reader labels) while keeping the brand look.",
      "Coordinated with stakeholders on the legal copy and shipped the migration without downtime via feature-flagged rollout.",
    ],
    tech: ["Ruby on Rails", "JavaScript", "GDPR", "Accessibility"],
    group: "work",
  },
  {
    title: "Secure Platform Migration",
    context: "Wiremaze · 2025",
    description:
      "Migrated several products from a legacy platform to a newer in-house framework, with security hardening and bug fixes baked into the move.",
    highlights: [
      "Audited and fixed pre-existing bugs uncovered during the migration instead of shipping them forward.",
      "Strengthened authentication paths, input validation and session handling as part of the cut-over.",
      "Wrote integration tests against the new platform so regressions surface in CI before deploy.",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "RSpec", "GitLab CI"],
    group: "work",
  },
  {
    title: "Day-to-day Engineering at Wiremaze",
    context: "Porto · May 2025 – present",
    description:
      "Junior full-stack engineer in a small product team — feature delivery, code review, refactoring across the entire stack with RSpec coverage and GitLab CI gates on every PR.",
    highlights: [
      "Comfortable across Rails models/services/jobs, React components/hooks, and DB schema design.",
      "Practical exposure to CI pipelines (GitLab CI), automated testing with RSpec, and pull-request review culture.",
      "Cross-functional delivery with non-engineering stakeholders — requirements gathering, demos, follow-through.",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "RSpec", "GitLab CI", "Git"],
    group: "work",
  },

  // ---- Academic ----
  {
    title: "Academic & Personal Work",
    context: "University of Aveiro · GitHub",
    description:
      "Final-year Computer & Informatics Engineering coursework plus side projects exploring different stacks. Currently in the annual Databases project.",
    highlights: [
      "Coursework spans algorithms, OS, networks, databases, software engineering.",
      "Side experience with Python (Flask), C# / SQL Server, and JavaScript outside the React ecosystem.",
      "Active GitHub profile with personal and academic projects.",
    ],
    tech: ["Python", "Flask", "C#", "SQL Server", "JavaScript"],
    links: [{ label: "GitHub →", url: "https://github.com/brunombpereira" }],
    group: "academic",
  },
];
