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
  bio: "I've spent 7+ years building machine learning and generative AI systems that run in production. At Softoo I lead the agentic AI and RAG work, including an audit platform that automates SAMA, ISO and BCM compliance reviews. Before that I led ML teams at Forbmax and Horizon Tech Services, mostly on computer vision and NLP. These days my work is multi-agent workflows, RAG, text-to-SQL, and running open-source LLMs on-premise next to Azure OpenAI for clients who can't send their data to the cloud.",
  summary: "AI engineer with 7+ years building production ML and generative AI systems: agentic RAG, multi-agent workflows, text-to-SQL and on-premise LLMs.",
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
      "Lead the technical side of our agentic AI and RAG products for enterprise automation, from architecture through to production releases.",
      "Designed multi-agent workflows in LangGraph and LangChain where agents plan multi-step tasks and call tools, instead of following hard-coded rule pipelines.",
      "Built RAG pipelines (vector database + semantic search) that answer from the client's own knowledge base and show the source behind each answer.",
      "Run SQLCoder, Llama and Code Llama on-premise for clients whose data can't leave their network. This also brought inference costs down compared to paying for hosted APIs.",
      "Led the build of our AI audit platform for BCM, SAMA and ISO: risk and control generation, control testing and the final audit report.",
      "Mentor the junior engineers and set up how the team builds and governs agents in production.",
    ],
  },
  {
    company: "Forbmax (Pvt) Ltd",
    role: "AI Team Lead — Computer Vision, NLP, Data Science",
    period: "May 2023 – May 2025",
    location: "Islamabad, Pakistan",
    bullets: [
      "Led a team of ML engineers working across computer vision, NLP and data science. Set the technical direction and did most of the core architecture myself.",
      "Rebuilt our model pipelines end to end (preprocessing, training, deployment) with automated workflows, which made the team about 40% more efficient.",
      "Fine-tuned transformers, YOLO and vision transformers on client data with transfer learning, since off-the-shelf models rarely reached the accuracy clients needed.",
      "Built an active-learning annotation tool that cut manual labelling by 70% without hurting label quality.",
      "Pushed the team to ship models as APIs and microservices instead of one-off scripts, which made them much easier to plug into other products.",
    ],
  },
  {
    company: "Horizon Tech Services",
    role: "Senior AI Engineer",
    period: "Jun 2020 – Apr 2023",
    location: "Islamabad, Pakistan",
    bullets: [
      "Ran ML projects from data collection through to deployment and mentored the engineers on the team.",
      "Built preprocessing pipelines that automated feature extraction and data augmentation, which improved model results and saved a lot of manual data work.",
      "Spent much of my time fine-tuning object detection and tracking models for production use, improving recognition and tracking accuracy.",
    ],
  },
  {
    company: "Lampro Mellon IT Solutions (Pvt) Ltd",
    role: "Python Developer",
    period: "Aug 2019 – May 2020",
    location: "Lahore, Pakistan",
    bullets: [
      "Wrote Python software components, mainly around verification and high-level design.",
      "Implemented algorithms and data-processing modules, and wrote scripts to automate verification that was previously done by hand.",
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
      "I led the design of this agentic audit platform for BCM, SAMA and ISO compliance, including maturity assessments. The LangGraph workflow covers the whole audit: planning the engagement, building the risk and control matrix, running control tests and writing the report. Sensitive data stays with self-hosted Llama and DeepSeek models, and Azure OpenAI is only used where the client's policy allows it. Auditors can follow any finding back to the document it came from.",
  },
  {
    name: "ActPilot — AI Browser Agent",
    period: "Jul 2026",
    stack: ["Chrome Extension (MV3)", "Azure OpenAI (Vision)", "Groq Fallback", "FastAPI"],
    repoUrl: "https://github.com/MuhammadWaqar621/actpilot",
    liveUrl: "https://microsoftedge.microsoft.com/addons/detail/actpilot/kbaigcjodbggmfampikpgmopjojkomid",
    liveLabel: "Get the extension",
    description:
      "A Chrome/Edge extension that reads the page text plus a screenshot, then actually does things on the page, like filling fields, clicking buttons and opening links, based on what you type. The model can only choose from a fixed set of actions on elements it was shown, so it can't invent buttons that don't exist. It will fill in a form but won't submit, pay, delete or send anything unless you explicitly ask. Runs on Azure OpenAI's vision model and switches to Groq when Azure hits rate limits. It can also draw charts and export chats as PDFs. Published on the Microsoft Edge Add-ons store.",
  },
  {
    name: "Private Knowledge Assistant — AI over Documents, Websites & Databases",
    repoUrl: "https://github.com/MuhammadWaqar621/private-knowledge-assistant",
    liveUrl: "https://knowledgeassistant-ai.vercel.app",
    period: "Apr 2026",
    stack: ["Agentic RAG", "Text-to-SQL", "Web RAG", "Read-only SQL Guard", "Azure OpenAI"],
    description:
      "A private assistant that answers from your own documents (PDF, DOCX, TXT, scanned images), web pages and live databases (PostgreSQL, MySQL, SQL Server, SQLite, MongoDB) in the same chat. For each question, a tool-calling agent decides whether to search documents, query a database, do both, or just reply. Answers cite the exact source (page, URL or the SQL that ran), and query results can be shown as charts. Databases are strictly read-only, with five layers of checks (blocked keywords, forced rollback, timeouts, row limits) and encrypted credentials, and every user's data is kept separate.",
  },
  {
    name: "Private Voice Assistant — Real-time AI Phone Helpline",
    repoUrl: "https://github.com/MuhammadWaqar621/private-voice-assistant",
    liveUrl: "https://voiceassistant-ai.vercel.app",
    period: "Aug 2025",
    stack: ["Twilio Voice", "Whisper STT", "Orpheus TTS", "Real-time Voice AI"],
    description:
      "An AI phone helpline that any business can configure at runtime. It works on real calls through Twilio and in a browser hold-to-talk demo, both on the same Groq pipeline (speech-to-text, LLM, text-to-speech). I got a full turn down to 2–2.7 seconds by warming up connections and caching greetings. It picks up the caller's language from their speech and answers in it, and uses HTTP polling instead of WebSockets so the whole thing runs serverless.",
  },
  {
    name: "WellB — AI-Powered Hotel Management System",
    period: "Feb 2025",
    stack: ["RAG", "Llama", "OpenAI"],
    description:
      "A hotel assistant built on RAG, using local Llama and DeepSeek models alongside OpenAI GPT. Users can book or change bookings in plain language, and it checks for conflicts and reschedules on its own. It also sends emergency alerts ranked by priority, and a local Llama model handles contact details so guest data stays on our own servers.",
  },
  {
    name: "IntelliReport — AI-Powered Report Generation",
    period: "Sep 2024",
    stack: ["BERT", "Text Summarization", "Topic Extraction", "FastAPI"],
    description:
      "A report generator that cleans up text, pulls out the main topics and summarises each one with BERT-based models, mixing extractive and abstractive summaries so they stay short without dropping key points. It outputs HTML or a downloadable PDF and runs as a FastAPI service with batch jobs and live progress for long documents.",
  },
  {
    name: "Smart Media Monitoring Application",
    period: "Aug 2023",
    stack: ["Speech-to-Text", "Facial Recognition", "Multi-language OCR"],
    description:
      "I led this media monitoring system, which brings speech-to-text, sentiment analysis, summaries, topic modelling, face recognition and OCR together in one pipeline. It works with Urdu and English, and the OCR also reads Arabic from PDFs, images and tables.",
  },
  {
    name: "Smart Surveillance System",
    period: "Dec 2022",
    stack: ["Object Detection", "ANPR", "Geofencing"],
    description:
      "I led the AI side of this security system running on live and IP camera streams: real-time object detection and tracking, number plate recognition for plates in more than one language, and geofencing to watch specific areas automatically.",
  },
  {
    name: "AAQAB — Satellite Imagery Intelligence",
    period: "Feb 2022",
    stack: ["YOLO", "SAHI", "Distributed GPU Processing"],
    description:
      "Object detection on high-resolution satellite images using YOLO and ResNet. The images were too large to process whole, so we tiled them by latitude and longitude and spread the work across GPUs. SAHI sliding-window inference clearly improved detection and counting of small objects.",
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
      "This came out of my final-year project. It uses Faster R-CNN to read digits on electricity meters and stays accurate with poor lighting, odd camera angles, blur and different meter sizes.",
  },
];
