const StatsSection = () => {
  const stats = [
    { number: "40+", text: "videos created for brands and creators" },
    { number: "20+", text: "clients worldwide" },
    { number: "5+", text: "years experience" }
  ];

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="font-heading font-black text-4xl md:text-5xl bg-gradient-text bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;