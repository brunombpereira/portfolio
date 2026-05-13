// Edita aqui os dados pessoais — tudo o que aparece no site puxa daqui.
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
    "Junior Full-Stack Developer focused on shipping production features end-to-end. Currently building Ruby on Rails / React products at Wiremaze, finishing my Computer & Informatics Engineering degree at the University of Aveiro.",
  // Long-form — aparece em About
  about: [
    "I work day-to-day with Ruby on Rails, React and PostgreSQL at Wiremaze (Porto), where I’ve shipped features end-to-end on real client products since May 2025.",
    "What I like most is being the person who can take a feature from data model to UI, integrate with demanding external APIs, and keep quality up through tests and code review.",
    "I’m currently finishing my Computer & Informatics Engineering degree at Universidade de Aveiro, hold a C1 Cambridge Advanced certificate, and am actively exploring AI-assisted development workflows.",
  ],
  // Stack badges agrupadas — fácil de adicionar/remover.
  stack: [
    { group: "Core",       items: ["Ruby on Rails", "React", "PostgreSQL", "JavaScript", "TypeScript"] },
    { group: "Also using", items: ["Python (Flask)", "C# / .NET", "SQL Server", "HTML/CSS", "Tailwind"] },
    { group: "Tooling",    items: ["Git", "Docker", "Linux", "AI assistants (Claude, Copilot)"] },
  ],
};
