const portfolioCompanies = [
  { name: "NeuraTech", sector: "AI/ML", stage: "Series B" },
  { name: "CloudShield", sector: "Cybersecurity", stage: "Series A" },
  { name: "GreenVolt", sector: "Climate Tech", stage: "Series C" },
  { name: "DataForge", sector: "Enterprise", stage: "Series B" },
  { name: "QuantumPath", sector: "AI/ML", stage: "Seed" },
  { name: "SecureNet", sector: "Cybersecurity", stage: "Series A" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Companies We've <span className="text-gradient-gold">Backed</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            From seed to scale, we partner with visionary founders building 
            category-defining companies across our focus sectors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {portfolioCompanies.map((company, index) => (
            <div 
              key={company.name}
              className="group relative p-8 md:p-10 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 text-center"
            >
              {/* Company Logo Placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-display text-2xl text-primary font-semibold">
                  {company.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">
                {company.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {company.sector}
              </p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body">
                {company.stage}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground">
            And many more across our portfolio companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
