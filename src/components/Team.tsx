const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Managing Partner",
    bio: "Former Google Ventures. 15+ years in tech investing."
  },
  {
    name: "Marcus Williams",
    role: "General Partner",
    bio: "Ex-Sequoia. Led investments in 8 unicorns."
  },
  {
    name: "Sarah Mitchell",
    role: "Partner",
    bio: "Former CTO. Deep expertise in AI/ML."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-dark-card relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Experienced <span className="text-gradient-blue">Operators & Investors</span>
          </h2>
          <p className="font-body text-lg text-gray-muted leading-relaxed">
            Our partners bring decades of operating experience and investment 
            expertise to support founders at every stage of growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="group text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/5 to-white/10 overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-body text-5xl text-primary/50 font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <h3 className="font-body text-2xl font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="font-body text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="font-body text-gray-muted text-sm max-w-xs mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
