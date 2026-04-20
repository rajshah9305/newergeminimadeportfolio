export const PERSONAL_INFO = {
  name: "Raj Shah",
  role: "AI & Full-Stack Systems Architect",
  bio: "I build high-performance digital ecosystems and autonomous agents. Specializing in Next.js 15, Python, and scalable AI infrastructure to deliver software that is fault-tolerant, scalable, and aesthetically absolute.",
  email: "contact@rajai.org",
  github: "https://github.com/rajshah9305",
  linkedin: "https://www.linkedin.com/in/rajshah9305",
  location: "Calgary, Canada",
  coordinates: "LAT 51.0447° N / LON 114.0719° W",
  availability: "AVAILABLE / Q1—Q2 2025",
  version: "V.05 // 2025",
  website: "https://www.rajai.org",
  stats: [
    { label: "YEARS SHIPPING", value: "8+" },
    { label: "PRODUCTION SYSTEMS", value: "45+" },
    { label: "AI AGENTS DEPLOYED", value: "12" },
    { label: "UPTIME SLA", value: "99.99%" },
  ],
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "AI INFRASTRUCTURE",
  "FULL-STACK SYSTEMS",
  "AGENT ORCHESTRATION",
  "REAL-TIME RAG",
  "EDGE DEPLOYMENT",
  "SCALABLE BACKENDS",
  "DESIGN ENGINEERING",
];

export interface SkillGroup {
  category: string;
  items: string[];
  isFeatured?: boolean;
  featuredTitle?: string;
  featuredDesc?: string;
  badge?: string;
  iconName?: "cpu" | "zap" | "activity" | "layers";
}

export const SKILLS: SkillGroup[] = [
  {
    category: "SYSTEM LEVEL PERFORMANCE",
    featuredTitle: "SYSTEM LEVEL PERFORMANCE",
    featuredDesc: "Scaling applications with Rust and Go for high-concurrency environments.",
    items: ["Rust", "Go", "C++", "Python", "SQL", "Docker"],
    isFeatured: true,
    badge: "CORE ENGINE",
    iconName: "cpu",
  },
  {
    category: "FRONTEND",
    items: ["React 19", "Next.js 15", "Framer Motion", "Tailwind CSS", "Three.js", "WebGPU"],
    badge: "v15",
    iconName: "zap",
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "OpenAI / Anthropic", "LangChain / CrewAI", "FastAPI", "Vector DBs", "RAG"],
    badge: "AGENTIC",
    iconName: "activity",
  },
  {
    category: "INFRASTRUCTURE",
    items: ["AWS (EKS)", "Kubernetes", "Terraform", "Redis", "PostgreSQL", "CI/CD"],
    badge: "OPS",
    iconName: "layers",
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  desc: string;
  tags: string[];
  stat: string;
  links: { live?: string; github?: string };
  icon: "brain" | "cpu" | "database" | "zap" | "layers" | "code" | "bot";
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    number: "01",
    title: "RAJ AI PLATFORM",
    desc: "A mission-critical AI operating system integrating multi-modal LLMs with sub-100ms latency. Implemented a custom RAG engine using hybrid search (semantic + keyword) and high-performance streaming via Server-Sent Events (SSE). The architecture handles massive state synchronization across edge nodes.",
    tags: ["NEXT.JS 15", "PYTHON", "LANGCHAIN", "PINECONE", "REDIS"],
    stat: "10K+ INFERENCES/DAY",
    links: {
      live: "https://www.rajai.org",
      github: "https://github.com/rajshah9305/raj-ai-platform",
    },
    icon: "brain",
    featured: true,
  },
  {
    id: "p2",
    number: "02",
    title: "AGENT ORCHESTRATION",
    desc: "Enterprise-scale management for autonomous AI agents using Cerebras for ultra-low latency inference. Built a real-time 3D monitoring dashboard with Three.js/React Three Fiber. Orchestrates AutoGen and CrewAI frameworks with a custom WebSocket-based state machine for fault-tolerant task execution.",
    tags: ["TYPESCRIPT", "THREE.JS", "CEREBRAS", "WEBSOCKETS", "BULLMQ"],
    stat: "5 FRAMEWORKS SYNCED",
    links: {
      github: "https://github.com/rajshah9305/AIAgentOrchestrationPlatform",
    },
    icon: "bot",
    featured: true,
  },
  {
    id: "p3",
    number: "03",
    title: "AI APP ARCHITECT",
    desc: "Zero-code deployment engine translating natural language into production-grade React/Next.js applications. Leverages Cerebras GPT-OSS-120B for high-fidelity code generation. Features a custom Monaco Editor integration for real-time AI-assisted debugging and one-click Vercel integration.",
    tags: ["NEXT.JS", "CEREBRAS", "MONACO", "PRISMA", "POSTGRESQL"],
    stat: "ZERO-CODE DEPLOY",
    links: {
      github: "https://github.com/rajshah9305/AIAppBuilder-CerebrasAI-llama-4",
    },
    icon: "code",
    featured: true,
  },
  {
    id: "p4",
    number: "04",
    title: "UI COMPONENT ENGINE",
    desc: "A design-to-code engine generating five unique brutalist UI variants from a single prompt. Utilizes custom GLSL shaders for high-performance background animations. Integrated with OpenAI and Anthropic APIs for intelligent layout reasoning and component styling.",
    tags: ["REACT", "TYPESCRIPT", "GLSL", "OPENAI API", "VITE"],
    stat: "5 DESIGN VARIANTS",
    links: {
      github: "https://github.com/rajshah9305/AIpreviewwindow",
    },
    icon: "zap",
    featured: true,
  },
  {
    id: "p5",
    number: "05",
    title: "CREW AI PLATFORM",
    desc: "Production-grade agent management system optimized for Google Gemini 2.0 Flash. Features a robust Drizzle ORM layer for PostgreSQL persistence, complex rate-limiting algorithms, and a type-safe drag-and-drop workflow builder for agent multi-tasking.",
    tags: ["TYPESCRIPT", "REACT", "GEMINI 2.0", "DRIZZLE", "POSTGRESQL"],
    stat: "ENTERPRISE GRADE",
    links: {
      github: "https://github.com/rajshah9305/Crewsaisingle",
    },
    icon: "cpu",
  },
  {
    id: "p6",
    number: "06",
    title: "SCIVIZ DESIGN SYSTEM",
    desc: "Scientific visualization component library for high-density data environments. Redefines portal navigation with modular React components, custom CSS variables for theme switching, and optimized rendering for large datasets using React's useDeferredValue.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "RADIX UI"],
    stat: "FULL DESIGN SYSTEM",
    links: {
      github: "https://github.com/rajshah9305/SciViz-Design-System",
    },
    icon: "layers",
  },
];

