import { Droplets } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-gray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Droplets className="text-brand-cyan text-3xl mr-4" />
              <span className="text-3xl font-bold">Utility Twin</span>
            </div>
            <p className="text-gray-300 text-lg max-w-md">
              Smart Solution – Sustainable Impact. Empowering utility companies with data-driven insights 
              for a more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-green hover:bg-emerald-600 p-3 rounded-lg transition-colors">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="#" className="bg-brand-blue hover:bg-blue-600 p-3 rounded-lg transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="bg-brand-cyan hover:bg-cyan-600 p-3 rounded-lg transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-brand-green transition-colors">Data Modeling</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">AI Analysis</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Forecasting</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Optimization</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Dashboards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-brand-green transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:text-brand-green transition-colors"
                >
                  Team
                </button>
              </li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Careers</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-brand-green transition-colors"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Utility Twin. All rights reserved. | Transforming utilities through intelligent data solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
