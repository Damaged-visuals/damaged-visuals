import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StreamerPricingSection = () => {
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
            <span className="text-sm font-medium text-accent">STREAMER PRICING</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="text-foreground">LEVEL UP YOUR</span>
            <br />
            <span className="bg-gradient-text bg-clip-text text-transparent">STREAM</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Custom 3D visuals to make your stream stand out from the crowd.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Monthly Bundle */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                STREAMER INTRO/OUTRO MONTHLY BUNDLE
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $670
              </div>
              <p className="text-muted-foreground">/month</p>
            </div>

            <p className="text-muted-foreground mb-6 text-center">
              Take your stream visuals to the next level with full access to our premium 3D animation services — customized to match your content, events, and personal brand.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Unlimited custom stream visuals (Intros, outros, overlays — fully animated in 3D)",
                "On-demand 3D visuals for special events",
                "Fast turnaround",
                "Consistent 3D branding across Twitch, Kick, YouTube, and socials",
                "1-on-1 creative planning session each month",
                "Optional creative direction & content support"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/20 rounded-lg p-4 mb-6">
              <h4 className="font-heading font-bold text-accent mb-2">🔧 How It Works:</h4>
              <p className="text-sm text-muted-foreground">
                Once subscribed, you'll gain full creative access for the entire month. Just tell us what's coming up — we'll handle the visuals: Planning a subathon? Get a hype 3D subathon intro. Streaming a specific game? We'll theme your visuals around it.
              </p>
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

          {/* Stream Intro Service */}
          <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon">
            <div className="text-center mb-6">
              <h3 className="font-heading font-black text-xl mb-2 text-foreground">
                STREAM INTRO SERVICE
              </h3>
              <div className="font-heading font-black text-4xl bg-gradient-text bg-clip-text text-transparent mb-2">
                $350
              </div>
              <p className="text-muted-foreground">One-time Service</p>
            </div>

            <p className="text-muted-foreground mb-6 text-center">
              Take your stream visuals to the next level with our custom intros and outros
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom stream Intro",
                "Custom stream Outro", 
                "Custom 3D character",
                "Fast Turnaround",
                "Optional creative direction & content support"
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

            <div className="bg-secondary/20 rounded-lg p-4 mb-6">
              <h4 className="font-heading font-bold text-accent mb-2">🔧 How It Works:</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Once 50% deposit put down, We'll create custom 3D animated stream intro and outro for you!
              </p>
              <p className="text-sm text-accent">
                Upgrade later to the monthly plan and get $100 off your first month.
              </p>
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

export default StreamerPricingSection;