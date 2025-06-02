import { Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ValuePropositions() {
  const propositions = [
    {
      icon: Clock,
      title: "Time Saving",
      description: "Automate complex data analysis processes and reduce decision-making time from weeks to hours with our intelligent automation platform.",
      color: "text-brand-green",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: Users,
      title: "Cross-Team Collaboration",
      description: "Unite operations, engineering, and management teams with shared insights and collaborative decision-making tools in one unified platform.",
      color: "text-brand-blue",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: TrendingUp,
      title: "Resource Optimization",
      description: "Maximize efficiency and minimize waste through predictive analytics and real-time optimization of your utility infrastructure and operations.",
      color: "text-brand-cyan",
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-brand-gray mb-4">Our Core Value Proposition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your utility operations with our comprehensive data-driven platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <motion.div
              key={prop.title}
              className={`${prop.bgColor} p-8 rounded-2xl hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${prop.color.replace('text-', 'bg-')} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <prop.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-gray mb-4">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
