import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ThemeSwitcher />
        <Header />
        <Hero />
        <Thesis />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
