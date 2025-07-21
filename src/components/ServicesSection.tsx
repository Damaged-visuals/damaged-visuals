import { Zap, Film, Palette, Sparkles, Monitor, Globe } from 'lucide-react';
import abstractMotion from '@/assets/abstract-motion.jpg';
import studioWorkflow from '@/assets/studio-workflow.jpg';

const services = [
  {
    icon: Film,
    title: "3D Animation",
    description: "Character animation, product visualization, and cinematic sequences that captivate audiences.",
    image: abstractMotion
  },
  {
    icon: Zap,
    title: "Motion Graphics",
    description: "Dynamic text animations, logo reveals, and graphic elements that enhance your brand story.",
    image: studioWorkflow
  },
  {
    icon: Sparkles,
    title: "Visual Effects",
    description: "Compositing, particle systems, and digital environments that bring impossible to life.",
    image: abstractMotion
  },
  {
    icon: Palette,
    title: "Art Direction",
    description: "Creative vision and aesthetic guidance to ensure your project stands out from the crowd.",
    image: studioWorkflow
  },
  {
    icon: Monitor,
    title: "Post Production",
    description: "Color grading, sound design, and final polish to deliver broadcast-ready content.",
    image: abstractMotion
  },
  {
    icon: Globe,
    title: "Digital Campaigns",
    description: "Full-service creative campaigns optimized for social media and digital platforms.",
    image: studioWorkflow
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Expertise</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              What We
            </span>
            <br />
            <span className="text-foreground">Create</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we specialize in creating visual experiences 
            that push creative boundaries and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-neon"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-8 z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;