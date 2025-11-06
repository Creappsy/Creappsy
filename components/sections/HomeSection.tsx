import React, { useEffect } from 'react';
import anime from 'animejs';
import Section from '../Section';
import ParticleBackground from '../ParticleBackground';

const HomeSection: React.FC = () => {
  useEffect(() => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: '#intro-heading',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000
    })
    .add({
      targets: '#intro-paragraph',
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 800
    }, '-=500')
    .add({
      targets: '#intro-buttons',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600
    }, '-=500');
  }, []);

  return (
    <Section id="home" className="!pt-32 !pb-20 md:!pt-48 md:!pb-32 min-h-screen flex items-center relative overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 id="intro-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 opacity-0">
          Creamos Experiencias Digitales que <span className="text-cyan-400">Inspiran</span>
        </h1>
        <p id="intro-paragraph" className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 opacity-0">
          En Creappsy, convertimos tus ideas en sitios web y estrategias de marketing que no solo lucen increíbles, sino que también generan resultados.
        </p>
        <div id="intro-buttons" className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <a href="/portafolio" className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
            Ver Proyectos
          </a>
          <a href="/contacto" className="inline-block w-full sm:w-auto px-8 py-3 text-base font-medium text-center text-cyan-300 bg-slate-800/50 border border-slate-700 rounded-md hover:bg-slate-800 transition-colors duration-300">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;