// Edita aqui os dados pessoais — tudo o que aparece no site puxa daqui.
// Alinhado com o CV em `~/projects/job-tracker/backend/storage/profile/cv/`.

export const profile = {
  name: "Bruno Borlido Pereira",
  tagline: "Junior Full-Stack Web Developer",
  location: "Aveiro, Portugal",
  email: "brunoborlido@gmail.com",
  phone: "",
  github: "https://github.com/brunombpereira",
  linkedin: "https://www.linkedin.com/in/brunombpereira",
  // Curto, em primeira pessoa — aparece no Hero
  pitch:
    "Junior Full-Stack Developer shipping features end-to-end with Ruby on Rails, React and PostgreSQL at Wiremaze. Finishing Computer & Informatics Engineering at the University of Aveiro and available to start immediately.",
  // Long-form — aparece em About
  about: [
    "I work day-to-day with Ruby on Rails, React and PostgreSQL at Wiremaze (Porto), where I’ve shipped features end-to-end on real client products since May 2025 — including a municipal discount-card platform integrated with Apple Wallet and Google Wallet, an in-house Monaco-based code editor that replaced a slower legacy tool, and a full GDPR cookie-consent rewrite.",
    "I like being the person who can take a feature from data model to UI, integrate with demanding external APIs, and keep quality up through RSpec coverage, GitLab CI pipelines, and pull-request review.",
    "I'm finishing my Computer & Informatics Engineering degree at Universidade de Aveiro, hold a C1 Cambridge Advanced (CAE) certificate, and actively use AI-assisted workflows (Claude, Copilot) as part of my day-to-day toolkit.",
  ],
  // Stack badges agrupadas — direto da secção "Competências Técnicas" do CV.
  stack: [
    {
      group: "Core",
      items: ["Ruby on Rails", "React", "PostgreSQL", "JavaScript", "TypeScript"],
    },
    {
      group: "APIs & Integrations",
      items: ["REST APIs", "Apple Wallet", "Google Wallet", "Monaco Editor"],
    },
    {
      group: "Tests & DevOps",
      items: ["RSpec", "Git", "GitLab", "GitLab CI", "Code review / PRs"],
    },
    {
      group: "Also exploring",
      items: ["Python (Flask)", "C# / .NET", "SQL Server (SSMS)", "Tailwind CSS", "AI assistants (Claude, Copilot)"],
    },
  ],
  // Spoken languages — aparece em About como chips.
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "C1 (Cambridge CAE)" },
  ],
  // Curta linha em About / Footer sobre disponibilidade e geografia.
  availability:
    "Available immediately for Junior Full-Stack roles in Aveiro / Porto / Braga / Lisbon (hybrid) or 100% remote across Portugal and Europe.",
};
