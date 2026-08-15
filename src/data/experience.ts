export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  date: string;
  bullets: string[];
  tags: string[];
};

export type ExperienceGroup = {
  id: string;
  label: string;
  items: ExperienceItem[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "education",
    label: "Education",
    items: [
      {
        id: "cornell-university",
        organization: "Cornell University",
        role: "",
        date: "AUG 2024 - MAY 2028",
        bullets: [
          "Bachelor of Arts in Computer Science with a minor in Linguistics.",
          "Relevant coursework: Data Structures, Algorithmic Analysis, Web Development, Machine Learning, and Systems Programming.",
          "GPA: 3.6 / 4.0.",
        ],
        tags: [],
      },
    ],
  },
  {
    id: "work-experience",
    label: "Work Experience",
    items: [
      {
        id: "junior-ai",
        organization: "Junior AI",
        role: "Software Engineer Intern",
        date: "JUN 2026 - AUG 2026",
        bullets: [
          "Built and deployed an IAM-protected online-evaluation service that sampled roughly 1% of live interview calls, ran LLM judges, and surfaced flagged transcripts in a custom React UI.",
          "Evaluated STT transcription providers, updating the transcription pipeline to improve precision, recall, and entity and number accuracy by 5-17%.",
          "Built entity boosting for domain terms and traced a rollout recall regression to added paraphrasing and sanitization rather than model quality.",
          "Shipped React Native and Rust desktop-app features including live diarization, speaker naming, an in-call assistant, call trimming, and a transcript-citing RAG assistant.",
        ],
        tags: ["full stack", "llm evaling", "systems design", "typescript / rust / react"],
      },
      {
        id: "anote-ai",
        organization: "Anote AI",
        role: "AI Research Fellow",
        date: "JUN 2026 - AUG 2026",
        bullets: [
          "Built AgenticRAG-FP, an interventional benchmark for causal failure attribution in agentic RAG with certified retrieval faults.",
          "Showed coverage-based post-hoc attribution collapses after fault propagation, with exact-hop accuracy falling from 0.91 at hop one to 0.00 at hops two and three.",
          "Added judge-free answer-outcome labels to distinguish fault propagation from recovery.",
        ],
        tags: ["agentic rag", "benchmarking", "causal evaluation", "llm research"],
      },
      {
        id: "cornell-bowers",
        organization: "Cornell Bowers",
        role: "Teaching Assistant",
        date: "AUG 2025 - PRESENT",
        bullets: [
          "Support 260+ students in algorithm design, runtime analysis, and correctness proofs.",
          "Co-lead weekly sections and write and grade problem sets focused on proof technique.",
        ],
        tags: ["algorithms", "proofs", "teaching", "technical communication"],
      },
    ],
  },
  {
    id: "contract-work",
    label: "Contract Work",
    items: [
      {
        id: "investmint",
        organization: "InvestMint Inc.",
        role: "Software Engineer Intern",
        date: "DEC 2025 - PRESENT",
        bullets: [
          "Built AWS-based ML infrastructure ingesting 10+ financial data sources for cash-flow forecasting for small and mid-sized businesses.",
          "Cut infrastructure costs by about $1K per month through a targeted vendor migration.",
        ],
        tags: ["aws", "ml infrastructure", "financial data", "forecasting"],
      },
      {
        id: "quickfi",
        organization: "QuickFi",
        role: "Software Engineer",
        date: "JAN 2026 - MAY 2026",
        bullets: [
          "Built a LangChain credit-analysis agent that validates commercial equipment-finance applications against pulled records.",
          "Implemented document extraction, financial-ratio calculations, and LLM reasoning over normalized data to produce risk assessments and flag fraudulent documents.",
        ],
        tags: ["langchain", "credit risk", "document extraction", "llm agents"],
      },
      {
        id: "remneuro",
        organization: "RemNeuro",
        role: "Software Engineer",
        date: "DATES NOT LISTED",
        bullets: [
          "Built a medical dashboard for healthcare professionals to monitor and analyze neurological health data.",
          "Integrated multiple data sources to surface patient health metrics, trends, alerts, and real-time insights.",
        ],
        tags: ["health tech", "typescript", "react", "data dashboards"],
      },
      {
        id: "singularity-softworks",
        organization: "Singularity Softworks",
        role: "Software Engineer Intern",
        date: "MAY 2025 - AUG 2025",
        bullets: [
          "Integrated GPT-4, Claude, Whisper, and Vercel AI SDK into three production applications serving 2,000+ global users.",
          "Reduced contract review time by 90%, from hours to minutes, through automated AI-driven analysis.",
          "Built a real-time interview simulator with 90-second video processing using speech-to-text and generative models.",
        ],
        tags: ["generative ai", "speech to text", "production systems", "vercel ai sdk"],
      },
    ],
  },
];
