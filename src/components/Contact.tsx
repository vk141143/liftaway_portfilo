import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email Support', desc: 'Our team can respond in real time.', value: 'support@liftawaysolutions.com', href: 'mailto:support@liftawaysolutions.com' },
  { icon: MapPin, label: 'Visit Our Office', desc: 'Visit our location in real life.', value: 'London, United Kingdom', href: '#' },
  { icon: Phone, label: 'Call Us Directly', desc: 'Available during working hours.', value: '+44 20 XXXX XXXX', href: 'tel:+442000000000' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="px-3 py-1 text-xs border border-border rounded-full">Reach Out To Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h2>
            <p className="text-muted-foreground">
              Or just reach out manually to{' '}
              <a href="mailto:contact@liftawaysolutions.com" className="text-primary hover:underline">contact@liftawaysolutions.com</a>
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{contact.label}</h3>
                <p className="text-muted-foreground text-sm mb-3">{contact.desc}</p>
                <a href={contact.href} className="text-primary font-semibold hover:underline">
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl p-10 text-center text-white"
            style={{ background: 'linear-gradient(to bottom, hsl(160 60% 45%), hsl(160 50% 35%))' }}
          >
            <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-30" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Ready to Transform Your Waste Management?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of users experiencing smarter, faster, and more reliable recycling collection.
              </p>
              <button className="px-10 py-3 bg-white text-primary hover:bg-white/90 transition-all rounded-full font-semibold text-base">
                <a href="https://liftawaysolutions.com/app/" target="_blank" rel="noopener noreferrer">Get Started Free</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
