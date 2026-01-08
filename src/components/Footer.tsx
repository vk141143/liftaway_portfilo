import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/liftawaysolutions.uk/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61585308342125', label: 'Facebook' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/110938934/admin/dashboard/', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://www.youtube.com/@LiftawaySolutionsLTD', label: 'YouTube' },
    { icon: Twitter, url: 'https://x.com/liftaway_1', label: 'X (Twitter)' },
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-accent/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">LA</span>
              </div>
              <span className="font-display font-semibold text-foreground text-lg">LiftAway</span>
            </div>
            <p className="text-sm font-semibold text-foreground mb-2">Fast. Simple. Reliable Waste Removal.</p>
            <p className="text-sm text-muted-foreground mb-6">Making waste management smarter, one pickup at a time.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-accent border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all" aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Households</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Businesses</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">For Drivers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 LiftAway. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 bg-accent border border-border rounded-lg text-xs font-medium text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all">Download on the App Store</a>
            <a href="#" className="px-4 py-2 bg-accent border border-border rounded-lg text-xs font-medium text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all">Get it on Google Play</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
