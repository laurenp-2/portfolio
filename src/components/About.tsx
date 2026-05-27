import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Zap,
  Heart,
  Brain,
  Rocket,
  Shield,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function About() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const principles = [
    {
      icon: Brain,
      title: "Evaluation-Minded",
      description:
        "Interested in not just building models that perform, but understanding when and why they don't",
      color: "from-blue-500 to-blue-600",
      emoji: "🔬",
    },
    {
      icon: Users,
      title: "TA & Mentor",
      description:
        "Teaching algorithms to 260+ students—office hours, proofs, and a lot of runtime complexity",
      color: "from-purple-500 to-purple-600",
      emoji: "🎓",
    },
    {
      icon: Rocket,
      title: "Ships Things",
      description:
        "From independent research to production tools—I like seeing work make contact with reality",
      color: "from-green-500 to-green-600",
      emoji: "🚀",
    },
    {
      icon: Heart,
      title: "Outside CS",
      description:
        "Sub-4 marathoner, paper maker, literary fiction reader, and would-be astrophysicist",
      color: "from-orange-500 to-orange-600",
      emoji: "🏃",
    },
  ];

  const techStack = {
    Languages: ["TypeScript", "Python", "Java", "JavaScript", "C", "OCaml"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    Backend: ["Node.js", "Express", "FastAPI", "REST APIs"],
    Database: ["PostgreSQL", "MongoDB", "Firebase", "SQL"],
    Tools: ["Git", "VS Code", "Figma", "Postman", "Agile"],
    Learning: ["Docker", "AWS", "React Native"],
  };

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-1 text-gray-90 text-lg">About Me</h2>
          <p className="text-gray-500 mb-12">A bit about who I am</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg">
              Hey, I'm Lauren. I'm a CS sophomore at Cornell, currently
              spending most of my time on language models and how they hold up
              under pressure. My most recent project was a benchmark for what
              happens when you feed a RAG system wrong information on purpose
              (the models mostly refuse to answer, even when they shouldn't,
              which is its own kind of failure, and something I'm digging into
              further this summer as a research fellow at Anote AI).
            </p>

            <p className="text-gray-600">
              I'm also splitting the summer with an SWE internship at Junior,
              working on LLM tools used by investment teams at top PE firms,
              MBB, and Big 4. During the school year I TA Cornell's algorithms
              class, which means 260+ students, weekly discussion sections, and
              a lot of proofs. I try to think carefully about what I build and
              where it sits in the bigger picture of how tech shapes the way
              people live and work.
            </p>

            <p className="text-gray-600">
              Outside of CS: I run a lot (ran a sub-4 marathon this fall and
              I'm slowly working through every trail around Ithaca), read
              mostly literary fiction and classics, and would've been an
              astrophysics major in another life. I also make paper from
              scratch sometimes, and listen to a lot of Elliott Smith and
              Fleetwood Mac.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                whileHover={{ y: -8, scale: 1.02, rotate: 2 }}
                className={`p-6 bg-gradient-to-br ${principle.color} rounded-2xl text-white cursor-pointer relative overflow-hidden`}
              >
                <motion.div
                  className="absolute top-2 right-2 text-3xl opacity-20"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {principle.emoji}
                </motion.div>
                <motion.div>
                  <principle.icon size={24} className="mb-3 opacity-80" />
                </motion.div>
                <h4 className="text-white mb-2">{principle.title}</h4>
                <p className="text-white/80 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="mb-1text-gray-900">Tech Stack & Skills</h3>
          <p className="text-gray-500 mb-8">How I bring my ideas to life</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + catIndex * 0.05 }}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <h4 className="text-gray-900 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <motion.span
                      key={item}
                      onHoverStart={() => setHoveredSkill(catIndex * 100 + i)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
