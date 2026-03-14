import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-padding w-full pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Open to opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
              >
                Aspiring
                <br />
                <span className="text-gradient">Developer</span>
                <br />
                & Creator
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                A B.E ECE graduate from Dindigul, Tamil Nadu, passionate about building clean, 
                user-friendly web applications. Eager to grow as a Software Engineer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.a
                  href="#work"
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg glow-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-6 pt-8"
              >
                <span className="text-sm text-muted-foreground">Find me on</span>
                <div className="w-12 h-px bg-border" />
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Manikandan-2412' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/manikandan--sivakumar/' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '5+', label: 'Projects Built' },
                  { number: 'B.E', label: 'ECE' },
                  { number: '5+', label: 'Technologies Learned' },
                  { number: '3+', label: 'Certifications' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-2xl card-gradient border border-border"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
