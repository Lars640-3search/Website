import { useTheme } from "@/contexts/ThemeContext";
const teamMembers = [{
  name: "Alexandra Chen",
  role: "Managing Partner",
  bio: "Former Google Ventures. 15+ years in tech investing."
}, {
  name: "Marcus Williams",
  role: "General Partner",
  bio: "Ex-Sequoia. Led investments in 8 unicorns."
}, {
  name: "Sarah Mitchell",
  role: "Partner",
  bio: "Former CTO. Deep expertise in AI/ML."
}];
const Team = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <section id="team" className={`py-32 relative transition-colors duration-500 ${
      isDark ? 'bg-[hsl(220,20%,6%)]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Team
          </p>
          <h2 className={`font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Meet the <span className="text-gradient-blue">Partners</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className={`p-8 rounded-xl border transition-all duration-500 hover:shadow-blue ${
                isDark 
                  ? 'bg-[hsl(220,18%,10%)] border-white/10 hover:border-primary/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-primary/50'
              }`}
            >
              <h3 className={`font-body text-xl font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {member.name}
              </h3>
              <p className="text-primary font-body text-sm mb-4">{member.role}</p>
              <p className={`font-body text-sm leading-relaxed ${
                isDark ? 'text-gray-muted' : 'text-gray-600'
              }`}>
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