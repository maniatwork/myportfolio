import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Layers, Zap, Database, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive UIs with modern frameworks and clean code.',
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    icon: Database,
    title: 'Backend Basics',
    description: 'Creating APIs and working with databases for full-stack projects.',
    technologies: ['MongoDB', 'MySQL', 'REST APIs'],
  },
  {
    icon: Palette,
    title: 'Digital',
    description: 'Creating engaging digital content through video editing and creative media.',
    technologies: ['Video Editing', 'Content Creation'],
  },
  {
    icon: Layers,
    title: 'Programming Languages',
    description: 'Strong foundation in core programming concepts and languages.',
    technologies: ['JavaScript', 'Java', 'C#', 'SQL'],
  },
  {
    icon: Zap,
    title: 'Tools & Workflow',
    description: 'Familiar with modern development tools and collaboration workflows.',
    technologies: ['Git', 'GitHub', 'VS Code', 'npm', 'Postman'],
  },
  {
    icon: Globe,
    title: 'Currently Learning',
    description: 'Always expanding my skill set with new technologies and concepts.',
    technologies: ['Cloud Basics', 'Testing', 'CI/CD'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Skills</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              What I <span className="text-gradient">Know</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Technologies and tools I've worked with through coursework, personal projects, and self-learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-colors hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
