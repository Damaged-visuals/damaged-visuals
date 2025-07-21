import heroImage from '@/assets/hero-animation.jpg';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="3D Animation" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Services Tags */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm text-accent border border-accent/20">
            3D Animation
          </span>
          <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm text-accent border border-accent/20">
            Motion Graphics
          </span>
          <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm text-accent border border-accent/20">
            Visual Effects
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative mb-8">
          <h1 className="font-heading font-black text-8xl md:text-9xl lg:text-[12rem] leading-none">
            <span className="block bg-gradient-text bg-clip-text text-transparent animate-fade-in">
              DAMAGED
            </span>
            <span className="block text-white -mt-4 md:-mt-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              VISUALS
            </span>
          </h1>
          
          {/* Overlapping Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
            <span className="font-heading font-black text-6xl md:text-8xl text-primary whitespace-nowrap">
              ANIMATION STUDIO
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
          We create cutting-edge visual experiences that push the boundaries of imagination. 
          From concept to completion, we bring your wildest ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Reel
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;