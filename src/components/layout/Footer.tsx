import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Wellness<span className="text-[#ff6b00]">Coach</span></h3>
              <p className="text-gray-400">
                Helping professionals achieve their wellness goals without compromising their lifestyle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  'Personal Coaching',
                  'Nutrition Planning',
                  'Fitness Programs',
                  'Mental Wellness',
                  'Group Sessions'
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2">
                    <Mail size={16} />
                    contact@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-[#ff6b00] transition-colors duration-300 flex items-center gap-2">
                    <Phone size={16} />
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>123 Wellness Street<br />Healthy City, HC 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} WellnessCoach. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;