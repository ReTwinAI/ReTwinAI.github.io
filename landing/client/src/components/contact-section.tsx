import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Rocket, Headphones, Shield, Calendar, Download, PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  newsletter: boolean;
  requestType: "demo" | "contact";
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    newsletter: false,
    requestType: "contact"
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
        newsletter: false,
        requestType: "contact"
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleRequestDemo = () => {
    setFormData(prev => ({ ...prev, requestType: "demo", message: "I would like to request a demo of Utility Twin." }));
  };

  const features = [
    {
      icon: Rocket,
      title: "Quick Implementation",
      description: "Get up and running in weeks, not months",
      color: "bg-brand-green"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Dedicated team for onboarding and ongoing support",
      color: "bg-brand-blue"
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Measurable ROI within the first quarter",
      color: "bg-brand-cyan"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-brand-gray mb-4">Ready to Transform Your Utility Operations?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join forward-thinking utility companies who are already saving water, time, and resources 
                with our data-driven platform. Get started today with a personalized demo.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${feature.color} text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-gray mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleRequestDemo}
                className="bg-brand-green text-white px-8 py-4 rounded-xl hover:bg-emerald-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg h-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-xl hover:bg-brand-green hover:text-white transition-all font-semibold text-lg h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-brand-gray mb-6">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Email *</label>
                    <Input
                      type="email"
                      placeholder="john.doe@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <Input
                      type="text"
                      placeholder="Your Utility Company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us about your utility operations and challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our newsletter for industry insights
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-brand-green text-white py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg h-auto"
                  >
                    <PlaneTakeoff className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
