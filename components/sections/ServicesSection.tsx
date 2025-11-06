import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../Section';
import { SERVICES } from '../../constants';
import type { Service } from '../../types';
import AICopyGenerator from '../AICopyGenerator';

const Squares2X2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
                const tl = (anime as any).timeline({
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
        <div className="flex justify-center items-center gap-x-3">
            <Squares2X2Icon className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
        </div>
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