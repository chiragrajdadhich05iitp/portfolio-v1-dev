export const siteConfig = {
  name: "Chirag Raj Dadhich",
  role: "Software Engineer",
  tagline: "Full-Stack Engineer · AI Architectures & Distributed Systems",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chiragdadhich.vercel.app",
  email: "crajdadhich05@gmail.com",
  phone: "+91 7876552526",
  location: "India",
  resumePath: "/chirag-resume.pdf",
  links: {
    github: "https://github.com/chiragrajdadhich05iitp",
    linkedin: "https://www.linkedin.com/in/chirag-raj-dadhich-aba27a2ba/",
    leetcode: "https://leetcode.com/u/chiragrajdadhich05iitp",
    codeforces: "https://codeforces.com",
    codechef: "https://www.codechef.com",
  },
};

export const typingPhrases = [
  "Full-Stack Engineer · Next.js / TypeScript",
  "AI Pipelines & Visual Workflow Builders",
  "IIT Patna · 2023 – 2027",
  "Building reliable distributed systems",
];

export const heroStats = [
  { value: "IITP", label: "2023 – 2027" },
  { value: "SIH", label: "Team Leader '24" },
  { value: "Web3", label: "Hackathon Builder" },
  { value: "100%", label: "Production Ownership" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer at IIT Patna (2023–2027) focused on full-stack systems, distributed architectures, and platform reliability tooling. I build end-to-end applications from system architecture and API pipelines to interactive frontends using TypeScript, Python, Next.js, and modern databases.",
    "I built NextFlow, an interactive AI workflow orchestrator that lets developers visually construct, test, and run multimodal LLM pipelines. I prioritize solid system design, clear data contracts, and fault tolerance that holds up under real production constraints.",
  ],
  highlights: [
    {
      title: "Systems that don't fall over",
      text: "Optimistic concurrency, reliable session lifecycles, and resilient database queries designed around real-world edge cases.",
    },
    {
      title: "End-to-end ownership",
      text: "From database schema modeling (Prisma/SQLite/Postgres) and auth workflows (NextAuth) to drag-and-drop canvas engineering.",
    },
    {
      title: "Engineering fundamentals",
      text: "Rigorous CS foundation from IIT Patna, hands-on leadership at hackathons, and clean modular codebases.",
    },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "R.K. IntelliServe",
    role: "Chief Execution",
    period: "2025 – Present",
    location: "India",
    bullets: [
      "Directed technical architecture and product engineering for end-to-end software development initiatives and enterprise platforms.",
      "Spearheaded compliance, cloud system provisioning, and rapid deployment pipelines for internal software services.",
      "Designed full-stack application modules using Next.js, TypeScript, and relational databases.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    company: "Oodles Technologies",
    role: "Software Developer Intern",
    period: "Apr 2026 – May 2026",
    location: "India",
    bullets: [
      "Contributed to core full-stack features, API integration layers, and automated data processing routines.",
      "Identified and resolved runtime edge-case issues across service layers with thorough regression tests.",
    ],
    stack: ["JavaScript", "TypeScript", "Node.js", "REST APIs"],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  badge: string;
  note: string;
  description: string;
  points: string[];
  stack: string[];
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "NextFlow",
    subtitle: "Visual AI Workflow Builder",
    badge: "Open Source / Core Project",
    note: "interactive canvas with persistent state & custom auth",
    description:
      "A complete full-stack visual canvas application allowing developers to orchestrate, execute, and monitor multimodal AI workflows in real-time.",
    points: [
      "Drag-and-drop visual DAG canvas built on React Flow with dynamic node state dispatching and edge reconnection logic.",
      "Integrated zero-config SQLite persistence layer via Prisma ORM for seamless local and standalone development.",
      "Robust credentials-based session management powered by NextAuth.js with layout-level protected routes.",
      "Type-safe end-to-end data contracts using TypeScript, Zod schema validation, and Next.js 14 App Router.",
    ],
    stack: ["Next.js", "TypeScript", "React Flow", "Prisma", "SQLite", "NextAuth.js", "Tailwind CSS"],
    live: "https://github.com/chiragrajdadhich05iitp/ai-workflow-builder",
    featured: true,
  },
  {
    name: "Smart India Hackathon Project",
    subtitle: "Hack Champs Lead Initiative",
    badge: "SIH 2024 Nominated Leader",
    note: "led the institute hackathon team",
    description:
      "Engineered an automated collaborative solution addressing high-impact national problem statements under the Smart India Hackathon.",
    points: [
      "Served as Team Leader directing system architecture, API design, and rapid sprint execution.",
      "Built resilient database transactional pipelines to prevent concurrency conflicts during simultaneous updates.",
      "Shipped a responsive, accessible web dashboard delivering low-latency updates for users.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    live: "https://github.com/chiragrajdadhich05iitp",
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "HTML5", "CSS3"] },
  { title: "Full-Stack & Frameworks", skills: ["Next.js (App Router)", "React.js", "Node.js", "Express.js", "Tailwind CSS"] },
  { title: "AI & Graph UI", skills: ["React Flow", "LLM Workflows", "Prompt Pipelines", "Canvas UI"] },
  { title: "Databases & ORM", skills: ["Prisma ORM", "SQLite", "PostgreSQL", "MySQL", "MongoDB"] },
  { title: "Architecture & Tools", skills: ["NextAuth.js", "Docker", "Git", "GitHub", "REST APIs", "Zod"] },
  { title: "CS Fundamentals", skills: ["Data Structures & Algorithms", "Operating Systems", "Distributed Systems", "Object-Oriented Design"] },
];

export type CPPlatform = {
  platform: string;
  rating: string;
  tier: string;
  detail: string;
  link?: string;
  color: string;
};

export const competitiveProgramming: CPPlatform[] = [
  {
    platform: "IIT Patna",
    rating: "Student",
    tier: "2023 – 2027",
    detail: "Computer Science & Engineering",
    color: "#3b82f6",
  },
  {
    platform: "GitHub",
    rating: "Active",
    tier: "Builder",
    detail: "Full-stack apps, AI workflow canvas, and open-source repos",
    link: "https://github.com/chiragrajdadhich05iitp",
    color: "#10b981",
  },
  {
    platform: "Smart India Hackathon",
    rating: "2024",
    tier: "Team Leader",
    detail: "Led institute team 'Hack Champs'",
    color: "#f59e0b",
  },
];

export const achievements = [
  {
    title: "Team Leader — Smart India Hackathon 2024",
    text: "Nominated by IIT Patna to lead team 'Hack Champs' tackling technical problem statements in the national challenge.",
  },
  {
    title: "Shipped NextFlow — AI Workflow Builder",
    text: "Architected a full-featured visual AI workflow editor with dynamic canvas nodes, custom auth, and local SQLite persistence.",
  },
  {
    title: "National Tech Finale Competitor (Kerala)",
    text: "Selected for national-tier technological competition event finale held in Amritapuri, Kerala.",
  },
  {
    title: "Full-Stack & Web3 Engineering",
    text: "Continuous track record of building and shipping full-stack developer tools and participating in high-intensity hackathons.",
  },
];

// Education updated (No B.Tech, 2023 - 2027)
export const education = {
  institute: "Indian Institute of Technology Patna (IIT Patna)",
  degree: "Computer Science and Engineering",
  period: "2023 – 2027",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Object-Oriented Design"],
};

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "achievements", href: "#high-scores" },
  { label: "say hi", href: "#contact" },
];