import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'hello@liftaway.co.uk', href: 'mailto:hello@liftaway.co.uk' },
  { icon: Phone, label: 'Phone', value: '+44 7XXX XXX XXX', href: 'tel:+447000000000' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/developer', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/developer', href: 'https://github.com' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              Let's{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interested in the project or want to discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center hover-lift glow-effect group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground truncate">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Demo Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8 text-center"
          >
            <h3 className="font-display text-xl font-semibold mb-4">
              Check Out the Project
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow group">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Live Demo
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                View Source
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
