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
            <span className="bg-gradient-text bg-clip-text text-transparent">$150</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to damage some screens? Let's create something crazy together.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="font-heading font-black text-6xl md:text-7xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $150
              </div>
              <p className="text-muted-foreground">Starting Price</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Custom 3D Animation",
                "Professional Quality",
                "Fast Turnaround",
                "Unlimited Revisions",
                "Commercial Rights"
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

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full bg-gradient-primary shadow-neon hover:shadow-glow transition-all duration-300 text-lg py-6 group"
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