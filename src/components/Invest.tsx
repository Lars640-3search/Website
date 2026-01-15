import { TrendingUp, DollarSign, BarChart3, Users } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const investmentStats = [
  { icon: DollarSign, value: "$50M+", label: "Assets Under Management" },
  { icon: TrendingUp, value: "32%", label: "Average Annual Return" },
  { icon: BarChart3, value: "15+", label: "Portfolio Companies" },
  { icon: Users, value: "500+", label: "Active Investors" }
];

const Invest = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="invest" className={`py-32 relative transition-colors duration-500 ${
      isDark ? 'bg-[hsl(220,20%,6%)]' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Investment Opportunities
          </p>
          <h2 className={`font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Join Us in Shaping
            <br />
            <span className="text-gradient-blue">The Future</span>
          </h2>
          <p className={`font-body text-lg leading-relaxed ${
            isDark ? 'text-gray-muted' : 'text-gray-600'
          }`}>
            Partner with 3Search Capital to access exclusive investment opportunities 
            in the most promising technology companies. Our rigorous selection process 
            ensures only the highest-potential ventures make it to our portfolio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {investmentStats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`p-6 rounded-xl border text-center transition-all duration-500 hover:shadow-blue ${
                isDark 
                  ? 'bg-[hsl(220,18%,10%)] border-white/10 hover:border-primary/30' 
                  : 'bg-gray-50 border-gray-200 hover:border-primary/50'
              }`}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className={`font-body text-3xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </p>
              <p className={`font-body text-sm ${
                isDark ? 'text-gray-muted' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`p-10 rounded-2xl border text-center ${
          isDark 
            ? 'bg-gradient-to-r from-primary/10 to-primary-light/10 border-primary/20' 
            : 'bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/20'
        }`}>
          <h3 className={`font-body text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Invest?
          </h3>
          <p className={`font-body mb-8 max-w-xl mx-auto ${
            isDark ? 'text-gray-muted' : 'text-gray-600'
          }`}>
            Schedule a consultation with our investment team to explore 
            opportunities that align with your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant={isDark ? "hero" : "default"}
              size="lg"
              className={!isDark ? 'bg-primary text-white hover:bg-primary-dark' : ''}
            >
              Start Investing
            </Button>
            <Button 
              variant="heroOutline"
              size="lg"
              className={!isDark ? 'border-primary text-primary hover:bg-primary hover:text-white' : ''}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
