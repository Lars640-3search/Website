import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/3search-logo-white.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-card border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="3Search Capital" className="h-8 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#thesis" className="text-gray-muted hover:text-primary transition-colors duration-300 font-body text-sm">
              Thesis
            </a>
            <a href="#portfolio" className="text-gray-muted hover:text-primary transition-colors duration-300 font-body text-sm">
              Portfolio
            </a>
            <a href="#team" className="text-gray-muted hover:text-primary transition-colors duration-300 font-body text-sm">
              Team
            </a>
            <a href="#contact" className="text-gray-muted hover:text-primary transition-colors duration-300 font-body text-sm">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-muted hover:text-primary transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-muted hover:text-primary transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-body text-sm text-gray-muted">
            © {new Date().getFullYear()} 3Search Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
