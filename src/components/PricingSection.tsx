import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">PRICING</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="text-foreground">STARTING FROM</span>
            <br />
            <span className="bg-gradient-text bg-clip-text text-transparent">$60</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to damage some screens? Let's create something crazy together.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video Game Outfit Select Visuals */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                VIDEO GAME OUTFIT SELECT VISUALS
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $120
              </div>
              <p className="text-muted-foreground">Starting Price</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "High Quality visuals",
                "Three Outfits",
                "Fast Turnaround",
                "1 Revisions",
                "Commercial Rights",
                "50% Payment to start"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg py-6 group"
              onClick={() => window.open('https://instagram.com/direct/t/damagedvisuals/', '_blank')}
            >
              WORK WITH US!
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Custom Brand Visuals */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                CUSTOM BRAND VISUALS
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $125
              </div>
              <p className="text-muted-foreground">Starting Price</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "High Quality Custom visuals",
                "Fast Turnaround",
                "1 Revision",
                "Commercial Rights",
                "50% Payment to start"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg py-6 group"
              onClick={() => window.open('https://instagram.com/direct/t/damagedvisuals/', '_blank')}
            >
              WORK WITH US!
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Stream Intro */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                STREAM INTRO
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $350
              </div>
              <p className="text-muted-foreground">Starting Price</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Custom 3d character",
                "High quality stream intro",
                "Fast turnaround",
                "2 Revisions",
                "Commercial Rights",
                "50% Payment to start"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg py-6 group"
              onClick={() => window.open('https://instagram.com/direct/t/damagedvisuals/', '_blank')}
            >
              WORK WITH US!
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Product/Logo Display/Rotation */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                PRODUCT/LOGO DISPLAY/ROTATION
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $60
              </div>
              <p className="text-muted-foreground">Starting Price</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Eg. T-shirt rotation visuals, Logo rotation Visuals",
                "Fast turnaround",
                "No Revisions",
                "Commercial Rights",
                "100% Payment to start"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg py-6 group"
              onClick={() => window.open('https://instagram.com/direct/t/damagedvisuals/', '_blank')}
            >
              WORK WITH US!
              <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;