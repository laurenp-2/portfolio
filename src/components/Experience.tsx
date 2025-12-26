import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  MapPin,
  Briefcase,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = {
    school: "Cornell University",
    img: "public/school.png",
    degree: "Bachelor of Arts in Computer Science",
    period: "2024 - 2028 (Expected)",
    gpa: "3.6/4.0",
    coursework: [
      "Data Structures",
      "Software Engineering",
      "Algorithms Analysis",
      "Web Development",
      "Machine Learning",
      "Systems Programming",
    ],
  };

  const experiences = [
    {
      company: "Cornell Bowers CIS",
      position: "Teaching Assistant",
      companyLogo: "public/cornell.png",
      companyUrl: "https://cis.cornell.edu/",
      period: "Aug 2025-Present",
      location: "Ithaca, NY",
      description:
        "Mentoring students in functional programming and algorithm analysis with weekly office hours and discussion sessions.",
      achievements: [
        "Mentor 260+ students per course in functional programming (OCaml) and algorithm analysis through 8 weekly office hours",
        "Debug code and clarify concepts in data structures, asymptotic analysis, and proof techniques",
        "Co-lead weekly discussion sessions for 20+ students on algorithm design, runtime complexity, and correctness proofs",
      ],
      color: "bg-purple-500",
    },
    {
      company: "RemNeuro",
      position: "Software Engineer Intern",
      companyLogo: "public/remneuro.png",
      companyUrl: "https://www.remneuro.com/",
      period: "Sep 2025-Dec 2025",
      location: "New York, NY",
      description:
        "Built full-stack neurological monitoring platform with secure authentication and real-time data processing.",
      achievements: [
        "Built full-stack neurological monitoring platform with secure auth, role-based access, and encryption for patient biometric data",
        "Implemented real-time anomaly detection for patient vitals with clinician-defined thresholds and dashboard alerts",
        "Designed normalization layer integrating Apple Watch, Fitbit, and Garmin data into unified clinical format",
      ],
      color: "bg-blue-500",
    },
    {
      company: "Singularity Softworks",
      companyUrl: "https://www.singularitysoftworks.com/",
      companyLogo: "public/singularity.png",
      position: "Software Engineer Intern",
      period: "May 2025-Aug 2025",
      location: "Toronto, ON, Canada",
      description:
        "Integrated AI technologies into production applications including chat platforms and specialized tools.",
      achievements: [
        "Integrated OpenAI GPT-4, Claude (via MCP), Whisper API, and Vercel AI SDK into three production applications",
        "Built AI chat platform, legal contract analyzer with automated risk identification, and video interview coach",
        "Developed real-time interview simulator processing video responses via speech-to-text",
        "Created image generation interface with customizable style parameters",
      ],
      color: "bg-orange-500",
    },

    {
      company: "Cornell Digital Tech & Innovation",
      companyUrl: "https://new.cornelldti.org/",
      companyLogo: "public/dti.png",
      position: "Software Developer",
      period: "Feb 2025-Present",
      location: "Ithaca, NY",
      description:
        "Developing and maintaining full-stack systems for CUApts housing platform.",
      achievements: [
        "Develop and maintain full-stack systems for CUApts housing platform (500+ monthly users, 250+ listings) using TypeScript, Express, and Firestore",
        "Built newsletter subscription feature and folder-based listing organization system",
        "Operate on 2-week Agile sprints with regular debugging and system monitoring",
      ],
      color: "bg-green-500",
    },
  ];

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-1 text-gray-90 text-lg">Experience</h2>
        <p className="text-gray-500 mb-12">
          Where I've been learning and building
        </p>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              className="w-17 h-14  rounded-xl flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <ImageWithFallback
                src={education.img}
                alt={education.school}
                className="w-25 h-14 rounded-xl object-contain border border-blue-100"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1">{education.degree}</h3>
              <p className="text-blue-600 mb-2">{education.school}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>GPA : {education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-3">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm border border-blue-200 cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isOpen = expandedIndex === index;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setExpandedIndex(isOpen ? null : index)}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all relative overflow-hidden cursor-pointer"
              >
                {/* Left color bar */}
                <motion.div
                  className={`absolute top-0 left-0 w-1 h-full ${exp.color}`}
                  animate={{ height: isOpen ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Header */}
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex gap-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-6 h-6 rounded-xl object-contain"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-gray-900 mb-1">{exp.position}</h3>
                      <motion.a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative inline-block text-gray-600 text-sm underline mb-1 w-fit"
                      >
                        {exp.company}
                      </motion.a>

                      <p className="text-gray-500 text-sm">{exp.description}</p>
                    </div>
                  </div>

                  {/* Right side: meta + chevron */}
                  <div className="flex items-start gap-4 text-sm text-gray-500 lg:text-right">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-400 mt-1"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden pl-16 mt-6"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-600 mt-2">
                          Key Achievements
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-2 flex-shrink-0`}
                            />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
