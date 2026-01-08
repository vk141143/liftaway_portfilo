import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Supabase', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Mapbox', category: 'Maps' },
  { name: 'Redis', category: 'Cache' },
  { name: 'WebSockets', category: 'Realtime' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'DigitalOcean', category: 'Cloud' },
  { name: 'Python', category: 'Language' },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech-stack" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Built with{' '}
            <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is powered by carefully selected technologies to ensure high performance, scalability, security, and a seamless user experience.
          </p>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative"
            >
              <div className="px-5 py-3 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 cursor-default">
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
