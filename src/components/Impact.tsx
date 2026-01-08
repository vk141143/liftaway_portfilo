import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { value: 89.9, suffix: '%', label: 'Faster', sublabel: 'Driver allocation', description: 'Powered by smart matching algorithms' },
  { value: 99.9, suffix: '%', label: 'Transparency', sublabel: 'Pricing accuracy', description: 'AI-driven fair pricing' },
  { value: 50, suffix: 'ms', label: 'Average response time', sublabel: '', description: 'Optimised real-time updates' },
  { value: 10, suffix: 'K+', label: 'Users', sublabel: 'Scalable and reliable', description: 'Cloud-ready deployment architecture' },
];

const AnimatedNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
      {value % 1 === 0 ? Math.floor(displayValue) : displayValue.toFixed(1)}{suffix}
    </span>
  );
};

const Impact = () => {
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
            Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Measurable{' '}
            <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real metrics that demonstrate the platform\'s performance, reliability, and scalability.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center hover-lift"
            >
              <AnimatedNumber value={metric.value} suffix={metric.suffix} isInView={isInView} />
              <h3 className="font-display font-semibold mt-4">{metric.label}</h3>
              {metric.sublabel && <p className="text-sm font-medium text-foreground/70 mb-2">{metric.sublabel}</p>}
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
