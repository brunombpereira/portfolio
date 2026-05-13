// Adiciona/remove/edita projetos aqui — a página puxa esta lista.
export type Project = {
  title: string;
  context: string;     // ex.: "Wiremaze · 2025"
  description: string; // 1-2 frases
  highlights: string[];
  tech: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
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
  },
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
  },
];
