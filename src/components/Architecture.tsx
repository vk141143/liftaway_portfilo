import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Map,
  Zap,
  ArrowRight,
} from 'lucide-react';

const architectureNodes = [
  {
    icon: Monitor,
    title: 'React Frontend',
    description: 'Modern UI with Tailwind & Framer Motion',
    color: 'primary',
  },
  {
    icon: Server,
    title: 'FastAPI Backend',
    description: 'High-performance Python API',
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'AI Pricing Module',
    description: 'ML-powered fair price calculation',
    color: 'primary',
  },
  {
    icon: Map,
    title: 'Mapbox + Redis',
    description: 'Realtime tracking & caching',
    color: 'primary',
  },
  {
    icon: Database,
    title: 'Supabase Postgres',
    description: 'Secure database & auth',
    color: 'primary',
  },
  {
    icon: Cloud,
    title: 'DigitalOcean',
    description: 'Docker deployment & scaling',
    color: 'primary',
  },
];

const Architecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="architecture" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Architecture
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            System{' '}
            <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A scalable, microservices-inspired architecture designed for performance
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Architecture Grid */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {architectureNodes.map((node, index) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0)' } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 text-center hover-lift glow-effect h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <node.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {node.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {node.description}
                  </p>
                </div>
                
                {/* Connector Arrow */}
                {index < architectureNodes.length - 1 && index % 3 !== 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20"
                  >
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Data Flow Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 glass-card text-center"
          >
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Data Flow:</span>{' '}
              User requests flow from React → FastAPI → AI pricing & driver matching → 
              Redis for realtime caching → Mapbox for live tracking → Supabase for persistence → 
              All deployed via Docker on DigitalOcean
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
