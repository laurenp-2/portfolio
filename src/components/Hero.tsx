import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Terminal,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export function Hero({ setActiveSection }: HeroProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
      {/* Floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
          animate={{
            x: [Math.random() * 100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <GraduationCap size={16} className="text-blue-600" />
            </motion.div>
            <span className="text-blue-600 text-sm">
              Computer Science Student
            </span>
          </motion.div>

          <h1 className="mb-6 text-gray-900">
            <motion.span
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="inline-block"
            >
              Building elegant solutions
            </motion.span>
            <br />
            through{" "}
            <motion.span
              className="text-blue-600 inline-block"
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(90deg, #8b5cf6, #ec4899)",
                  "linear-gradient(135deg, #ec4899, #3b82f6)",
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              clean code
            </motion.span>
          </h1>

          <p className="text-gray-600 text-xl max-w-2xl mb-8">
            Hi! I'm Lauren, a software engineer passionate about code, learning new
            technologies, and building projects that solve real problems.
          </p>

          <div className="flex gap-4 mb-12">
            <motion.button
              onClick={() => setActiveSection("projects")}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Projects</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveSection("contact")}
              className="px-6 py-3 border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.div
            className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <Code2 size={24} className="mb-3 opacity-80" />
            </motion.div>
            <h3 className="text-white mb-1">3+ Years</h3>
            <p className="text-blue-100 text-sm">Coding experience</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white cursor-pointer"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0,5, -5, 0], x: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <Terminal size={24} className="mb-3 opacity-80" />
            </motion.div>
            <h3 className="text-white mb-1">15+ Projects</h3>
            <p className="text-purple-100 text-sm">Built & deployed</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} className="mb-3 opacity-80" />
            </motion.div>
            <h3 className="text-white mb-1">Always Learning</h3>
            <p className="text-green-100 text-sm">New tech & skills</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
