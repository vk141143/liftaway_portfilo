import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  MapPin,
  MessageSquare,
  Truck,
  Clock,
  Shield,
  TrendingUp,
  History,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Fair Pricing',
    description: 'Advanced algorithms assess material type, volume, and location to deliver clear, accurate, and fair pricing — instantly.',
  },
  {
    icon: Truck,
    title: 'Smart Driver Matching',
    description: 'Your request is automatically matched with the nearest available driver in seconds, reducing delays and improving efficiency.',
  },
  {
    icon: MapPin,
    title: 'Live Collection Tracking',
    description: 'Real-time GPS tracking shows the driver\'s location and estimated arrival, keeping you informed at every step.',
  },
  {
    icon: MessageSquare,
    title: 'Real-Time Messaging',
    description: 'Built-in instant chat enables smooth, direct communication between users and drivers when it matters most.',
  },
  {
    icon: Clock,
    title: 'Collection Progress Updates',
    description: 'Monitor every stage of your recycling collection, from booking to completion, with live status updates.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable Platform',
    description: 'Enterprise-grade security protects your data with encrypted storage and secure authentication.',
  },
  {
    icon: TrendingUp,
    title: 'Complete Price Transparency',
    description: 'A clear breakdown of all pricing factors ensures you always know exactly what you\'re paying for.',
  },
  {
    icon: History,
    title: 'Service History & Insights',
    description: 'Access a complete record of past collections, invoices, and performance insights through a simple dashboard.',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Manage Recycling</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A powerful, all-in-one platform built to simplify and modernise recycling collection.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0)' } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 hover-lift glow-effect"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
