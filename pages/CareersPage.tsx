import React from 'react';
import Section from '../components/Section';
import { CONTACT_EMAIL } from '../constants';

const CareersPage: React.FC = () => {
    return (
        <>
            <Section id="careers-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Únete a Nuestro Equipo</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Buscamos personas apasionadas por la tecnología y la creatividad para construir el futuro digital.
                    </p>
                </div>
            </Section>

            <Section id="cultura">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestra Cultura</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
                        En Creappsy, fomentamos un ambiente de colaboración, aprendizaje continuo y crecimiento. Creemos en el poder de un equipo diverso para crear soluciones extraordinarias. Valoramos la autonomía, la proactividad y la pasión por la excelencia.
                    </p>
                </div>
            </Section>
            
            <Section id="posiciones" className="bg-slate-950/50">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Posiciones Abiertas</h2>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700">
                    <p className="text-lg text-slate-300">Actualmente no tenemos posiciones abiertas.</p>
                    <p className="mt-2 text-slate-400">Sin embargo, siempre estamos en busca de talento excepcional. Si crees que puedes aportar a nuestro equipo, no dudes en enviarnos tu CV.</p>
                    <a href={`mailto:${CONTACT_EMAIL}?subject=Oportunidad de Carrera en Creappsy`} className="mt-6 inline-block px-6 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all">
                        Enviar CV
                    </a>
                </div>
            </Section>
        </>
    );
};

export default CareersPage;
