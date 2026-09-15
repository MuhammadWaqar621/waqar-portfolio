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
  bio: "I've spent the last 7+ years building AI systems that actually make it to production — RAG pipelines, multi-agent workflows, computer vision, you name it. Right now I lead the generative AI and compliance-automation work at Softoo, after running ML teams at Forbmax and Horizon Tech Services before that. I mix local and cloud LLMs (Llama, DeepSeek, Azure OpenAI) depending on what a project actually needs — usually it comes down to keeping data private without blowing up the inference bill.",
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
      "Lead the agentic AI and RAG work here — mostly enterprise automation and decision-support platforms.",
      "Built multi-agent frameworks that can reason through multi-step tasks instead of following a fixed script.",
      "Set up RAG pipelines with semantic search so the knowledge base actually answers questions instead of just storing documents.",
      "Run SQLCoder, Llama, and Code Llama on-premise for clients who can't send data off-site — cuts our inference costs a lot too.",
      "Built the AI audit platform that plans and runs compliance work (BCM, SAMA, ISO) end to end, including risk/control generation and reporting.",
    ],
  },
  {
    company: "Forbmax (pvt) Ltd",
    role: "AI Team Lead — Computer Vision, NLP, Data Science",
    period: "May 2023 – May 2025",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led a small team covering computer vision, NLP, and general ML — set direction and did a lot of the architecture myself.",
      "Rebuilt our model pipelines end to end, which cut about 40% off the time from raw data to a deployed model.",
      "Fine-tuned transformers, YOLO, and vision transformers for whatever the client's data actually looked like — it rarely worked out of the box.",
      "Built an active-learning annotation loop that cut manual labeling work by roughly 70%.",
      "Pushed for proper APIs and microservices instead of one-off scripts, so models could actually plug into other products.",
    ],
  },
  {
    company: "Horizon Tech Services",
    role: "Sr. AI Engineer",
    period: "Jun 2020 – Apr 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Owned ML projects start to finish and mentored a small team through data collection, training, and deployment.",
      "Built preprocessing pipelines that made feature extraction and augmentation a lot less manual.",
      "Spent a good chunk of time on object detection fine-tuning — better recognition and tracking accuracy.",
    ],
  },
  {
    company: "Lampro Mellon IT Solutions Pvt. Ltd",
    role: "Python Developer",
    period: "Aug 2019 – May 2020",
    location: "Lahore, Pakistan",
    bullets: [
      "Worked on software components early in my career, mostly around verification and design.",
      "Wrote automated verification scripts so testing didn't have to be done by hand every time.",
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
    name: "Enterprise Compliance AI Agent Platform",
    period: "Sep 2026",
    stack: ["Agentic AI", "LangGraph", "Risk & Control Automation", "SAMA / ISO / BCM"],
    description:
      "An AI audit platform covering BCM, SAMA, and ISO compliance work, including maturity assessments. It plans and runs the whole audit — generates the risk and control matrix, runs the actual control tests, and writes the report — using a mix of local and cloud LLMs so auditors can trace every decision back to where it came from.",
  },
  {
    name: "Private Data Assistant — Text-to-SQL over Live Databases",
    period: "Jun 2026",
    stack: ["Text-to-SQL", "Multi-DB Adapters", "Read-only SQL Guard", "Fernet Encryption"],
    description:
      "Lets you ask your own database questions in plain English — works with Postgres, MySQL, SQL Server, SQLite, or MongoDB. It figures out which tables matter, writes the query, runs it, and can chart the result. The part I spent the most time on was making sure it can only ever read: five separate layers of guardrails (blocked keywords, forced rollbacks, timeouts, row caps) stop it from writing anything.",
  },
  {
    name: "Private Document Assistant — Agentic RAG Chatbot",
    period: "Mar 2026",
    stack: ["Agentic RAG", "Azure OpenAI", "SSE Streaming", "Multi-tenant Isolation"],
    description:
      "A private chatbot for your own documents — PDFs, DOCX, even scanned images via OCR. Every user and every chat is fully isolated from the others. The model decides for itself whether it needs to go dig through your documents, so it doesn't awkwardly refuse to just say hi back. Answers stream in as they're generated.",
  },
  {
    name: "Private Voice Assistant — Real-time AI Phone Helpline",
    period: "Dec 2025",
    stack: ["Twilio Voice", "Whisper STT", "Orpheus TTS", "Real-time Voice AI"],
    description:
      "An AI phone helpline you can set up for any business on the fly — works over a real phone call through Twilio or a hold-to-talk demo in the browser, same pipeline underneath (Groq for speech-to-text, the LLM, then text-to-speech). Got the round trip down to 2–2.7 seconds by warming up connections ahead of time and caching greetings. It also picks up the caller's language from their speech and responds in kind.",
  },
  {
    name: "WellB — AI-Powered Hotel Management System",
    period: "Feb 2025",
    stack: ["RAG", "Llama", "OpenAI"],
    description:
      "A hotel management chatbot that mixes local Llama/DeepSeek models with OpenAI's GPT — handles booking changes in plain language, flags emergencies by priority, and manages contacts automatically.",
  },
  {
    name: "IntelliReport — AI-Powered Report Generation",
    period: "Sep 2024",
    stack: ["BERT", "Text Summarization", "Topic Extraction", "FastAPI"],
    description:
      "Takes long reports, pulls out the topics, and summarizes each one separately using BERT plus a mix of extractive and abstractive techniques. It also highlights the important parts on its own. Built as an API so it can chew through documents in batches.",
  },
  {
    name: "Smart Media Monitoring Application",
    period: "Aug 2023",
    stack: ["Speech-to-Text", "Facial Recognition", "Multi-language OCR"],
    description:
      "A media monitoring pipeline that transcribes speech, reads sentiment, summarizes content, models topics, recognizes faces, and does OCR across Urdu, English, and Arabic — all pulled together as one system instead of a bunch of separate tools.",
  },
  {
    name: "Smart Surveillance System",
    period: "Dec 2022",
    stack: ["Object Detection", "ANPR", "Geofencing"],
    description:
      "Real-time monitoring across live and IP camera feeds — object detection, number-plate recognition, geofencing, and video summarization so reviewing footage doesn't eat up your whole day.",
  },
  {
    name: "AAQAB — Satellite Imagery Intelligence",
    period: "Feb 2022",
    stack: ["YOLO", "SAHI", "Distributed GPU Processing"],
    description:
      "Object detection over high-resolution satellite imagery using YOLO and ResNet. Had to split the images across GPUs just to make it tractable, and automated the whole PRSS analysis workflow on top of that.",
  },
];

export const education = {
  school: "University of Engineering and Technology (UET), Taxila",
  degree: "B.Sc. in Computer Engineering",
  period: "Oct 2015 – Aug 2019",
};
