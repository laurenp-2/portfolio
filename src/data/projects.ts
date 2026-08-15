export type ProjectLink = {
  label: string;
  href: string;
};

export type ResearchItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  status?: string;
  tags: string[];
  tileHref?: string;
  links: ProjectLink[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  links: ProjectLink[];
};

export const researchItems: ResearchItem[] = [
  {
    id: "failure-propagation",
    title: "FAILURE PROPAGATION IN AGENTIC RAG",
    description:
      "Interventional benchmark, developed at Anote, that injects a certified fault at a chosen retrieval hop and scores diagnosers against the known cause; shows post-hoc coverage signal collapses after faults propagate.",
    details: [
      "AgenticRAG-FP makes causal attribution measurable by introducing a known retrieval fault at one hop of an agentic workflow, then comparing each diagnosis to the certified source of failure.",
      "Across multi-hop traces, exact-hop accuracy fell from 0.91 at the first hop to 0.00 at hops two and three, showing how quickly coverage-based post-hoc attribution breaks down after a fault propagates.",
      "Judge-free answer-outcome labels separate true fault propagation from recovery, so the benchmark can distinguish a wrong answer caused by the injected fault from one the system recovered from.",
    ],
    status: "UNDER REVIEW · EMNLP 2026 WORKSHOP",
    tags: ["agentic rag", "causal failure attribution", "interventional benchmark"],
    links: [],
  },
  {
    id: "rag-faithfulness",
    title: "RETRIEVAL PERTURBATION AS A STRESS TEST FOR RAG FAITHFULNESS",
    description: "Counterfactual benchmark stress-testing LLM behavior under controlled retrieval failure.",
    details: [
      "Designed and released a counterfactual benchmark evaluating RAG system behavior under retrieval failure—corrupting context via entity substitution, factual negation, and paraphrase control.",
      "Evaluated four open-weight LLMs—Llama 3.2:3b, Llama 3.1:8b, Mistral:7b, and Qwen 2.5:7b—across 2,400 SQuAD examples with z-tests, Cohen's h, and Bonferroni correction.",
      "Found that over-abstention, rather than hallucination, is the dominant failure mode; model family predicts abstention calibration more effectively than parameter count.",
      "Introduced a three-archetype taxonomy—context-follower, hallucinator, and over-abstainer—to guide RAG model selection, and open-sourced the benchmark as a locally runnable Ollama-based toolkit with no API keys required.",
    ],
    status: "PUBLICATION · PREPRINT · 2026",
    tags: [
      "2,400 evaluations",
      "four open-weight models",
      "z-tests",
      "cohen's h",
      "bonferroni correction",
    ],
    tileHref: "/Lauren_Pothuru_RAG_Robustness_Research.pdf",
    links: [
      { label: "research pdf", href: "/Lauren_Pothuru_RAG_Robustness_Research.pdf" },
      { label: "github", href: "https://github.com/laurenp-2/rag-faithfulness-bench" },
    ],
  },
  {
    id: "bias-swap-audit",
    title: "BIAS SWAP AUDIT",
    description: "Counterfactual auditing toolkit that isolates model-level bias across six demographic categories.",
    details: [
      "Tests whether pre-trained sentiment models assign different scores to otherwise identical sentences based solely on the identity of the person mentioned.",
      "Generates a swapped-sentence dataset across gender, race, religion, nationality, age, and socioeconomic categories; runs Hugging Face inference; and reports statistical tests alongside visualizations.",
      "The audit surfaced notable score gaps: sentences about atheists scored about 0.4 lower than identical sentences about Christians, while template sensitivity sometimes moved a score across nearly the full [-1, 1] range.",
    ],
    tags: ["six demographic categories", "hugging face", "text classification", "counterfactual auditing"],
    tileHref: "https://github.com/laurenp-2/bias-swap-audit",
    links: [{ label: "github", href: "https://github.com/laurenp-2/bias-swap-audit" }],
  },
];

