import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../Section';
import { SERVICES } from '../../constants';
import type { Service } from '../../types';
import AICopyGenerator from '../AICopyGenerator';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tl = anime.timeline({
                    easing: 'easeOutExpo',
                    duration: 800,
                });

                tl.add({
                    targets: entry.target.querySelectorAll('.services-title > *'),
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(200),
                })
                .add({
                    targets: entry.target.querySelectorAll('.service-card'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(200),
                }, '-=400');

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section);
    return () => { if (section) observer.unobserve(section) };
  }, []);
  
  return (
    <Section ref={sectionRef} id="services">
      <div className="text-center services-title">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Ofrecemos un abanico completo de soluciones digitales para llevar tu negocio al siguiente nivel.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service: Service) => (
          <a key={service.title} href={service.href} className="service-card block bg-slate-800/50 p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700">
                {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
          </a>
        ))}
      </div>
      <AICopyGenerator />
    </Section>
  );
};

export default ServicesSection;