import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import waveGraphic from "@/assets/3search-wave-white.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Wave graphic decorative element */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center opacity-10">
        <img src={waveGraphic} alt="" className="w-full max-w-4xl" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Venture Capital
          </p>

          {/* Main headline */}
          <h1 className="font-body text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Discovering the
            <br />
            <span className="text-gradient-blue">Future of Innovation</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-gray-muted max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            We partner with exceptional founders building transformative companies 
            at the intersection of technology and human potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl">
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Investment Thesis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <p className="font-body text-4xl md:text-5xl text-primary font-bold">$500M+</p>
              <p className="font-body text-sm text-gray-muted mt-2 tracking-wide">Assets Under Management</p>
            </div>
            <div className="text-center">
              <p className="font-body text-4xl md:text-5xl text-primary font-bold">45+</p>
              <p className="font-body text-sm text-gray-muted mt-2 tracking-wide">Portfolio Companies</p>
            </div>
            <div className="text-center">
              <p className="font-body text-4xl md:text-5xl text-primary font-bold">12</p>
              <p className="font-body text-sm text-gray-muted mt-2 tracking-wide">Unicorn Exits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  );
};

export default Hero;
