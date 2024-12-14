import React from 'react';
import { Target, Trophy, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#ff6b00]/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
                alt="About Tanvir"
                className="relative rounded-2xl object-cover w-full h-[600px]"
              />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full">
                <span className="text-[#ff6b00] font-medium">About Me</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white">Your Journey to Wellness Starts Here</h2>
              
              <p className="text-gray-300">
                With over a decade of experience in wellness coaching, I've helped hundreds of busy professionals transform their lives through sustainable health practices. My approach combines science-backed strategies with practical, real-world solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: 'Personalized',
                    description: 'Custom plans tailored to your lifestyle'
                  },
                  {
                    icon: Trophy,
                    title: 'Results-Driven',
                    description: 'Proven methods for lasting success'
                  },
                  {
                    icon: Heart,
                    title: 'Supportive',
                    description: 'Continuous guidance and motivation'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                    <item.icon className="w-6 h-6 text-[#ff6b00] mb-2" />
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;