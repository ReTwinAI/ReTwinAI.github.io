import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <motion.nav 
      className="bg-white shadow-sm fixed w-full top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Droplets className="text-brand-cyan text-2xl mr-3" />
            <span className="text-2xl font-bold text-brand-gray">Utility Twin</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("solutions")}
              className="text-gray-600 hover:text-brand-green transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-brand-green transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("team")}
              className="text-gray-600 hover:text-brand-green transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-brand-green transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToContact}
              className="bg-brand-green text-white hover:bg-emerald-600 font-medium hidden md:flex"
            >
              Request Demo
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("solutions")}
                className="text-gray-600 hover:text-brand-green transition-colors text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-brand-green transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("team")}
                className="text-gray-600 hover:text-brand-green transition-colors text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-brand-green transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={scrollToContact}
                className="bg-brand-green text-white hover:bg-emerald-600 font-medium w-fit"
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
