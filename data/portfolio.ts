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
  role: "AI Platform Engineer & Full-Stack Product Builder",
  location: "Delhi, India",
  email: "rishabh.kala2003@gmail.com",
  phone: "9958124803",
  github: "https://github.com/Rishabh-Kala",
  linkedin: "https://linkedin.com/in/rishabh-kala",
  resume: "/rishabh-kala-resume.pdf",
  intro:
    "I build production AI-agent platforms, workflow automation tools, admin consoles, RBAC and audit infrastructure, API gateways, scheduler/notification services, model-management systems, and service-side product features.",
  about: [
    "I'm a Software Engineer focused on full-stack product engineering and internal platform systems. My recent work includes workflow builders, agent runtime controls, model-management APIs, audit-heavy admin operations, RBAC/MFA infrastructure, scheduler systems, and reliability improvements.",
    "I thrive in fast-paced environments building complex systems that power AI-driven products, from visual workflow canvases to microservice orchestration and deployment pipelines.",
  ],
};

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "75%", label: "API Reduction" },
];

export const socialLinks = [
  { href: profile.github, label: "GitHub", icon: Code2 },
  { href: profile.linkedin, label: "LinkedIn", icon: SquareUser },
];

export const experience = {
  title: "Software Engineer",
  company: "Rapid Innovation / RUH AI Product Unit",
  dates: "June 2024 - June 2026",
  bullets: [
    {
      title: "Workflow Builder Platform",
      description:
        "Built major Workflow Builder capabilities including trigger CRUD, scheduler filtering, activity/log pages, workflow execution controls, stop execution, MCP auth state, Pipedream triggers, automation chat, generated workflow import, and responsive Figma-based UI.",
    },
    {
      title: "1,947-Line Refactor",
      description:
        "Refactored a large Workflow Builder node system from a monolithic component into modular React components, hooks, services, validators, utilities, and tests, improving maintainability and type safety.",
    },
    {
      title: "Super Admin & Admin Platforms",
      description:
        "Built internal operations modules for organisations, users, agents, workflows, MCPs, integrations, credits, transactions, campaigns, subscriptions, waitlist, inbox rotation, marketplace review, cross-org agent browsing, and admin dashboards.",
    },
    {
      title: "RBAC, MFA & Audit Infrastructure",
      description:
        "Implemented multi-role admin RBAC, Redis-cached effective permissions, permission guards, permission catalog APIs, org-level email OTP MFA, reusable OTP UI, session verification, super-admin attribution, and non-blocking audit logs.",
    },
    {
      title: "AI Model Management",
      description:
        "Built model-management infrastructure across frontend, API gateway, proto definitions, and agent-builder service, including OpenRouter model sync, provider filters, active/global toggles, max-6 global model limits, audit logs, pagination, and agent-level model IDs.",
    },
    {
      title: "API Consolidation",
      description:
        "Reduced provider/model API surface area by 75% by consolidating 12 endpoints into 3 filter-driven APIs.",
    },
    {
      title: "Agent Deployment & Runtime",
      description:
        "Delivered agent versioning, marketplace publish/update flows, GitHub/ZIP deployment source handling, running-deployment updates, runtime env-var staging/apply APIs, secret masking, SSE/polling progress, backup/restore, callbacks, and PI runtime support.",
    },
    {
      title: "Cloud Security & Platform Reliability",
      description:
        "Migrated services to Redis TLS/AUTH and private GCS signed URLs with GKE Workload Identity, updated CDN URL consumers, hardened rate limiting and secrets, and improved scheduler, notification, support-ticket, payment, legal, and analytics flows.",
    },
    {
      title: "Notifications, Scheduler & Analytics",
      description:
        "Built agent lifecycle notifications, OpenRouter/Apollo credit alerts, support-ticket emails, payment/subscription notifications, scheduled task UI, Mixpanel login/signup/onboarding/SDR/campaign tracking, and production template fixes.",
    },
  ],
};

export const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python"] },
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "React Query",
      "TypeScript UI Architecture",
      "Canvas UI",
      "Low-Code Workflow UI",
      "Admin Consoles",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "gRPC", "Protobuf", "Microservices", "API Gateway", "Bun / Elysia"],
  },
  {
    title: "Database & Infrastructure",
    skills: ["PostgreSQL", "Redis TLS/AUTH", "Kafka", "Pub/Sub", "GCS Signed URLs", "GKE", "Workload Identity"],
  },
  {
    title: "AI / GenAI",
    skills: [
      "AI Agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "MCP",
      "Workflow Automation",
      "Model Management",
      "Agent Deployment",
      "Runtime Configuration",
    ],
  },
  {
    title: "Architecture & Systems",
    skills: [
      "RBAC",
      "MFA",
      "Audit Logging",
      "Scheduler Systems",
      "Notification Systems",
      "Support Automation",
      "Legal Versioning",
      "Product Analytics",
    ],
  },
];

export const focusAreas = [
  {
    title: "Workflow Automation",
    description: "Trigger CRUD, Pipedream triggers, scheduler flows, activity logs, MCP auth, automation chat, workflow import",
    icon: Workflow,
  },
  {
    title: "AI Agent Platforms",
    description: "Agent versioning, marketplace updates, GitHub/ZIP deployments, runtime env vars, PI runtime support",
    icon: Bot,
  },
  {
    title: "RBAC & Security",
    description: "Multi-role admins, MFA, audit logs, Redis-cached permissions, signed URLs, Redis TLS/AUTH",
    icon: Shield,
  },
  {
    title: "API & Backend",
    description: "API Gateway, gRPC, protobuf contracts, provider/model API consolidation, service integrations",
    icon: Server,
  },
  {
    title: "Admin Consoles",
    description: "Organisations, users, agents, credits, subscriptions, campaigns, waitlist, inbox rotation",
    icon: LayoutDashboard,
  },
  {
    title: "Scheduler & Notifications",
    description: "Lifecycle alerts, credit monitoring, support-ticket emails, payment notifications, analytics events",
    icon: Bell,
  },
];

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "JIMS Engineering Management Technical Campus",
  dates: "July 2020 - July 2024",
  cgpa: "CGPA: 8.6",
  coursework: "Coursework: Data Structures, Algorithms, Databases, Operating Systems",
  award: "Semi-Finalist - IEEE DTU National Hackathon, Vihaan 6.0",
  icon: GraduationCap,
  awardIcon: Trophy,
};

export const contactLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: `tel:${profile.phone}`, label: profile.phone, icon: Phone },
  ...socialLinks,
];
