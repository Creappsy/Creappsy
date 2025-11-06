
import React from 'react';
import Section from '../Section';
import { SERVICES } from '../../constants';
import type { Service } from '../../types';
import AICopyGenerator from '../AICopyGenerator';

const ServicesSection: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Ofrecemos un abanico completo de soluciones digitales para llevar tu negocio al siguiente nivel.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service: Service) => (
          <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700">
                {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
      <AICopyGenerator />
    </Section>
  );
};

export default ServicesSection;