import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';

const challenges = [
  {
    title: 'AI Pricing Accuracy',
    problem: 'Pricing predictions varied by up to 55%.',
    solution: 'Retrained the model with 50K+ data points, achieving 95% accuracy.',
  },
  {
    title: 'Realtime Tracking Scale',
    problem: 'Direct database queries struggled with 1,000+ concurrent location updates.',
    solution: 'Introduced an optimised real-time architecture with Mapbox enhancements, now supporting 10K+ users.',
  },
  {
    title: 'WebSocket Reliability',
    problem: 'Chat connections dropped during driver movement.',
    solution: 'Implemented heartbeat monitoring with automatic reconnection and message queuing.',
  },
  {
    title: 'Map Performance',
    problem: 'Multiple driver markers caused UI lag on mobile devices.',
    solution: 'Implemented marker clustering with viewport-based lazy loading.',
  },
  {
    title: 'Docker Deployment',
    problem: 'Managing multi-service orchestration and sensitive configuration was complex.',
    solution: 'Standardised deployment using Docker Compose with health checks, rolling updates, and encrypted environment variables.',
  },
];

const Challenges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-study" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Challenges &{' '}
            <span className="gradient-text">Learnings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world challenges and the engineering solutions that turned them into measurable results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 shadow-glow" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-lg">
                        {challenge.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-destructive/5 border border-destructive/10">
                        <span className="text-xs font-medium text-destructive uppercase tracking-wider">Problem</span>
                        <p className="text-sm text-foreground/80 mt-1">{challenge.problem}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">Solution</span>
                        <p className="text-sm text-foreground/80 mt-1">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
