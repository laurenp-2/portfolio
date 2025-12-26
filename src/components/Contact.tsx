import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  FileText,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "laurenpothuru100@gmail.com",
      href: "mailto:laurenpothuru100@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/laurenp-2",
      href: "https://github.com/laurenp-2",
      color: "bg-gray-900",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/lauren-pothuru",
      href: "https://www.linkedin.com/in/lauren-pothuru/",
      color: "bg-blue-600",
    },
    {
      icon: FileText,
      title: "Resume",
      value: "Download PDF",
      href: "/Lauren_Pothuru_Resume.pdf",
      color: "bg-green-600",
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
          <h2 className="mb-1 text-gray-90 text-lg">Get in Touch</h2>
          <p className="text-gray-500 mb-12">
            Let's build something great together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-gray-900 mb-3">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any channel below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all group"
                >
                  <div
                    className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="text-white" size={18} />
                  </div>
                  <p className="text-gray-500 text-sm mb-1">{method.title}</p>
                  <p className="text-gray-900 text-sm">{method.value}</p>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 mt-8">
              <h4 className="text-gray-900 mb-2">Currently Available</h4>
              <p className="text-gray-600 text-sm mb-4">
                Open to part-time opportunities, consulting projects, and
                interesting collaborations.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm">
                  Remote
                </span>
                <span className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm">
                  Part-time
                </span>
                <span className="px-3 py-1 bg-white text-gray-700 rounded-lg text-sm">
                  Contract
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-2xl p-8"
            >
              <h3 className="text-gray-900 mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-3 rounded-lg text-white transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? "bg-green-500"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-100"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Lauren Pothuru · Software Engineer · Built with React &
            TypeScript
          </p>
        </motion.div>
      </div>
    </section>
  );
}
