import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const problems = [
  { title: 'Unclear pricing', desc: 'Inconsistent and unpredictable costs create frustration and uncertainty.' },
  { title: 'Slow driver availability', desc: 'Long waiting times delay collections and disrupt schedules.' },
  { title: 'No pickup visibility', desc: 'Lack of real-time updates leaves users in the dark.' },
  { title: 'Poor communication', desc: 'Disconnected systems make coordination difficult.' },
  { title: 'Manual scheduling inefficiencies', desc: 'Outdated processes waste time and resources.' },
];

const solutions = [
  { title: 'AI-powered fair pricing', desc: 'Instant, transparent pricing you can trust.' },
  { title: 'Intelligent driver matching', desc: 'Reduces wait times by up to 89%.' },
  { title: 'Live GPS tracking', desc: 'Full visibility at every stage of the collection.' },
  { title: 'Built-in communication tools', desc: 'Seamless messaging between all parties.' },
  { title: 'Automated scheduling & smart routing', desc: 'Faster, more efficient recycling collections.' },
];

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            From Problems to Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Recycling Collection, <span className="gradient-text">Reimagined</span> from the Ground Up
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We built our platform by addressing the real challenges people face when booking recycling collections. Every feature is designed to remove friction, improve clarity, and deliver a smoother experience from start to finish.
          </p>
        </motion.div>

        {/* Problem/Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold">The Challenges</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col gap-2 p-4 rounded-2xl bg-background border border-border/50 hover-lift"
                >
                  <p className="font-medium text-foreground">{problem.title}</p>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connector */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow"
            >
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </motion.div>
          </div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">Our Smart Solutions</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-primary/20 hover-lift glow-effect"
                >
                  <span className="text-primary text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-foreground">{solution.title}</p>
                    <p className="text-sm text-muted-foreground">{solution.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
