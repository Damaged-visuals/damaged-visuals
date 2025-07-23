import { Play, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClientsSection = () => {
  const clients = [
    {
      title: "FANUM X WLTS BRAND AD",
      description: "High-energy short 3D brand ad for Fanum & WLTS \"IT'S HEAVY\" now sold out t-shirts",
      image: "https://www.instagram.com/reel/DLuB9KBozoy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      isInstagram: true
    },
    {
      title: "KLAW STREAM INTRO",
      description: "Fast paced animated stream intro for Kyle Lawyer",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      isComingSoon: true
    },
    {
      title: "GO-CRZY POP-UP AD",
      description: "Insane pop-up ad for Go-Crzy's Paris Pop-up",
      image: "https://www.instagram.com/reel/DHf9g9dIjnC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      isInstagram: true
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
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
            <span className="text-sm font-medium text-accent">CLIENTS</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="text-foreground">OUR</span>
            <br />
            <span className="bg-gradient-text bg-clip-text text-transparent">WORK</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recent projects that showcase our ability to damage screens worldwide.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.title}
              className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-neon"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                {client.isComingSoon ? (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-heading font-black text-primary mb-2">COMING</div>
                      <div className="text-4xl font-heading font-black text-accent">SOON</div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={client.image} 
                    alt={client.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Play Button or Instagram Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {client.isInstagram ? (
                    <div 
                      className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                      onClick={() => window.open(client.image, '_blank')}
                    >
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                  ) : !client.isComingSoon && (
                    <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {client.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;