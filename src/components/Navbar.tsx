import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  // { label: 'Features', href: '#features' },
  // { label: 'Architecture', href: '#architecture' },
  { label: 'Case Study', href: '#case-study' },
  // { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/LAS - Logo.png" alt="LiftAway" className="w-10 h-10" />
            <span className="font-display font-semibold text-lg text-foreground hidden sm:block">
              LiftAway
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-medium" asChild>
              <a href="https://liftawaysolutions.com" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button size="sm" className="font-medium shadow-glow animate-pulse" asChild>
              <a href="https://liftawaysolutions.com/customer-dashboard" target="_blank" rel="noopener noreferrer">join for free</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-border/50"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-foreground font-medium rounded-xl hover:bg-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-3 pt-4 px-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://liftawaysolutions.com/app/" target="_blank" rel="noopener noreferrer">Login</a>
                </Button>
                <Button className="flex-1 shadow-glow animate-pulse" asChild>
                  <a href="https://liftawaysolutions.com/customer-dashboard" target="_blank" rel="noopener noreferrer">Sign Up</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
