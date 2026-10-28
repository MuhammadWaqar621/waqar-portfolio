export const profile = {
  name: "Muhammad Waqar",
  title: "AI Lead Engineer",
  tagline: "Generative AI · RAG Systems · AI Agents",
  location: "Islamabad, Pakistan",
  relocation: "Open to relocation",
  email: "waqarsahi621@gmail.com",
  phone: "+92 308 6715563",
  github: "https://github.com/MuhammadWaqar621",
  linkedin: "https://www.linkedin.com/in/muhammadwaqar-ai/",
  whatsapp: "https://wa.me/923086715563",
  bio: "AI Lead Engineer with 7+ years of experience taking machine learning and generative AI systems from prototype to production. I lead agentic AI and RAG development at Softoo, including an LLM-driven audit platform for SAMA, ISO and BCM compliance, after leading ML teams at Forbmax and Horizon Tech Services. I build multi-agent workflows, RAG and text-to-SQL systems, and hybrid deployments that pair on-premise open-source LLMs with Azure OpenAI, so data-sensitive clients keep their data private at a sensible inference cost.",
  summary: "AI Lead Engineer with 7+ years shipping production ML and generative AI systems: agentic RAG, multi-agent orchestration, text-to-SQL and on-premise LLMs.",
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
      "AWS Bedrock",
      "Groq",
      "Open-Source LLMs (Llama, Mistral, DeepSeek)",
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
      "AWS SageMaker",
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
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Text-to-SQL",
      "SQLAlchemy",
      "Alembic Migrations",
    ],
  },
  {
    label: "Full-Stack & DevOps",
    items: [
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
      "AWS Lambda",
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
      "Lead agentic AI and RAG development for enterprise automation and decision-support platforms, owning the architecture from design through production.",
      "Architected multi-agent workflows with LangGraph and LangChain that plan and execute multi-step tasks through tool calling, replacing fixed, rule-based pipelines.",
      "Built RAG pipelines with vector databases and semantic search that ground LLM answers in enterprise knowledge bases and cite their sources.",
      "Deployed SQLCoder, Llama and Code Llama on-premise for clients whose data cannot leave their network, keeping data private and lowering inference cost compared with hosted APIs.",
      "Led development of the AI audit platform for BCM, SAMA and ISO compliance, covering risk and control generation, control testing and audit reporting.",
      "Mentor junior engineers and set team practices for agent development and model governance in production.",
    ],
  },
  {
    company: "Forbmax (Pvt) Ltd",
    role: "AI Team Lead — Computer Vision, NLP, Data Science",
    period: "May 2023 – May 2025",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led a team of machine learning engineers across computer vision, NLP and data science, setting technical direction and owning core system architecture.",
      "Rebuilt end-to-end model pipelines (preprocessing, training, deployment) around automated workflows, improving operational efficiency by 40%.",
      "Fine-tuned transformer, YOLO and vision transformer models with transfer learning to reach target accuracy on client-specific datasets.",
      "Built an active-learning annotation system that reduced manual labelling effort by 70% while keeping label quality consistent.",
      "Moved model delivery from one-off scripts to APIs and microservices, so models integrate cleanly with external products and platforms.",
    ],
  },
  {
    company: "Horizon Tech Services",
    role: "Senior AI Engineer",
    period: "Jun 2020 – Apr 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Owned ML projects end to end (data collection, preprocessing, training, deployment) and mentored a team of engineers through each stage.",
      "Built preprocessing pipelines that automated feature extraction and data augmentation, improving model performance and cutting manual data work.",
      "Led fine-tuning of object detection and tracking models for production applications, improving recognition and tracking accuracy.",
    ],
  },
  {
    company: "Lampro Mellon IT Solutions (Pvt) Ltd",
    role: "Python Developer",
    period: "Aug 2019 – May 2020",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed Python software components with a focus on verification and high-level design.",
      "Implemented algorithms and data-processing modules, and wrote automated verification scripts to replace manual testing.",
    ],
  },
];

