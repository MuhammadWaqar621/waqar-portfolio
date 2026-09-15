export const profile = {
  name: "Muhammad Waqar",
  title: "AI Lead Engineer",
  tagline: "Generative AI · RAG Systems · AI Agents",
  location: "Islamabad, Pakistan",
  email: "waqarsahi621@gmail.com",
  phone: "+92 308 6715563",
  github: "https://github.com/MuhammadWaqar621",
  linkedin: "https://www.linkedin.com/in/muhammad-waqar-1a594411a/",
  whatsapp: "https://wa.me/923086715563",
  bio: "AI Lead Engineer with 7+ years building production AI systems — from agentic RAG pipelines and multi-agent orchestration to computer vision and NLP at scale. Currently leading generative AI and compliance-automation platforms at Softoo, after leading ML teams at Forbmax and Horizon Tech Services. Specialized in hybrid local/cloud LLM architectures (Llama, DeepSeek, Azure OpenAI) for secure, cost-efficient enterprise deployment.",
};

export const skillGroups = [
  {
    label: "Generative AI & Agents",
    items: [
      "LLM Orchestration",
      "Agentic Tool-Calling",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "OpenAI SDK",
      "Azure OpenAI",
      "GCP / Vertex AI",
      "Groq",
      "On-Prem LLM Hosting",
    ],
  },
  {
    label: "ML & Computer Vision",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "YOLO",
      "scikit-learn",
      "Keras",
      "OpenCV",
    ],
  },
  {
    label: "Voice & Speech AI",
    items: [
      "Groq Whisper STT",
      "Azure Speech",
      "Text-to-Speech",
      "SeamlessM4T (Meta)",
      "Twilio Voice",
      "Real-time Audio Pipelines",
    ],
  },
  {
    label: "Data & Retrieval",
    items: [
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Text-to-SQL",
      "Vector Search",
    ],
  },
  {
    label: "Full-Stack & DevOps",
    items: [
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
      "JWT Auth",
      "CI/CD (pytest/vitest)",
      "Vercel",
      "Git",
    ],
  },
  {
    label: "Leadership & Practice",
    items: [
      "Team Leadership",
      "System Architecture",
      "Security Engineering",
      "Mentorship",
      "Test-Driven Development",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Softoo",
    role: "AI Lead Engineer — Generative AI, RAG Systems, AI Agents",
    period: "May 2025 – Present",
    location: "Islamabad, Pakistan",
    bullets: [
      "Leading agentic AI and RAG pipeline development for intelligent enterprise automation and decision-making platforms.",
      "Architecting multi-agent frameworks with autonomous reasoning for complex task orchestration.",
      "Designing RAG architectures with vector databases and semantic search for enterprise knowledge retrieval.",
      "Deploying local LLMs (SQLCoder, Llama, Code Llama) for secure, on-premise AI with reduced inference cost.",
      "Building AI-powered audit systems for automated compliance checking and risk assessment.",
    ],
  },
  {
    company: "Forbmax (pvt) Ltd",
    role: "AI Team Lead — Computer Vision, NLP, Data Science",
    period: "May 2023 – May 2025",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led a team of ML professionals across multiple AI domains, driving strategic and technical direction.",
      "Built end-to-end model pipelines, improving operational efficiency by 40% through automated workflows.",
      "Fine-tuned transformer, YOLO, and vision-transformer models for domain-specific performance gains.",
      "Automated annotation with active-learning systems, cutting manual labeling effort by 70%.",
      "Championed API and microservices architecture for scalable AI product integration.",
    ],
  },
  {
    company: "Horizon Tech Services",
    role: "Sr. AI Engineer",
    period: "Jun 2020 – Apr 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led end-to-end ML projects, mentoring a team through data creation, training, and deployment.",
      "Designed data preprocessing pipelines optimizing feature extraction and augmentation.",
      "Focused fine-tuning efforts on object detection, improving recognition and tracking accuracy.",
    ],
  },
  {
    company: "Lampro Mellon IT Solutions Pvt. Ltd",
    role: "Python Developer",
    period: "Aug 2019 – May 2020",
    location: "Lahore, Pakistan",
    bullets: [
      "Contributed to software components with a focus on verification and high-level design.",
      "Built automated verification scripts to streamline testing and validation.",
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    name: "Private Data Assistant — Text-to-SQL over Live Databases",
    period: "Sep 2026",
    stack: ["Text-to-SQL", "Multi-DB Adapters", "Read-only SQL Guard", "pgvector"],
    description:
      "Natural-language querying over a user's own live database (Postgres, MySQL, SQL Server, SQLite, or MongoDB) — retrieves relevant tables via schema-aware RAG, generates the query, and answers with an optional chart. A five-layer, per-engine read-only guard (keyword blocking, forced rollback, timeouts, row caps) keeps execution safe.",
  },
  {
    name: "Private Document Assistant — Agentic RAG Chatbot",
    period: "Sep 2026",
    stack: ["Agentic RAG", "pgvector", "Azure OpenAI", "Multi-tenant Isolation"],
    description:
      "Private RAG chatbot over a user's own documents (PDF/DOCX/scanned images with OCR fallback), with strict per-user and per-chat vector isolation. The model decides per-turn whether to call a retrieval tool rather than always grounding, avoiding spurious refusals on plain greetings; responses stream via SSE.",
  },
  {
    name: "Private Voice Assistant — Real-time AI Phone Helpline",
    period: "Sep 2026",
    stack: ["Twilio Voice", "Whisper STT", "Orpheus TTS", "Real-time Voice AI"],
    description:
      "Runtime-configurable AI voice helpline reachable by phone (Twilio) or browser hold-to-talk demo, sharing one Groq-powered STT → LLM → TTS pipeline. Tuned to a 2–2.7s full turn latency via connection warm-up and cached greetings, with caller language auto-detected from speech to adapt responses.",
  },
  {
    name: "Enterprise Compliance AI Agent Platform",
    period: "Nov 2025",
    stack: ["Agentic AI", "RAG", "LangChain", "LangGraph"],
    description:
      "Multi-agent platform automating compliance checks across policies, contracts, and logs, with a production-grade RAG pipeline and hybrid local/cloud LLMs, plus guardrails and full decision traceability for auditors.",
  },
  {
    name: "WellB — AI-Powered Hotel Management System",
    period: "Feb 2025",
    stack: ["RAG", "Llama", "OpenAI"],
    description:
      "AI chatbot combining local Llama/DeepSeek models with OpenAI GPT for natural-language booking management, emergency alerts with priority classification, and AI-driven contact management.",
  },
  {
    name: "IntelliReport — AI-Powered Report Generation",
    period: "Sep 2024",
    stack: ["Python", "NLP", "Transformers", "FastAPI"],
    description:
      "BERT-based topic extraction and extractive/abstractive summarization system with topic-wise summaries, smart highlighting, and a scalable API supporting batch processing.",
  },
  {
    name: "Smart Media Monitoring Application",
    period: "Aug 2023",
    stack: ["Python", "PyTorch"],
    description:
      "Multi-model media monitoring pipeline covering speech-to-text, sentiment analysis, summarization, topic modeling, facial recognition, and multi-language OCR for Urdu, English, and Arabic.",
  },
  {
    name: "Smart Surveillance System",
    period: "Dec 2022",
    stack: ["Python", "PyTorch", "TensorFlow"],
    description:
      "Real-time security monitoring across live and IP camera streams — object detection, ANPR, geofencing, and video summarization for efficient footage review.",
  },
  {
    name: "AAQAB — Satellite Imagery Intelligence",
    period: "Feb 2022",
    stack: ["Python", "YOLO", "PyTorch"],
    description:
      "YOLO/ResNet-based object detection pipeline for high-resolution satellite imagery, with distributed large-image processing and automated PRSS analysis workflows.",
  },
];

export const education = {
  school: "University of Engineering and Technology (UET), Taxila",
  degree: "B.Sc. in Computer Engineering",
  period: "Oct 2015 – Aug 2019",
};
