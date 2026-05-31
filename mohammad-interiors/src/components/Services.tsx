import { motion } from 'motion/react';
import { Home, Briefcase, Grid, Compass } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home size={32} strokeWidth={1.5} />,
      title: 'Residential Design',
      points: ['Living Room Design', 'Bedroom Design', 'Kitchen Design', 'Bathroom Renovation', 'Home Styling'],
    },
    {
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      title: 'Commercial Design',
      points: ['Office Interiors', 'Retail Store Design', 'Restaurant Interiors', 'Co-working Spaces'],
    },
    {
      icon: <Grid size={32} strokeWidth={1.5} />,
      title: 'Modular Solutions',
      points: ['Modular Kitchens', 'Wardrobes', 'TV Units', 'Storage Solutions'],
    },
    {
      icon: <Compass size={32} strokeWidth={1.5} />,
      title: 'Design Consultation',
      points: ['Space Planning', 'Material Selection', 'Color Consultation', 'Furniture Planning'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Our Expertise</h2>
          <h3 className="text-4xl sm:text-5xl font-serif text-primary">Bespoke Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif text-primary mb-6">{service.title}</h4>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-500 font-light flex items-start">
                    <span className="text-accent mr-2 mt-1 block h-1 w-1 rounded-full bg-accent flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