export type Project = {
  name: string;
  period: string;
  stack: string[];
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Enterprise Compliance AI Agent Platform (Softoo)",
    liveUrl: "https://yanipro.ai/",
    period: "Sep 2026",
    stack: ["Agentic AI", "LangGraph", "RAG", "Risk & Control Automation", "SAMA / ISO / BCM"],
    description:
      "Led the design of an agentic AI audit platform for BCM, SAMA and ISO compliance, including maturity assessments. A LangGraph workflow plans the engagement, generates the risk and control matrix, runs control tests and writes an audit-ready report. Self-hosted models (Llama, DeepSeek) process sensitive data, Azure OpenAI handles generation where policy allows, and guardrails plus audit logging let auditors trace every finding back to its source document.",
  },
  {
    name: "ActPilot — AI Browser Agent",
    period: "Aug 2026",
    stack: ["Chrome Extension (MV3)", "Azure OpenAI (Vision)", "Groq Fallback", "FastAPI"],
    repoUrl: "https://github.com/MuhammadWaqar621/actpilot",
    liveUrl: "https://microsoftedge.microsoft.com/addons/detail/actpilot/kbaigcjodbggmfampikpgmopjojkomid",
    liveLabel: "Get the extension",
    description:
      "A Chrome/Edge extension (Manifest V3) that reads a page's visible text and a screenshot, then performs real actions from natural-language requests: filling fields, clicking and opening links. The backend returns one structured JSON response limited to a closed set of actions on elements the model was actually given, which prevents hallucinated targets. A hard safety rule lets it fill forms but never submit, pay, delete or send without explicit instruction. Runs on Azure OpenAI's vision model with automatic fallback to Groq on rate limits, and supports chart generation and PDF export. Published on the Microsoft Edge Add-ons store.",
  },
  {
    name: "Private Knowledge Assistant — AI over Documents, Websites & Databases",
    repoUrl: "https://github.com/MuhammadWaqar621/private-knowledge-assistant",
    liveUrl: "https://knowledgeassistant-ai.vercel.app",
    period: "Jan – Oct 2026",
    stack: ["Agentic RAG", "Text-to-SQL", "Web RAG", "Read-only SQL Guard", "Azure OpenAI"],
    description:
      "A private AI assistant that answers questions from a user's documents (PDF, DOCX, TXT, scanned images), website pages and live databases (PostgreSQL, MySQL, SQL Server, SQLite, MongoDB) in one conversation. A tool-calling agent decides per question whether to search documents, query a database, do both, or simply reply. Every answer cites its source (document page, URL or executed query), and query results render as charts. A five-layer read-only guard (keyword blocking, forced rollback, timeouts, row caps) and encrypted credentials ensure databases can only be read, with per-user data isolation at the vector-store layer.",
  },
  {
    name: "Private Voice Assistant — Real-time AI Phone Helpline",
    repoUrl: "https://github.com/MuhammadWaqar621/private-voice-assistant",
    liveUrl: "https://voiceassistant-ai.vercel.app",
    period: "Aug 2025",
    stack: ["Twilio Voice", "Whisper STT", "Orpheus TTS", "Real-time Voice AI"],
    description:
      "A runtime-configurable AI voice helpline for any business, reachable by real phone calls (Twilio) or a browser hold-to-talk demo, both sharing one Groq-powered pipeline (speech-to-text, LLM, text-to-speech). Connection warm-up and cached greetings bring a full conversational turn down to 2–2.7 seconds. It detects the caller's language from speech and replies in that language, and uses HTTP polling instead of WebSocket media streams so it runs on serverless infrastructure.",
  },
  {
    name: "WellB — AI-Powered Hotel Management System",
    period: "Feb 2025",
    stack: ["RAG", "Llama", "OpenAI"],
    description:
      "A hotel assistant built on a RAG pipeline that combines locally deployed Llama and DeepSeek models with OpenAI GPT. It manages bookings in natural language, including edits with conflict detection and automated rescheduling, classifies emergency alerts by priority, and extracts contacts with a local model to keep guest data private.",
  },
  {
    name: "IntelliReport — AI-Powered Report Generation",
    period: "Sep 2024",
    stack: ["BERT", "Text Summarization", "Topic Extraction", "FastAPI"],
    description:
      "A report-generation system that corrects text, extracts topics and summarises each one using BERT-based models with combined extractive and abstractive techniques. Reports render as Markdown/HTML with PDF download, and a FastAPI service handles batch processing with real-time progress tracking for large documents.",
  },
  {
    name: "Smart Media Monitoring Application",
    period: "Aug 2023",
    stack: ["Speech-to-Text", "Facial Recognition", "Multi-language OCR"],
    description:
      "Led a media monitoring system that combines speech-to-text, sentiment analysis, summarisation, topic modelling, facial recognition and OCR in one pipeline, with support for Urdu, English and Arabic across audio, PDFs, images and tables.",
  },
  {
    name: "Smart Surveillance System",
    period: "Dec 2022",
    stack: ["Object Detection", "ANPR", "Geofencing"],
    description:
      "Led AI modules for security monitoring over live and IP camera streams: low-latency object detection and tracking, automatic number plate recognition with multi-language support, and geofencing for automated area monitoring.",
  },
  {
    name: "AAQAB — Satellite Imagery Intelligence",
    period: "Feb 2022",
    stack: ["YOLO", "SAHI", "Distributed GPU Processing"],
    description:
      "Led object detection on high-resolution satellite imagery using YOLO and ResNet. Large images are tiled by latitude and longitude and processed across GPUs, and SAHI sliding-window inference improves detection and counting accuracy on small objects.",
  },
];

export const education = {
  school: "University of Engineering and Technology (UET), Taxila",
  degree: "B.Sc. in Computer Engineering",
  period: "Oct 2015 – Aug 2019",
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  date: string;
  doi: string;
  url: string;
  summary: string;
};

export const publications: Publication[] = [
  {
    title: "Meter Digit Recognition Via Faster R-CNN",
    authors: "Muhammad Waqar, M. Waris, et al., M. Yousaf",
    venue: "IEEE International Conference on Robotics and Automation in Industry (ICRAI)",
    date: "Oct 2019",
    doi: "10.1109/ICRAI47710.2019.8967357",
    url: "https://www.semanticscholar.org/paper/e04f83359dc0ebe44c124146d2879853ab0666be",
    summary:
      "Developed from my final-year project: a Faster R-CNN approach for reading digits on electricity meters that remains accurate under poor lighting, perspective distortion, blur and varying meter scales.",
  },
];
