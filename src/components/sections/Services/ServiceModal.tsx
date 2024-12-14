import React from 'react';
import { X } from 'lucide-react';
import { ServiceType } from './types';

interface ModalProps {
  service: ServiceType;
  onClose: () => void;
}

export const ServiceModal: React.FC<ModalProps> = ({ service, onClose }) => {
  const Icon = service.icon;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#0A0F1C] rounded-2xl p-8 max-w-2xl w-full border border-gray-700">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#ff6b00]/10 rounded-lg">
            <Icon className="w-6 h-6 text-[#ff6b00]" />
          </div>
          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">{service.details}</p>
        
        <button 
          onClick={onClose}
          className="w-full py-3 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#ff6b00]/90 transition-colors duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};