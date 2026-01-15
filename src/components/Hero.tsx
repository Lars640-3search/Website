import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import waveGraphic from "@/assets/3search-wave-white.png";
const Hero = () => {
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  return <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[hsl(220,20%,6%)]' : 'bg-primary'}`}>
      {/* Subtle grid pattern */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}>
        <div className="absolute inset-0" style={{
        backgroundImage: isDark ? `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)` : `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      </div>

      {/* Floating accent elements */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-primary/10' : 'bg-white/10'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark ? 'bg-primary/5' : 'bg-white/5'}`} style={{
      animationDelay: '1s'
    }} />

      {/* Wave graphic decorative element */}
      <div className={`absolute bottom-20 left-0 right-0 flex justify-center ${isDark ? 'opacity-10' : 'opacity-20'}`}>
        <img src={waveGraphic} alt="" className="w-full max-w-4xl" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p className={`font-body text-sm tracking-[0.3em] uppercase opacity-0 animate-fade-in ${isDark ? 'text-primary' : 'text-white/80'}`} style={{
          animationDelay: '0.2s'
        }}>
            Venture Capital
          </p>

          {/* Main headline */}
          <h1 className="font-body text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white opacity-0 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            Discovering the
            <br />
            <span className={isDark ? 'text-gradient-blue' : 'text-white'}>Future of Innovation</span>
          </h1>

          {/* Subheadline */}
          <p className={`font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in ${isDark ? 'text-gray-muted' : 'text-white/80'}`} style={{
          animationDelay: '0.6s'
        }}>
            We partner with exceptional founders building transformative companies 
            at the intersection of technology and human potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <Button variant="hero" size="xl" className={isDark ? '' : 'bg-white text-primary hover:bg-white/90 shadow-lg'}>
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className={isDark ? '' : 'border-white text-white hover:bg-white hover:text-primary'}>
              Our Investment Thesis
            </Button>
          </div>

          {/* Stats */}
          
        </div>
      </div>

      {/* Bottom fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent ${isDark ? 'from-[hsl(220,20%,6%)]' : 'from-white'}`} />
    </section>;
};
export default Hero;