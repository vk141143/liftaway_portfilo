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
              <img src="/LAS - Logo.png" alt="LiftAway" className="w-10 h-10" />
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

          {/* Get Started */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Reason</a></li>
              <li><a href="#case-study" className="text-muted-foreground hover:text-primary transition-colors">Case Study</a></li>
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

          {/* Download App */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Download App</h3>
            <p className="text-xs text-muted-foreground mb-3">Available in all kind of latest versions</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2024 LiftAway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
