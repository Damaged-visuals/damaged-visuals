import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "FANUM",
      rating: 5,
      review: "These guys absolutely destroyed it! The brand ad was exactly what we needed to stand out."
    },
    {
      name: "KLAW", 
      rating: 5,
      review: "My stream intro is fire! The quality is insane and my viewers love the animations."
    },
    {
      name: "IJW",
      rating: 5,
      review: "Professional work, fast delivery, and they really understand the vision. Highly recommend!"
    },
    {
      name: "FAEGOS",
      rating: 5,
      review: "The 3D visuals are next level. They completely transformed our content game."
    },
    {
      name: "QUAPHA",
      rating: 5,
      review: "Working with Damaged Visuals was smooth from start to finish. Amazing results!"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">REVIEWS</span>
          </div>
          
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">WHAT CLIENTS</span>
            <br />
            <span className="text-foreground">SAY</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from creators who've had their screens damaged.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 hover:shadow-neon"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                "{review.review}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-background">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {review.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;