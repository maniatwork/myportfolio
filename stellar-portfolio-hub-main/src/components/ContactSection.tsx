import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, GraduationCap, Send, ArrowUpRight } from "lucide-react";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date(),
      });

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                  Get in Touch
                </span>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                  Let's <br />
                  <span className="text-gradient">Connect</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-md">
                I'm open to exciting career opportunities, collaborations, and
                partnerships. Whether you're looking for a dedicated developer
                or a creative professional — let's connect.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  { icon: Mail, label: "Email", value: "smanisiva235@gmail.com" },
                  { icon: GraduationCap, label: "Education", value: "B.E ECE, 2026" },
                  { icon: MapPin, label: "Location", value: "Dindigul, Tamil Nadu, India" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 space-y-4">
                <p className="text-sm text-muted-foreground">Connect with me</p>

                <div className="flex gap-4">
                  {[
                    {
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/in/manikandan--sivakumar/",
                    },
                    {
                      name: "GitHub",
                      href: "https://github.com/Manikandan-2412",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      {social.name}
                      <ArrowUpRight size={14} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-3xl card-gradient border border-border"
              >
                <div className="grid sm:grid-cols-2 gap-6">

                  <input
                    type="text"
                    value={formData.name}
                    placeholder="Your Name"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border"
                  />

                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Your Email"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border"
                  />

                </div>

                <input
                  type="text"
                  value={formData.subject}
                  placeholder="Subject"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border"
                />

                <textarea
                  rows={5}
                  value={formData.message}
                  placeholder="Message"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border"
                />

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={20} />
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;