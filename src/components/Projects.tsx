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
      title: "Bias Swap Audit",
      category: "NLP / AI Analysis",
      description:
        "Auditing demographic bias in pre-trained sentiment models via counterfactual term swapping.",
      longDescription:
        "A pipeline that tests whether pre-trained sentiment models assign different scores to otherwise identical sentences based on the identity of the person mentioned. Generates a swapped-sentence dataset across six demographic categories (gender, race, religion, nationality, age, socioeconomic), runs inference with HuggingFace models, and reports results with statistical tests and visualizations. Found notable score gaps — e.g. sentences about atheists scored ~0.4 lower than identical sentences about Christians, and template sensitivity analysis revealed some sentences swung nearly the full [-1, 1] scale depending on who was mentioned.",
      tech: ["Python", "HuggingFace", "Pandas", "Scipy", "Matplotlib"],
      github: "https://github.com/laurenp-2/bias-swap-audit",
      color: "from-green-500 to-green-600",
      highlight: "6 demographic categories tested",
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
      highlight: "Handles 1000+ detections per minute",
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
    },
    {
      title: "Remneuro Dashboard",
      category: "Health Tech",
      description: "Medical dashboard for monitoring neurological health data.",
      longDescription:
        "Remneuro Dashboard is a comprehensive medical dashboard designed for healthcare professionals to monitor and analyze neurological health data. The platform integrates various data sources, providing real-time insights into patient health metrics, trends, and alerts. With an intuitive interface and advanced analytics, Remneuro Dashboard aims to enhance patient care and streamline clinical workflows.",
      tech: ["TypeScript", "React"],
      demo: "https://drive.google.com/file/d/17dNN3OifGzxDm0afMBGGwWcj-XhCfmTp/view?usp=sharing",
      color: "from-green-500 to-green-600",
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
          <p className="text-gray-500 mb-12">Where my skills come to life</p>
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
