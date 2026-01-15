import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="contact" className={`py-32 relative overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[hsl(220,18%,10%)]' : 'bg-gray-50'
    }`}>
      {/* Background accent */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent`} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className={`font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Build the <span className="text-gradient-blue">Future Together</span>
          </h2>
          <p className={`font-body text-lg leading-relaxed mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-muted' : 'text-gray-600'
          }`}>
            Whether you're a founder with a bold vision or an LP looking for 
            a partner in innovation, we'd love to hear from you.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="mb-16">
            Submit Your Pitch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Contact Info */}
          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }`}>
            <a href="mailto:hello@3searchcapital.com" className={`flex items-center gap-3 hover:text-primary transition-colors duration-300 ${
              isDark ? 'text-gray-muted' : 'text-gray-600'
            }`}>
              <Mail className="h-5 w-5" />
              <span className="font-body">hello@3searchcapital.com</span>
            </a>
            <div className={`flex items-center gap-3 ${isDark ? 'text-gray-muted' : 'text-gray-600'}`}>
              <MapPin className="h-5 w-5" />
              <span className="font-body">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
