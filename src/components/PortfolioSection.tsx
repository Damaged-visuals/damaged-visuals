import { ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import abstractMotion from '@/assets/abstract-motion.jpg';
import studioWorkflow from '@/assets/studio-workflow.jpg';
import heroAnimation from '@/assets/hero-animation.jpg';

const portfolioItems = [
  {
    title: "Cyberpunk Chronicles",
    category: "3D Animation",
    description: "Epic sci-fi series opening sequence",
    image: heroAnimation,
    featured: true
  },
  {
    title: "Neon Dreams",
    category: "Motion Graphics", 
    description: "Brand identity animation for tech startup",
    image: abstractMotion,
    featured: false
  },
  {
    title: "Digital Realm",
    category: "Visual Effects",
    description: "VFX breakdown for indie film project",
    image: studioWorkflow,
    featured: false
  },
  {
    title: "Abstract Flow",
    category: "Art Direction",
    description: "Creative direction for music video",
    image: abstractMotion,
    featured: false
  },
  {
    title: "Future Vision",
    category: "3D Animation",
    description: "Product launch campaign animation",
    image: heroAnimation,
    featured: false
  },
  {
    title: "Glitch Effect",
    category: "Post Production",
    description: "Advanced compositing showcase",
    image: studioWorkflow,
    featured: false
  }
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-6">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Portfolio</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="text-foreground">Recent</span>
            <br />
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects that showcase the power of creative storytelling 
            and technical excellence in animation and visual effects.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-neon ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    item.featured ? 'h-80 md:h-96' : 'h-64'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;