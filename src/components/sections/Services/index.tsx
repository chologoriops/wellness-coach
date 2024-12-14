import React, { useState } from 'react';
import { services } from './data';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { ServiceType } from './types';

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <section id="services" className="py-24 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive wellness solutions tailored to your unique journey
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