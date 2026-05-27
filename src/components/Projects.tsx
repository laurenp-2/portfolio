import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  Code,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Retrieval Perturbation: Stress-Testing RAG Faithfulness",
      category: "AI Research",
      description:
        "Counterfactual benchmark for evaluating how RAG systems behave when retrieval fails.",
      longDescription:
        "Designed and released a counterfactual benchmark evaluating RAG system behavior under retrieval failure—corrupting context via entity substitution, factual negation, and paraphrase (control). Evaluated 4 open-weight LLMs (Llama 3.2:3b, Llama 3.1:8b, Mistral:7b, Qwen 2.5:7b) across 2,400 SQuAD examples with full significance testing (z-tests, Cohen's h, Bonferroni correction). Found the dominant failure mode is over-abstention rather than hallucination, and that model family predicts abstention calibration better than parameter count. Introduced a 3-archetype failure taxonomy (context-follower, hallucinator, over-abstainer) to guide RAG model selection. Open-sourced as a locally-runnable toolkit requiring no API keys (Ollama-based inference).",
      tech: ["Python", "Ollama", "LLaMA", "Mistral", "Qwen", "SciPy"],
      github: "https://github.com/laurenp-2/rag-faithfulness-bench",
      demo: "/Lauren_Pothuru_RAG_Robustness_Research.pdf",
      color: "from-indigo-500 to-indigo-600",
      highlight: "2,400 SQuAD examples · 4 LLMs",
    },
    {
      title: "AI Credit Analysis Agent",
      category: "LLM Agents",
      description:
        "LangChain agent that validates credit applications and generates risk assessments for a commercial equipment finance lender.",
      longDescription:
        "Built a LangChain agent that validates credit applications against pulled credit records, generates risk assessments (Low/Medium/High), and flags potentially fraudulent documents for QuickFi, a commercial equipment finance lender. Designed a multi-stage pipeline covering document extraction (PDF/Excel/OCR), financial ratio calculation (DSCR, current ratio, debt-to-equity), and LLM-based reasoning over normalized financial data. Implemented secure, encrypted multi-document upload with in-memory processing to meet financial data handling requirements. Iterated on prompts and risk-tier definitions to calibrate outputs against borrower test cases (healthy, borderline, distressed, and doctored).",
      tech: ["Python", "LangChain", "OpenAI", "OCR", "pandas"],
      color: "from-teal-500 to-teal-600",
      github: "https://github.com/laurenp-2/quickfi-credit-analysis",
      highlight: "Fraud detection + risk tiering",
    },
    {
      title: "Bring the Party (RAG + SVD)",
      category: "Information Retrieval",
      description:
        "Retrieval-augmented recommender that generates menu and music suggestions from natural-language dinner party descriptions.",
      longDescription:
        'Built a retrieval-augmented recommender that generates menu and music suggestions from natural-language dinner party descriptions (e.g., "cozy fall dinner for six, jazz lovers, no seafood"). Used SVD-based latent semantic indexing to surface thematically relevant recipes and tracks beyond exact keyword matches, then layered an LLM on top to compose coherent menu + playlist pairings. Combined classical IR techniques (dimensionality reduction over a TF-IDF matrix) with modern generation to balance retrieval interpretability with recommendation fluency. Cornell Information Retrieval class project.',
      tech: ["Python", "SVD", "TF-IDF", "RAG", "LLM"],
      demo: "https://party-swizzle.4300showcase.infosci.cornell.edu/",
      color: "from-rose-500 to-rose-600",
      highlight: "Cornell IR class project",
    },
    {
      title: "Bias Swap Audit",
      category: "NLP / AI Analysis",
      description:
        "Auditing demographic bias in pre-trained sentiment models via counterfactual term swapping.",
      longDescription:
        "A pipeline that tests whether pre-trained sentiment models assign different scores to otherwise identical sentences based on the identity of the person mentioned. Generates a swapped-sentence dataset across six demographic categories (gender, race, religion, nationality, age, socioeconomic), runs inference with HuggingFace models, and reports results with statistical tests and visualizations. Found notable score gaps—e.g. sentences about atheists scored ~0.4 lower than identical sentences about Christians, and template sensitivity analysis revealed some sentences swung nearly the full [-1, 1] scale depending on who was mentioned.",
      tech: ["Python", "HuggingFace", "Pandas", "Scipy", "Matplotlib"],
      github: "https://github.com/laurenp-2/bias-swap-audit",
      color: "from-green-500 to-green-600",
      highlight: "6 demographic categories tested",
    },
    {
      title: "CUApts",
      category: "Full-stack",
      description: "Web app connecting students to off-campus housing.",
      longDescription:
        "Built a full-stack platform for university events using React, Node.js, and MongoDB. Features include real-time notifications, event filtering, and social integration. Currently used by 500+ students.",
      tech: ["React", "Node.js", "Firebase", "Typescript"],
      github: "https://github.com/cornell-dti/cu-apts",
      demo: "https://www.cuapts.org/",
      color: "from-blue-500 to-blue-600",
      highlight: "500+ active users",
    },
    {
      title: "Remneuro Dashboard",
      category: "Health Tech",
      description: "Medical dashboard for monitoring neurological health data.",
      longDescription:
        "Remneuro Dashboard is a comprehensive medical dashboard designed for healthcare professionals to monitor and analyze neurological health data. The platform integrates various data sources, providing real-time insights into patient health metrics, trends, and alerts. With an intuitive interface and advanced analytics, Remneuro Dashboard aims to enhance patient care and streamline clinical workflows.",
      tech: ["TypeScript", "React"],
      demo: "https://drive.google.com/file/d/17dNN3OifGzxDm0afMBGGwWcj-XhCfmTp/view?usp=sharing",
      color: "from-emerald-500 to-emerald-600",
      highlight: "Multi-device health data integration",
    },
    {
      title: "Facial Analysis App",
      category: "Full-stack AI",
      description: "Machine learning-powered face and emotion recognition.",
      longDescription:
        "A real-time facial recognition and analysis application that utilizes FaceAPI for face detection, emotion recognition, and facial landmark tracking.",
      tech: ["Next.js", "FaceAPI", "React", "OpenAI API", "PostgreSQL"],
      github: "https://github.com/laurenp-2/facial-recognition-app",
      demo: "https://facial-recognition-app-bice.vercel.app/",
      color: "from-purple-500 to-purple-600",
      highlight: "Real-time emotion recognition",
    },
    {
      title: "SavorStats",
      category: "Web App",
      description:
        "Social media platform for food enthusiasts to share and explore recipes.",
      longDescription:
        "SavorStats is a social media site for foodies! You can upload your latest cooking adventures, see what your friends are making, and discover great recipes for your next dish. Whether you're looking for inspiration to cook at home or want to brag about your latest soufflé, SavorStats provides a platform for all food-related interests.",
      tech: ["TypeScript", "React", "Firebase"],
      github: "https://github.com/laurenp-2/savorstats",
      color: "from-orange-500 to-orange-600",
      highlight: "Social recipe sharing",
    },
  ];

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-1 text-gray-90 text-lg">Projects</h2>
          <p className="text-gray-500 mb-12">A mix of research, side projects, and things I built because I was curious.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() =>
                setSelectedProject(selectedProject === index ? null : index)
              }
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-5 rounded-full blur-2xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <div className="flex items-start justify-between mb-4 relative z-10">
                <motion.div
                  className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-lg text-sm inline-flex items-center gap-1`}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <Star size={12} />
                  {project.category}
                </motion.div>
                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} className="text-gray-600" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo ?? project.github}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} className="text-gray-600" />
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2 relative z-10">
                <h3 className="text-gray-900">{project.title}</h3>

                <motion.div
                  animate={{ rotate: selectedProject === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <motion.p
                className="text-gray-600 mb-4 relative z-10"
                animate={{
                  height: selectedProject === index ? "auto" : "auto",
                }}
              >
                {selectedProject === index
                  ? project.longDescription
                  : project.description}
              </motion.p>

              {project.highlight ? (
                <div className="mb-4 relative z-10">
                  <motion.span
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                  >
                    <Sparkles size={12} />
                    {project.highlight}
                  </motion.span>
                </div>
              ) : null}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