export const EXPERIENCE = [
  {
    id: "e1",
    year: "2023 — PRESENT",
    role: "Senior AI Solutions Engineer",
    company: "Nexus AI Systems",
    desc: "Architecting high-throughput agentic workflows and migrating legacy systems to K8s-based microservices. Lead the development of internal AI agents that reduced dev-ops cycle time by 35% through automated pipeline monitoring.",
    skills: ["LLMs", "Kubernetes", "Architecture", "Python"],
  },
  {
    id: "e2",
    year: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Elevate Digital Labs",
    desc: "Built and scaled React-based consumer platforms serving 2M+ monthly active users. Implemented advanced PostgreSQL indexing strategies and Redis caching layers, reducing API response times by 250ms on average.",
    skills: ["Next.js", "PostgreSQL", "Redis", "Node.js"],
  },
  {
    id: "e3",
    year: "2017 — 2021",
    role: "B.S. Computer Science",
    company: "Georgia Institute of Technology",
    desc: "Specialized in Artificial Intelligence and Distributed Systems. Research assistant in the Distributed Computing Lab, focusing on low-latency consensus algorithms.",
    skills: ["AI/ML", "Systems", "Research", "Algorithms"],
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "Raj doesn't just write code; he builds digital fortresses. His approach to AI integration is the most rigorous I've seen in a decade.",
    author: "Dr. Aris Thorne",
    role: "CTO @ Nexus AI",
    avatar: "AT",
  },
  {
    id: "t2",
    quote: "The speed at which he delivered our orchestration platform was only surpassed by the absolute stability of the system under load.",
    author: "Sarah Chen",
    role: "VP Engineering @ Elevate",
    avatar: "SC",
  },
  {
    id: "t3",
    quote: "A rare engineer who understands both the deep mathematical underpinnings of LLMs and the aesthetic demands of modern UI.",
    author: "Marcus Vane",
    role: "Lead Designer @ SciViz",
    avatar: "MV",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "DISCOVERY & ANALYSIS",
    desc: "Deep-dive into system requirements, bottleneck identification, and feasibility studies for AI integration.",
  },
  {
    step: "02",
    title: "ARCHITECTURAL BLUEPRINT",
    desc: "Designing fault-tolerant microservices, choosing the right vector databases, and defining API contracts.",
  },
  {
    step: "03",
    title: "HIGH-FIDELITY DEV",
    desc: "Clean, type-safe implementation with a focus on performance, scalability, and brutalist design principles.",
  },
  {
    step: "04",
    title: "STRESS TEST & DEPLOY",
    desc: "Rigorous load testing, CI/CD automation, and deployment to high-availability edge infrastructure.",
  },
];
