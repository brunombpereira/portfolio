// Timeline entries rendered by <Experience />. Newest first.
export type TimelineEntry = {
  kind: "work" | "education" | "certification";
  /** Short title shown as the row's serif heading. */
  title: string;
  /** Organisation or institution. */
  org: string;
  /** Location + dates, rendered as the muted aside. */
  context: string;
  /** 1-2 lines describing what it was. */
  description: string;
  /** Optional tag colour — see EXPERIENCE_TONES in Experience.tsx. */
  tone?: "sky" | "amber" | "violet" | "emerald";
};

export const experience: TimelineEntry[] = [
  {
    kind: "work",
    title: "Junior Web Developer",
    org: "Wiremaze",
    context: "Maia, Porto · May 2025 – present",
    description:
      "Full-stack delivery in Ruby on Rails + React + PostgreSQL — shipped wallet integrations, an internal Monaco-based editor, a GDPR consent rewrite and several secure platform migrations with RSpec + GitLab CI.",
    tone: "sky",
  },
  {
    kind: "education",
    title: "BSc in Computer & Informatics Engineering",
    org: "Universidade de Aveiro",
    context: "Aveiro · 2022 – present (final year)",
    description:
      "Coursework across algorithms, OS, networks, databases and software engineering; currently in the annual Databases project.",
    tone: "violet",
  },
  {
    kind: "certification",
    title: "Cambridge Advanced Certificate (C1)",
    org: "Starlínguas",
    context: "2020 – 2022",
    description:
      "C1-level English certified by Cambridge English Language Assessment (CAE).",
    tone: "amber",
  },
  {
    kind: "work",
    title: "Waiter / Bartender",
    org: "Real Abadia Hotel · A Casa · Mina Club",
    context: "2021 – 2024",
    description:
      "Customer service, payments, event support. Taught me to communicate under pressure and ship outcomes with cross-functional crews — useful muscles for engineering work.",
    tone: "emerald",
  },
  {
    kind: "education",
    title: "Secondary — Sciences & Tech",
    org: "Escola Secundária D. Inês de Castro",
    context: "2019 – 2022",
    description: "Ciências e Tecnologias track. Final-year project on web fundamentals.",
    tone: "violet",
  },
];
