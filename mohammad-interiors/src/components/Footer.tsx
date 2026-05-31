import { Instagram, Facebook, Linkedin, PinIcon as Pinterest } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <a href="#home" className="text-2xl font-serif font-semibold tracking-wide text-white block mb-6">
            LuxeSpace
          </a>
          <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
            Transforming Spaces into Timeless Experiences. Serving Hyderabad with premium interior design.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors">
              <Pinterest size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors font-light text-sm">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors font-light text-sm">About Us</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors font-light text-sm">Services</a></li>
            <li><a href="#portfolio" className="text-gray-400 hover:text-accent transition-colors font-light text-sm">Portfolio</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Services</h4>
          <ul className="space-y-3">
            <li className="text-gray-400 font-light text-sm">Residential Design</li>
            <li className="text-gray-400 font-light text-sm">Commercial Interiors</li>
            <li className="text-gray-400 font-light text-sm">Modular Solutions</li>
            <li className="text-gray-400 font-light text-sm">Space Planning</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Contact</h4>
          <ul className="space-y-4">
            <li className="text-gray-400 font-light text-sm">
              <span className="block text-white mb-1">Phone</span>
              +91 7093759541 <br /> +91 9515568814
            </li>
            <li className="text-gray-400 font-light text-sm">
              <span className="block text-white mb-1">Email</span>
              obaidmohammad009@gmail.com
            </li>
            <li className="text-gray-400 font-light text-sm">
              <span className="block text-white mb-1">Location</span>
              Hyderabad, Telangana, India
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-light flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Mohammad Interiors (LuxeSpace). All rights reserved.</p>
        <div className="space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
