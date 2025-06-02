import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-gray leading-tight">
                Smart Solution – 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
                  Sustainable Impact
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We enable utility companies to make data-driven decisions through temporal and geographic insights, 
                resulting in significant water savings and enhanced sustainability with minimal time effort.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-brand-green text-brand-green px-6 py-3 rounded-xl hover:bg-brand-green hover:text-white transition-all font-medium text-base h-auto"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>

            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green">40%</div>
                <div className="text-sm text-gray-600">Water Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">60%</div>
                <div className="text-sm text-gray-600">Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-cyan">95%</div>
                <div className="text-sm text-gray-600">Decision Accuracy</div>
              </div>
            </motion.div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
}
