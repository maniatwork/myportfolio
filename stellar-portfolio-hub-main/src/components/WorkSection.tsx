import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectTaskApp from '@/assets/project-task-app.jpg';
import projectIdCard from '@/assets/project-id-card.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';
import projectChatApp from '@/assets/project-chat-app.jpg';

const projects = [
  {
    id: 1,
    title: 'Task Management App',
    category: 'Personal Project',
    description: 'A full-stack to-do app with authentication, drag-and-drop, and real-time updates.',
    tags: ['React', 'MongoDB', 'Bootstrap 5', 'REST API'],
    color: 'from-primary/20 to-accent/10',
    image: projectTaskApp,
  },
  {
    id: 2,
    title: 'ID Card Generator',
    category: 'Academic Project',
    description: 'Designed and developed a web-based tool to generate ID cards with dynamic styling. Implemented user input validation and interactive UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500/20 to-cyan-500/10',
    image: projectIdCard,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Personal Project',
    description: 'This very portfolio! A modern, animated single-page site built to showcase my work.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Bootstrap 5'],
    color: 'from-purple-500/20 to-pink-500/10',
    image: projectPortfolio,
  },
  {
    id: 4,
    title: 'Real-Time Chat Application',
    category: 'College Project',
    description: 'A real-time chat application with instant messaging, user authentication, and WebSocket-based communication for seamless conversations.',
    tags: ['Java', 'Spring Boot', 'WebSocket', 'MySQL'],
    color: 'from-green-500/20 to-emerald-500/10',
    image: projectChatApp,
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 relative" ref={ref}>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Projects</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              A collection of academic and personal projects I've built while learning and growing as a developer.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="project-card hover-lift">
                  {/* Project Image Area */}
                  <div className={`aspect-[16/10] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href="#"
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href="https://github.com/Manikandan-2412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <span className="text-sm text-muted-foreground">Project {String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Manikandan-2412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-foreground/20 font-semibold hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
              <span className="text-primary">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
