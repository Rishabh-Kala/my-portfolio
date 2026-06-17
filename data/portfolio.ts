import {
  Bell,
  Bot,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Phone,
  SquareUser,
  Server,
  Shield,
  Trophy,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Rishabh Kala",
  initials: "RK",
  role: "Software Engineer | Full-Stack, AI & Automation",
  location: "Delhi, India",
  email: "rishabh.kala2003@gmail.com",
  phone: "9958124803",
  github: "https://github.com/Rishabh-Kala",
  linkedin: "https://linkedin.com/in/rishabh-kala",
  resume: "/rishabh-kala-resume.pdf",
  intro:
    "I have 2 years of experience building React and Next.js products, FastAPI-backed systems, workflow automation platforms, admin and RBAC tools, and GenAI agent and RAG workflows.",
  about: [
    "I'm a Software Engineer focused on full-stack product engineering, workflow automation, and GenAI platforms. At Rapid Innovation, I have shipped production systems across React, Next.js, TypeScript, FastAPI, Bun/Elysia, REST, gRPC, and Protobuf.",
    "My work spans visual workflow builders, AI model management, agent deployment, admin operations, org-scoped MFA, multi-role RBAC, RAG pipelines, and event-driven services. I enjoy taking complex platform problems from architecture through polished, reliable delivery.",
  ],
};

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "2", label: "Years Experience" },
  { value: "~80%", label: "Core Complexity Reduced" },
];

export const socialLinks = [
  { href: profile.github, label: "GitHub", icon: Code2 },
  { href: profile.linkedin, label: "LinkedIn", icon: SquareUser },
];

export const experience = {
  title: "Software Engineer",
  company: "Rapid Innovation / Product Unit (RUH AI)",
  dates: "June 2024 - June 2026",
  location: "Remote",
  bullets: [
    {
      title: "AI Workflow Automation Builder",
      description:
        "Engineered the production platform using React, Next.js, TypeScript, and Bun/Elysia, delivering workflow canvas UX, Pipedream/OAuth triggers, MCP marketplace integration, scheduler management, execution controls, activity logs, and AI-assisted workflow generation.",
    },
    {
      title: "1,947-Line WorkflowNode Refactor",
      description:
        "Split a monolithic component into modular React components, hooks, services, and utilities, reducing core complexity by about 80%, enforcing TypeScript strict mode, and expanding coverage across OAuth, MCP, credential, store, and provider layers.",
    },
    {
      title: "Super Admin & Operations Platform",
      description:
        "Built 10+ modules for organisations, users, AI agents, workflows, credits, subscriptions, marketplace reviews, RBAC permissions, and audit logs backed by REST and gRPC/Protobuf APIs.",
    },
    {
      title: "AI Model Management",
      description:
        "Built model-management infrastructure across admin UI, API gateway, and agent-builder services with OpenRouter sync, activation controls, global and per-agent limits, and consolidation of 12 endpoints into 3 filter-driven APIs.",
    },
    {
      title: "MFA, RBAC & Audit Infrastructure",
      description:
        "Designed org-scoped MFA and multi-role RBAC with Redis-backed OTPs, TTL and attempt lockout, timing-safe verification, session stamping, cached permission unions, and super-admin attribution across audit logs.",
    },
    {
      title: "Agent Deployment & Runtime",
      description:
        "Delivered agent versioning, marketplace publish and update flows, secret-masked environment configuration, staged draft/apply workflows, SSE and polling progress, sandbox backup/restore, and rollback across React, Python, and Protobuf contracts.",
    },
    {
      title: "GenAI & Event-Driven Systems",
      description:
        "Applied OpenClaw agents, LangChain/LangGraph prototypes, RAG pipelines, prompt engineering, MCP tool orchestration, multimodal inputs, and event-driven notifications using Pub/Sub, Kafka, and SendGrid.",
    },
    {
      title: "Cross-Project Product Delivery",
      description:
        "Worked across 7+ production service projects, delivering responsive product interfaces, Web3 experiences, and performance-focused canvas tooling.",
    },
  ],
};

export const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5", "CSS3"] },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Zustand",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "MUI / Joy UI",
      "styled-components",
      "Konva",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "Bun / Elysia", "REST APIs", "gRPC / Protobuf", "JWT / OAuth", "WebSockets", "Microservices"],
  },
  {
    title: "AI / GenAI",
    skills: ["LLM Integration", "RAG Pipelines", "LangChain", "LangGraph", "Prompt Engineering", "Agentic Workflows", "MCP Tool Orchestration", "OpenRouter", "Pipedream", "n8n"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "GCS", "S3", "Query Optimization"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "GitHub Actions", "GCP", "Pub/Sub", "Kafka", "Git", "GitHub CLI", "Postman", "Linear", "Figma"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "Vitest", "Cypress", "Playwright", "ESLint", "TypeScript Strict Mode"],
  },
];

export const projects = [
  {
    title: "NightShift Agent",
    type: "Autonomous Development Agent",
    description:
      "A Python agent that converts Linear tickets into GitHub pull requests by gathering ticket context, resolving repositories, running Claude Code sessions, creating PR summaries, and updating ticket status.",
    highlights:
      "Built with isolated Git worktrees, parallel execution, retry tracking, repository filtering, and a two-agent TDD workflow using dedicated Test and Dev agents.",
    technologies: ["Python", "Claude Code", "GitHub CLI", "Docker", "Linear API"],
    href: "https://github.com/Rishabh-Kala/Night-Shift-Agent",
  },
];

export const focusAreas = [
  {
    title: "Workflow Automation",
    description: "Visual workflow canvases, Pipedream and OAuth triggers, MCP integrations, scheduling, execution controls, logs, and AI-assisted generation",
    icon: Workflow,
  },
  {
    title: "GenAI & Agentic Systems",
    description: "OpenClaw agents, RAG pipelines, LangChain, LangGraph, prompt engineering, multimodal inputs, and MCP tool orchestration",
    icon: Bot,
  },
  {
    title: "RBAC & Security",
    description: "Org-scoped MFA, Redis-backed OTPs, multi-role RBAC, cached permission unions, session controls, and attributed audit logs",
    icon: Shield,
  },
  {
    title: "API & Backend",
    description: "FastAPI, Bun/Elysia, REST, gRPC and Protobuf contracts, microservices, WebSockets, and filter-driven API consolidation",
    icon: Server,
  },
  {
    title: "Admin Consoles",
    description: "Operations tooling for organisations, users, AI agents, workflows, credits, subscriptions, marketplace reviews, and permissions",
    icon: LayoutDashboard,
  },
  {
    title: "Agent Deployment",
    description: "Versioning, marketplace publishing, secret-masked configuration, staged apply flows, progress streaming, backup, restore, and rollback",
    icon: Bell,
  },
];

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "JIMS Engineering Management Technical Campus",
  dates: "July 2020 - July 2024",
  cgpa: "CGPA: 8.6",
  awards: [
    "Winner - Internal Hackathon, JIMS EMTC",
    "Semi-Finalist - IEEE DTU National Hackathon, Vihaan 6.0",
  ],
  icon: GraduationCap,
  awardIcon: Trophy,
};

export const contactLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: `tel:${profile.phone}`, label: profile.phone, icon: Phone },
  ...socialLinks,
];
