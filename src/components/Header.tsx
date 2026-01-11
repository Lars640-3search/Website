import { Button } from "@/components/ui/button";
import logo from "@/assets/3search-logo-white.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="3Search Capital" className="h-10 w-auto" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#thesis" className="text-white/70 hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide">
            Thesis
          </a>
          <a href="#portfolio" className="text-white/70 hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide">
            Portfolio
          </a>
          <a href="#team" className="text-white/70 hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide">
            Team
          </a>
          <a href="#contact" className="text-white/70 hover:text-primary transition-colors duration-300 font-body text-sm tracking-wide">
            Contact
          </a>
        </nav>

        <Button variant="heroOutline" size="sm" className="hidden md:inline-flex">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
