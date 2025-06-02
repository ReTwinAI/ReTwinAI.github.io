import { motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Adithya Ramachandran",
      title: "PhD Researcher",
      expertise: "Specializing in advanced data modeling and AI-driven optimization for utility systems",
      initials: "AR",
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      name: "Malte Hitpaß",
      title: "Medicine Student",
      expertise: "Bringing interdisciplinary perspective to sustainable health and environmental solutions",
      initials: "MH",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      name: "Rifaath Ameen",
      title: "Master's Student - AI",
      expertise: "Developing cutting-edge artificial intelligence algorithms for predictive analytics",
      initials: "RA",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      name: "Karla Hausel",
      title: "Master's Student - IIS",
      expertise: "Focusing on international information systems and cross-platform integration",
      initials: "KH",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-brand-gray mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600">Combining deep research expertise with practical industry experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-24 h-24 ${member.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{member.initials}</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-gray mb-2">{member.name}</h3>
                <p className="text-brand-green font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">
                  {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
