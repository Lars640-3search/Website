import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Let's Build the <span className="text-gradient-blue">Future Together</span>
          </h2>
          <p className="font-body text-lg text-gray-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're a founder with a bold vision or an LP looking for 
            a partner in innovation, we'd love to hear from you.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="mb-16">
            Submit Your Pitch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
            <a href="mailto:hello@3searchcapital.com" className="flex items-center gap-3 text-gray-muted hover:text-primary transition-colors duration-300">
              <Mail className="h-5 w-5" />
              <span className="font-body">hello@3searchcapital.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-muted">
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
