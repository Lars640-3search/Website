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
    <section id="portfolio" className="py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Companies We've <span className="text-gradient-blue">Backed</span>
          </h2>
          <p className="font-body text-lg text-gray-muted leading-relaxed">
            From seed to scale, we partner with visionary founders building 
            category-defining companies across our focus sectors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {portfolioCompanies.map((company) => (
            <div 
              key={company.name}
              className="group relative p-8 md:p-10 rounded-xl bg-dark-card border border-white/10 hover:border-primary/50 transition-all duration-500 text-center"
            >
              {/* Company Logo Placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <span className="font-body text-2xl text-primary font-bold">
                  {company.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="font-body text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {company.name}
              </h3>
              <p className="font-body text-sm text-gray-muted">
                {company.sector}
              </p>
              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium">
                {company.stage}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-gray-muted">
            And many more across our portfolio companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
