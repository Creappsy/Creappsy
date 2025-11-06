import React, { useState, useCallback, useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../Section';
import { PORTFOLIO_PROJECTS } from '../../constants';
import type { Project } from '../../types';
import PortfolioModal from '../PortfolioModal';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
                    duration: 800
                });

                tl.add({
                    targets: entry.target.querySelectorAll('.portfolio-title > *'),
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(200),
                }).add({
                    targets: entry.target.querySelectorAll('.portfolio-card'),
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

  const handleProjectClick = useCallback((e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter') return;
    const { title } = e.currentTarget.dataset;
    const project = PORTFOLIO_PROJECTS.find(p => p.title === title);
    if (project) {
        setSelectedProject(project);
    }
  }, []);


  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <Section ref={sectionRef} id="portfolio" className="bg-slate-950/50">
        <div className="text-center portfolio-title">
          <div className="flex justify-center items-center gap-x-3">
              <EyeIcon className="h-8 w-8 text-purple-400" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestro Trabajo</h2>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Estamos orgullosos de los proyectos que hemos realizado. Aquí hay una selección de nuestro trabajo reciente.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project: Project) => (
            <div 
              key={project.title} 
              className="portfolio-card group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={handleProjectClick}
              onKeyDown={handleProjectClick}
              data-title={project.title}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles del proyecto ${project.title}`}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 bg-cyan-600/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SearchIcon className="h-12 w-12 text-white" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                <span className="text-sm font-semibold text-cyan-400">{project.category}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default PortfolioSection;