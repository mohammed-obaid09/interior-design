import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-semibold">Get In Touch</h2>
            <h3 className="text-4xl sm:text-5xl font-serif text-primary mb-8 leading-tight">
              Ready to transform your space?
            </h3>
            <p className="text-gray-500 font-light leading-relaxed mb-12">
              We'd love to hear about your project. Fill out the form, and our design team will get back to you within 24 hours to schedule your consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-accent mr-6 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">Phone</h4>
                  <p className="text-gray-500 font-light">+91 7093759541</p>
                  <p className="text-gray-500 font-light">+91 9515568814</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-accent mr-6 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">Email</h4>
                  <p className="text-gray-500 font-light">obaidmohammad009@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-accent mr-6 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">Office</h4>
                  <p className="text-gray-500 font-light">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary p-8 sm:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Decorative line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            
            <h4 className="text-2xl font-serif text-primary mb-8">Project Inquiry</h4>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-gray-600">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Modular Kitchen</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-gray-600">
                    <option>₹5L - ₹10L</option>
                    <option>₹10L - ₹25L</option>
                    <option>₹25L+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us a little about your space..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
