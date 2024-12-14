import React from 'react';
import { ArrowRight, Award, Clock, Smile } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0A0F1C]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(79, 79, 79, 0.18) 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/50 to-[#0A0F1C]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full">
                <span className="text-[#ff6b00] font-medium">
                  Professional Wellness Coach
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-[#ff6b00]">Tanvir Hasan</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Helping working professionals lose weight & boost their energy
                without giving up their favorite food
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#ff6b00] text-white rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { icon: Award, label: '7+ Years Experience' },
                  { icon: Smile, label: '500+ Success Stories' },
                  { icon: Clock, label: 'Flexible Programs' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 bg-gray-800/30 rounded-lg"
                  >
                    <item.icon className="w-6 h-6 text-[#ff6b00] mb-2" />
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
                <img
                  src="Public/Images/profile.png"
                  alt="Tanvir Hasan"
                  className="relative rounded-2xl object-cover w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
