import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from './types';

interface ServiceCardProps {
  service: ServiceType;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const Icon = service.icon;
  
  return (
    <div 
      onClick={onClick}
      className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
    >
      <div className="flex flex-col h-full">
        <div className="p-3 bg-[#ff6b00]/10 rounded-lg w-fit mb-4 group-hover:bg-[#ff6b00]/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-[#ff6b00]" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 flex-grow">{service.description}</p>
        
        <div className="mt-4 flex items-center text-[#ff6b00] group-hover:gap-2 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};