export const projectItems: ProjectItem[] = [
  {
    id: "ai-credit-analysis-agent",
    title: "AI CREDIT ANALYSIS AGENT",
    description:
      "LangChain agent that validates credit applications and generates risk assessments for a commercial equipment finance lender.",
    details: [
      "Built a LangChain agent for QuickFi that validates credit applications against pulled credit records, produces Low/Medium/High risk assessments, and flags potentially fraudulent documents.",
      "Designed a multi-stage pipeline for PDF, Excel, and OCR document extraction; DSCR, current-ratio, and debt-to-equity calculation; and LLM reasoning over normalized financial data.",
      "Implemented secure, encrypted multi-document uploads with in-memory processing for financial-data handling, then iterated on prompts and risk-tier definitions against healthy, borderline, distressed, and doctored borrower cases.",
    ],
    tags: ["credit risk analysis", "langchain", "document extraction", "financial ratios", "llm reasoning"],
    links: [{ label: "github", href: "https://github.com/laurenp-2/quickfi-credit-analysis" }],
  },
  {
    id: "remneuro-dashboard",
    title: "REMNEURO DASHBOARD",
    description: "Medical dashboard for monitoring neurological health data.",
    details: [
      "A comprehensive medical dashboard for healthcare professionals to monitor and analyze neurological health data.",
      "Integrates multiple data sources to surface real-time patient metrics, trends, and alerts in one place for neurological care teams.",
      "Uses an intuitive interface and advanced analytics to support patient care while making clinical workflows easier to follow.",
    ],
    tags: ["multi-device health data integration", "typescript", "react"],
    links: [
      {
        label: "demo",
        href: "https://drive.google.com/file/d/17dNN3OifGzxDm0afMBGGwWcj-XhCfmTp/view?usp=sharing",
      },
    ],
  },
  {
    id: "cuapts",
    title: "CUAPTS",
    description: "Full-stack off-campus housing platform connecting Cornell students to available housing.",
    details: [
      "Developed and maintained with Cornell Design & Tech Initiative, CUApts connects Cornell students with available off-campus housing.",
      "The platform serves 500+ monthly users and supports 250+ listings, with a TypeScript, Express, and Firestore stack behind the housing experience.",
      "Backend performance work improved API response time by 43%.",
    ],
    tags: ["cornell dti", "500+ monthly users", "250+ listings", "typescript", "express", "firestore"],
    links: [
      { label: "github", href: "https://github.com/cornell-dti/cu-apts" },
      { label: "demo", href: "https://www.cuapts.org/" },
    ],
  },
  {
    id: "bring-the-party",
    title: "BRING THE PARTY",
    description:
      "Retrieval-augmented recommender that generates menu and music suggestions from natural-language dinner party descriptions.",
    details: [
      "Built a retrieval-augmented recommender that responds to descriptions such as “cozy fall dinner for six, jazz lovers, no seafood” with coordinated menu and music suggestions.",
      "Uses SVD-based latent semantic indexing over a TF-IDF matrix to surface thematically relevant recipes and tracks beyond exact keyword matches, then layers an LLM on top to compose coherent menu-and-playlist pairings.",
      "Combines classical information-retrieval techniques with modern generation to balance retrieval interpretability and recommendation fluency; built as a Cornell Information Retrieval class project.",
    ],
    tags: ["cornell ir class project", "python", "svd", "tf-idf", "rag", "llm"],
    links: [{ label: "demo", href: "https://party-swizzle.4300showcase.infosci.cornell.edu/" }],
  },
  {
    id: "facial-analysis-app",
    title: "FACIAL ANALYSIS APP",
    description: "Machine learning-powered face and emotion recognition.",
    details: [
      "A real-time facial recognition and analysis application using FaceAPI for face detection, emotion recognition, and facial-landmark tracking.",
      "Built with a Next.js and React interface, with OpenAI API and PostgreSQL included in the full-stack application architecture.",
    ],
    tags: ["real-time emotion recognition", "next.js", "faceapi", "react", "openai api", "postgresql"],
    links: [
      { label: "github", href: "https://github.com/laurenp-2/facial-recognition-app" },
      { label: "demo", href: "https://facial-recognition-app-bice.vercel.app/" },
    ],
  },
  {
    id: "savorstats",
    title: "SAVORSTATS",
    description: "Social media platform for food enthusiasts to share and explore recipes.",
    details: [
      "A social media site for foodies to upload cooking adventures, see what friends are making, and discover recipes for their next dish.",
      "It brings together at-home cooking inspiration and a place to share the finished result, whether that is a new weeknight recipe or a soufflé worth showing off.",
      "Built as a TypeScript and React experience backed by Firebase.",
    ],
    tags: ["social recipe sharing", "typescript", "react", "firebase"],
    links: [{ label: "github", href: "https://github.com/laurenp-2/savorstats" }],
  },
];
