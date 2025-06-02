import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I feel confident in my decision making.",
      role: "Operations Manager",
      company: "Metropolitan Water District",
      color: "text-brand-green",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      quote: "Discovering the real potential of our data.",
      role: "Data Analytics Director",
      company: "Regional Utility Company",
      color: "text-brand-blue",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      quote: "I can feel our productivity increase.",
      role: "Engineering Team Lead",
      company: "City Water Authority",
      color: "text-brand-cyan",
      bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-brand-gray mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real feedback from utility professionals who've transformed their operations</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`${testimonial.bgColor} p-8 rounded-2xl border ${testimonial.borderColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.color.replace('text-', 'bg-')} rounded-full flex items-center justify-center`}>
                  <Quote className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <div className={`flex ${testimonial.color} text-lg`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg font-medium mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-brand-gray">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
