import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.a
              href="#home"
              className="font-display text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Mani.
            </motion.a>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Mani. All rights reserved. Crafted with passion.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
