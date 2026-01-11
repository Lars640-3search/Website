import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Let's Build the <span className="text-gradient-gold">Future Together</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're a founder with a bold vision or an LP looking for 
            a partner in innovation, we'd love to hear from you.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="mb-16">
            Submit Your Pitch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
            <a href="mailto:hello@3searchcapital.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="font-body">hello@3searchcapital.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
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
