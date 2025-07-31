import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-heading font-bold text-2xl">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Damaged Visuals
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              Our Work
            </a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <Button 
              variant="default" 
              className="bg-gradient-primary shadow-neon"
              onClick={() => window.open('https://instagram.com/damagedvisuals', '_blank')}
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <Button 
                variant="default" 
                className="bg-gradient-primary shadow-neon w-fit"
                onClick={() => window.open('https://instagram.com/damagedvisuals', '_blank')}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;