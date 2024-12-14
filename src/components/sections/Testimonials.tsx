import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "Working with Tanvir has been transformative. I've lost 20 pounds and gained so much energy without giving up my favorite foods.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content: "The flexible program fits perfectly into my busy schedule. Tanvir's approach is practical and sustainable.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content: "Finally found a wellness program that actually works with my lifestyle. The results speak for themselves!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
              <span className="text-[#ff6b00] font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">What My Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from real people who've transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ff6b00] text-[#ff6b00]" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;