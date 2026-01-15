import { Cpu, Globe, Shield, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const focusAreas = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Machine learning infrastructure, generative AI, and intelligent automation reshaping industries."
  },
  {
    icon: Globe,
    title: "Enterprise Software",
    description: "Next-generation SaaS platforms driving productivity and transformation in the modern workplace."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat detection, identity management, and data protection for the digital age."
  },
  {
    icon: Zap,
    title: "Climate Tech",
    description: "Breakthrough technologies accelerating the transition to a sustainable global economy."
  }
];

const Thesis = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="home" className={`py-32 relative transition-colors duration-500 ${
      isDark ? 'bg-[hsl(220,18%,10%)]' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Investment Thesis
          </p>
          <h2 className={`font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Backing Founders Who
            <br />
            <span className="text-gradient-blue">Define Categories</span>
          </h2>
          <p className={`font-body text-lg leading-relaxed ${
            isDark ? 'text-gray-muted' : 'text-gray-600'
          }`}>
            We invest in early-stage companies where technology innovation intersects 
            with massive market opportunity. Our focus spans four key areas where we 
            believe transformational change is inevitable.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <div 
              key={area.title}
              className={`group p-8 rounded-xl border transition-all duration-500 hover:shadow-blue ${
                isDark 
                  ? 'bg-[hsl(220,20%,6%)] border-white/10 hover:border-primary/30' 
                  : 'bg-white border-gray-200 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <area.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-body text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {area.title}
                  </h3>
                  <p className={`font-body leading-relaxed ${
                    isDark ? 'text-gray-muted' : 'text-gray-600'
                  }`}>
                    {area.description}
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

export default Thesis;
