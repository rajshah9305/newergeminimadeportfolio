export const PERSONAL_INFO = {
  name: "Raj Shah",
  role: "AI & Full-Stack Engineer",
  bio: "I architect high-performance digital ecosystems and intelligent agents. Specializing in Next.js, Python, and scalable AI infrastructure to deliver software that is fault-tolerant, scalable, and aesthetically absolute.",
  email: "contact@rajai.org",
  github: "https://github.com/rajshah9305",
  linkedin: "https://www.linkedin.com/in/rajshah9305",
  location: "Calgary, Canada",
  website: "https://www.rajai.org",
};

export const SKILLS = [
  { category: "Languages", items: ["TypeScript", "Python", "Rust", "SQL", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Next.js 14", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { category: "Backend & AI", items: ["Node.js", "Django", "FastAPI", "LangChain", "PyTorch", "OpenAI API"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "PostgreSQL", "Vercel", "CI/CD"] },
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
    desc: "Flagship Generative AI platform integrating multi-modal LLMs. Features real-time RAG (Retrieval-Augmented Generation), custom agent workflows, and a brutalist highly-responsive UI.",
    tags: ["NEXT.JS", "PYTHON", "LANGCHAIN", "PINECONE"],
    stat: "10K+ INFERENCES",
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
    title: "AI AGENT ORCHESTRATION PLATFORM",
    desc: "Ultra-fast AI agent management platform with Cerebras integration. Features real-time 3D dashboard via Three.js, multi-framework support (AutoGen, CrewAI, LangGraph), WebSocket live updates, and background job processing with Bull + Redis.",
    tags: ["TYPESCRIPT", "NEXT.JS", "THREE.JS", "CEREBRAS", "REDIS", "WEBSOCKETS"],
    stat: "5 AI FRAMEWORKS",
    links: {
      github: "https://github.com/rajshah9305/AIAgentOrchestrationPlatform",
    },
    icon: "bot",
    featured: true,
  },
  {
    id: "p3",
    number: "03",
    title: "AI APP BUILDER",
    desc: "Enterprise-grade platform that converts natural language into production-ready React apps using Cerebras GPT-OSS-120B. Features real-time streaming, Monaco Editor, AI personalization engine, JWT auth, and one-click Vercel deployment.",
    tags: ["NEXT.JS", "CEREBRAS", "LLAMA-4", "PRISMA", "POSTGRESQL"],
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
    title: "RAJ AI UI COMPONENT ENGINE",
    desc: "Turn plain English into production-ready UI components with five unique design variations instantly. Supports OpenAI, Anthropic, Groq, and any OpenAI-compatible API. Features live iframe preview, code export, and a Three.js GLSL shader background.",
    tags: ["REACT", "TYPESCRIPT", "THREE.JS", "OPENAI API", "VITE"],
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
    title: "CREW AI AGENT PLATFORM",
    desc: "Enterprise-grade AI agent orchestration platform powered by Google Gemini 2.5 Flash. Features drag-and-drop agent management, real-time execution monitoring, rate limiting, and a 100% type-safe TypeScript codebase with PostgreSQL persistence.",
    tags: ["TYPESCRIPT", "REACT", "GEMINI", "POSTGRESQL", "DRIZZLE ORM"],
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
    desc: "Production-ready design system for scientific visualization applications. Redefines portal navigation with scientific-themed UI components, dark/light theming, and a high-performance React + TypeScript component library.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "POSTGRESQL"],
    stat: "FULL DESIGN SYSTEM",
    links: {
      github: "https://github.com/rajshah9305/SciViz-Design-System",
    },
    icon: "layers",
  },
  {
    id: "p7",
    number: "07",
    title: "AGENT ORCHESTRA",
    desc: "Modern, production-ready AI agent orchestration platform with a beautiful web UI. Supports AutoGen, CrewAI, and custom agents with real-time monitoring, visual workflow builder, drag-and-drop interface, and JWT authentication.",
    tags: ["PYTHON", "FLASK", "REACT", "WEBSOCKETS", "TAILWIND CSS"],
    stat: "VISUAL WORKFLOW",
    links: {
      github: "https://github.com/rajshah9305/aIagenter",
    },
    icon: "bot",
  },
  {
    id: "p8",
    number: "08",
    title: "DISTRIBUTED SYSTEMS API",
    desc: "High-throughput microservices architecture built to handle real-time data streaming and processing with sub-millisecond latency.",
    tags: ["RUST", "GRPC", "POSTGRESQL", "KAFKA"],
    stat: "<1MS LATENCY",
    links: {
      github: "https://github.com/rajshah9305/distributed-systems-api",
    },
    icon: "database",
  },
];

export const EXPERIENCE = [
  {
    id: "e1",
    year: "2023 — PRESENT",
    role: "Senior Software Engineer",
    company: "Nexus AI Systems",
    desc: "Led the transition from a monolithic architecture to a microservices ecosystem, improving deployment speed by 40%. Spearheaded enterprise AI integration using LLMs for internal automation pipelines.",
    skills: ["LLMs", "Microservices", "CI/CD", "Python"],
  },
  {
    id: "e2",
    year: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Elevate Digital Labs",
    desc: "Architected and maintained 15+ high-traffic Next.js applications serving millions of global requests. Optimized underlying PostgreSQL queries, effectively reducing core database load times by 60%.",
    skills: ["Next.js", "PostgreSQL", "React", "Node.js"],
  },
  {
    id: "e3",
    year: "2017 — 2021",
    role: "B.S. Computer Science",
    company: "Georgia Institute of Technology",
    desc: "Concentration in Intelligence (AI) and Systems/Architecture. Contributed to open-source distributed computing research and graduated with High Honors.",
    skills: ["AI/ML", "Systems", "Research", "Algorithms"],
  },
];
