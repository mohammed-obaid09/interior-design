import { motion } from 'motion/react';
import heroImg from '../assets/images/hero_interior_1780239137144.png';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Modern Luxury Living Room"
          className="object-cover w-full h-full scale-105 transform transform-gpu"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 text-center text-white mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base uppercase tracking-[0.3em] font-light mb-6 text-white/90"
        >
          mohammad Interiors
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 drop-shadow-lg"
        >
          Transforming Spaces <br className="hidden md:block"/> into Timeless Experiences
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-primary text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Book Consultation <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
