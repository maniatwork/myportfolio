import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '@/assets/profile.jpeg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden card-gradient border border-border">
                <img src={profileImg} alt="Manikandan" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-primary/30 -z-10" />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm">About Me</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight">
                  Passionate about
                  <br />
                  <span className="text-gradient">Development</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hi! I'm Manikandan, a B.E Electronics & Communication Engineering graduate 
                  with a deep passion for software development. I love building web applications 
                  and turning creative ideas into functional, user-friendly products.
                </p>
                <p>
                  Though my degree is in ECE, my heart is fully in development. I've been 
                  dedicating my time to mastering modern web technologies and building real-world 
                  projects. I'm eager to kickstart my career as a Software Engineer.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { label: 'Name', value: 'Manikandan' },
                  { label: 'Location', value: 'Dindigul, TN, India' },
                  { label: 'Degree', value: 'B.E in ECE' },
                  { label: 'Interest', value: 'Software Developer' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-foreground mt-1">{item.value}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
