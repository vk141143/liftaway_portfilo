import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Zap } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Full-Stack Engineering', description: 'React, Python, FastAPI with scalable frontend and backend systems' },
  { icon: Database, label: 'Data, AI & Intelligence', description: 'PostgreSQL, Supabase, Redis with AI-driven pricing and decision algorithms' },
  { icon: Cloud, label: 'Cloud & DevOps', description: 'Containerised deployments using Docker and cloud infrastructure' },
  { icon: Zap, label: 'UI / UX Design', description: 'User-first interfaces focused on performance, clarity, and usability' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              The Team Behind{' '}
              <span className="gradient-text">LiftAway</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                LiftAway is built by a skilled full-stack development team focused on creating scalable, user-centric platforms. The project reflects our commitment to transforming traditional industries through intelligent technology and clean, reliable design.
              </p>
              <p>
                From AI-driven pricing to real-time tracking and live communication, the platform is developed end to end with a strong focus on performance, usability, and scalability.
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-foreground mb-4">Core Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">Full-Stack Engineering</h4>
                    <p className="text-sm text-muted-foreground">React, Python, FastAPI with scalable frontend and backend systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">Data, AI & Intelligence</h4>
                    <p className="text-sm text-muted-foreground">PostgreSQL, Supabase, Redis with AI-driven pricing and decision algorithms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">Cloud & DevOps</h4>
                    <p className="text-sm text-muted-foreground">Containerised deployments using Docker and cloud infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-medium text-foreground">UI / UX Design</h4>
                    <p className="text-sm text-muted-foreground">User-first interfaces focused on performance, clarity, and usability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 hover-lift glow-effect"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
