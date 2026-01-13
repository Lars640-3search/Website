import { Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logoWhite from "@/assets/3search-logo-white.png";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${
      isDark 
        ? 'bg-[hsl(220,18%,10%)] border-white/10' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoWhite} 
              alt="3Search Capital" 
              className={`h-8 w-auto transition-all duration-500 ${!isDark ? 'invert' : ''}`} 
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {['Thesis', 'Portfolio', 'Team', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`hover:text-primary transition-colors duration-300 font-body text-sm ${
                  isDark ? 'text-gray-muted' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className={`hover:text-primary transition-colors duration-300 ${
              isDark ? 'text-gray-muted' : 'text-gray-600'
            }`}>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className={`hover:text-primary transition-colors duration-300 ${
              isDark ? 'text-gray-muted' : 'text-gray-600'
            }`}>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t text-center ${
          isDark ? 'border-white/10' : 'border-gray-200'
        }`}>
          <p className={`font-body text-sm ${isDark ? 'text-gray-muted' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} 3Search Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
