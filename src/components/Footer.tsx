import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-foreground">
              3<span className="text-gradient-gold">Search</span> Capital
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#thesis" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">
              Thesis
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">
              Portfolio
            </a>
            <a href="#team" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">
              Team
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} 3Search Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
