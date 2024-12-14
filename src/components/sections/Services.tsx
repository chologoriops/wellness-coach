import React, { useState } from 'react';
import { services } from './Services/data';
import { ServiceCard } from './Services/ServiceCard';
import { ServiceModal } from './Services/ServiceModal';
import { ServiceType } from './Services/types';

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <section id="services" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#ff6b00]/10 rounded-full mb-4">
              <span className="text-[#ff6b00] font-medium">What We Offer</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive wellness solutions designed to fit your busy lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;