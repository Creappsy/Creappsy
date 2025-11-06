
import React from 'react';
import Section from '../Section';
import { PORTFOLIO_PROJECTS } from '../../constants';
import type { Project } from '../../types';

const PortfolioSection: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-slate-950/50">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestro Trabajo</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Estamos orgullosos de los proyectos que hemos realizado. Aquí hay una selección de nuestro trabajo reciente.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_PROJECTS.map((project: Project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-sm font-semibold text-cyan-400">{project.category}</span>
              <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioSection;
