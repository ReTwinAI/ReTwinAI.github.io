import { motion } from "framer-motion";

export default function SolutionProcess() {
  const steps = [
    {
      number: "1",
      title: "End-to-End Data Modeling",
      description: "Comprehensive data integration and modeling across all utility infrastructure components with temporal and geographic mapping capabilities.",
      color: "bg-brand-green"
    },
    {
      number: "2",
      title: "AI-Driven Solution Analysis",
      description: "Advanced machine learning algorithms analyze patterns and anomalies to provide intelligent recommendations for optimal resource management.",
      color: "bg-brand-blue"
    },
    {
      number: "3",
      title: "Forecasting & Network Optimization",
      description: "Predictive modeling for demand forecasting and automated network optimization to prevent waste and improve efficiency.",
      color: "bg-brand-cyan"
    },
    {
      number: "4",
      title: "Interactive Dashboard & Visualization",
      description: "Real-time dashboards with intuitive visualizations that make complex data accessible to all stakeholders across your organization.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-brand-gray mb-4">Our Solution in Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive end-to-end platform that transforms raw data into actionable insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`${step.color} text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                  <span className="font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-2">{step.title}</h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Data visualization dashboard interface" 
              className="rounded-2xl shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
