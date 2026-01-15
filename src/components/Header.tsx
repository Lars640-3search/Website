import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import logoWhite from "@/assets/3search-logo-white.png";

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
      isDark 
        ? 'bg-[hsl(220,20%,6%)]/80 border-white/10' 
        : 'bg-white/80 border-black/10'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img 
            src={logoWhite} 
            alt="3Search Capital" 
            className={`h-10 w-auto transition-all duration-500 ${!isDark ? 'invert' : ''}`} 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Portfolio', 'Team', 'Contact', 'Invest'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide ${
                isDark ? 'text-white/70' : 'text-black/70'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="/dashboard"
            className={`hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide ${
              isDark ? 'text-white/70' : 'text-black/70'
            }`}
          >
            Dashboard
          </a>
        </nav>

        <Button 
          variant="heroOutline" 
          size="sm" 
          className={`hidden md:inline-flex ${
            !isDark ? 'border-primary text-primary hover:bg-primary hover:text-white' : ''
          }`}
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
