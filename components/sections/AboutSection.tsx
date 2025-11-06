import React from 'react';
import Section from '../Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-950/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sobre <span className="text-cyan-400">Creappsy</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Somos una agencia de diseño y desarrollo web apasionada por la tecnología y la creatividad, con sede en el corazón de la Ciudad de México. Nuestra misión es ayudar a empresas como la tuya a destacar en el mundo digital a través de soluciones innovadoras y personalizadas.
          </p>
          <p className="mt-4 text-slate-400">
            Creemos en la colaboración estrecha con nuestros clientes para entender a fondo sus necesidades y transformar sus visiones en una realidad digital exitosa. Combinamos estrategia, diseño y tecnología para construir puentes sólidos entre tu marca y tu audiencia.
          </p>
          <div className="mt-8">
              <a href="#nosotros" className="inline-block px-6 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-md hover:bg-slate-600 transition-colors duration-300">
                  Conoce nuestra historia
              </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="p-6 bg-slate-800/50 rounded-lg">
            <p className="text-4xl font-bold text-cyan-400">5+</p>
            <p className="mt-1 text-slate-400">Años de Experiencia</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-lg">
            <p className="text-4xl font-bold text-purple-400">100+</p>
            <p className="mt-1 text-slate-400">Proyectos Exitosos</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-lg">
            <p className="text-4xl font-bold text-emerald-400">98%</p>
            <p className="mt-1 text-slate-400">Clientes Satisfechos</p>
          </div>
          <div className="p-6 bg-slate-800/50 rounded-lg">
            <p className="text-4xl font-bold text-rose-400">20+</p>
            <p className="mt-1 text-slate-400">Cafés al Día</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
