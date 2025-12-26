import { motion } from "motion/react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home", color: "bg-blue-500" },
    { id: "about", icon: User, label: "About", color: "bg-purple-500" },
    {
      id: "experience",
      icon: Briefcase,
      label: "Experience",
      color: "bg-green-500",
    },
    {
      id: "projects",
      icon: FolderGit2,
      label: "Projects",
      color: "bg-orange-500",
    },
    { id: "contact", icon: Mail, label: "Contact", color: "bg-pink-500" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/laurenp-2", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lauren-pothuru/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-20 bg-white border-r border-gray-100 flex flex-col items-center py-6 z-50 lg:hidden">
        <motion.div
          className="mb-8"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">JD</span>
          </div>
        </motion.div>

        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`p-3 rounded-xl transition-colors relative group ${
                activeSection === item.id ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={
                  activeSection === item.id
                    ? {
                        rotate: [0, -10, 10, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                <item.icon
                  size={20}
                  className={
                    activeSection === item.id
                      ? "text-gray-900"
                      : "text-gray-400"
                  }
                />
              </motion.div>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator-mobile"
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 ${item.color} rounded-r-full`}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-100 flex-col py-8 px-6 z-50">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              whileHover={{ y: [0, 5, -15, 0], scale: 1.1 }}
              transition={{ duration: 1 }}
              className="w-12 h-12 rounded-xl object-cover "
            >
              <ImageWithFallback src="public/doodle.jpg" alt="Profile" />
            </motion.div>
            <div className="self-end">
              <h3 className="text-gray-900">Lauren Pothuru</h3>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors relative group ${
                activeSection === item.id ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                animate={
                  activeSection === item.id
                    ? {
                        rotate: [0, -5, 5, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                <item.icon
                  size={20}
                  className={
                    activeSection === item.id
                      ? "text-gray-900"
                      : "text-gray-400"
                  }
                />
              </motion.div>
              <span
                className={
                  activeSection === item.id ? "text-gray-900" : "text-gray-600"
                }
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 ${item.color} rounded-r-full`}
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-500 text-sm mb-4">Connect</p>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
                whileHover={{ y: -4, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
