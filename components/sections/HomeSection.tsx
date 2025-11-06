
import React from 'react';
import Section from '../Section';

const HomeSection: React.FC = () => {
  return (
    <Section id="home" className="!pt-32 !pb-20 md:!pt-48 md:!pb-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-purple-600/20 to-cyan-500/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
          Creamos Experiencias Digitales que <span className="text-cyan-400">Inspiran</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400">
          En Creappsy, convertimos tus ideas en sitios web y estrategias de marketing que no solo lucen increíbles, sino que también generan resultados.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
            Ver Proyectos
          </a>
          <a href="#contact" className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-center text-cyan-300 bg-slate-800/50 border border-slate-700 rounded-md hover:bg-slate-800 transition-colors duration-300">
            Hablemos
          </a>
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
