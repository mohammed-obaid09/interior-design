import { motion } from 'motion/react';
import projectImg from '../assets/images/project_modern_apt_1780239178789.png';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Luxury Apartment',
      location: 'Hyderabad',
      category: 'Residential',
      area: '2500 sq.ft',
      description: 'Contemporary apartment featuring premium finishes, custom furniture, and smart lighting solutions.',
      image: projectImg,
    }
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Featured Work</h2>
            <h3 className="text-4xl sm:text-5xl font-serif text-primary">Selected Projects</h3>
          </div>
          <button className="text-sm uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors flex items-center gap-2">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex gap-4 text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
                <h4 className="text-3xl sm:text-4xl font-serif text-primary">{project.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-gray-100 flex gap-12">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-1">Area</p>
                    <p className="font-serif text-primary text-xl">{project.area}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
