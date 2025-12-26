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
      title: "Problem Solver",
      description: "Breaking down complex challenges into elegant solutions",
      color: "from-blue-500 to-blue-600",
      emoji: "🧩",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing readable, maintainable code that others can understand",
      color: "from-purple-500 to-purple-600",
      emoji: "✨",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Always exploring new technologies and best practices",
      color: "from-green-500 to-green-600",
      emoji: "🚀",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively and helping others grow",
      color: "from-orange-500 to-orange-600",
      emoji: "🤝",
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
              Hey! I'm a computer science student who fell in love with coding
              at a young age and hasn't looked back. What started as curiosity
              turned into a passion for building things that matter.
            </p>

            <p className="text-gray-600">
              I'm currently studying CS while working on side projects,
              contributing to open source, and learning everything I can about
              software engineering. I love the challenge of turning complex
              problems into simple, elegant solutions.
            </p>

            <p className="text-gray-600">
              When I'm not coding, you'll find me at hackathons, volunteering on
              campus, or helping other students learn to program. I believe the
              best way to learn is by building and teaching.
            </p>

            <div className="flex gap-3 pt-4 flex-wrap">
              <motion.span
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg cursor-default"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                Detail-oriented
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg cursor-default"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                Quick learner
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-green-50 text-green-700 rounded-lg cursor-default"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                Creative thinker
              </motion.span>
            </div>
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
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
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
          <h3 className="mb-8 text-gray-900">Tech Stack & Skills</h3>
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
