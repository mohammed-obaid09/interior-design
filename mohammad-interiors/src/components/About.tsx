import { motion } from 'motion/react';
import aboutImg from '../assets/images/about_interior_1780239156983.png';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '150+' },
    { label: 'Happy Clients', value: '150+' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Interior Design Studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary -z-10 hidden sm:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">About Us</h2>
            <h3 className="text-4xl sm:text-5xl font-serif font-medium leading-tight mb-8 text-primary">
              Every space tells a story. We help draft yours.
            </h3>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-12">
              <p>
                LuxeSpace Interiors is a full-service interior design studio specializing in residential, commercial, and luxury interior projects. We create functional, elegant, and personalized spaces that reflect our clients' lifestyles and business goals.
              </p>
              <p>
                With over 5 years of experience, our team combines creativity, innovation, and attention to detail to deliver exceptional interior solutions. From concept development to final execution, we ensure a seamless design journey.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl sm:text-4xl font-serif text-primary mb-2">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
