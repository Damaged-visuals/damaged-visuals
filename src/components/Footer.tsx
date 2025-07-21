import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-heading font-black text-2xl">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Damaged Visuals
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating cutting-edge visual experiences that push the boundaries of imagination. 
              From concept to completion.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground">Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                3D Animation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Motion Graphics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Visual Effects
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Art Direction
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Post Production
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Press Kit
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">hello@damagedvisuals.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground leading-relaxed">
                  123 Creative District<br />
                  Los Angeles, CA 90028
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Damaged Visuals. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;