import React from 'react';
import Section from '../components/Section';
import ServicesSection from '../components/sections/ServicesSection';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Section id="services-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Soluciones Digitales a tu Medida</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Desde desarrollo web hasta marketing de alto impacto, te ofrecemos las herramientas para crecer.
                    </p>
                </div>
            </Section>
            <ServicesSection />
        </>
    );
};

export default ServicesPage;
