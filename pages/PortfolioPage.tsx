import React, { useState, useCallback, useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import { PORTFOLIO_PROJECTS } from '../constants';
import type { Project } from '../types';
import PortfolioModal from '../components/PortfolioModal';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);


const PortfolioPage: React.FC = () => {
    const allCategories = ['Todos', ...Array.from(new Set(PORTFOLIO_PROJECTS.map(p => p.category)))];
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeCategory === 'Todos'
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);
    
    const handleCategoryClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        const { category } = e.currentTarget.dataset;
        if (category) {
            setActiveCategory(category);
        }
    }, []);

    const handleProjectClick = useCallback((e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter') return;
        const { title } = e.currentTarget.dataset;
        const project = PORTFOLIO_PROJECTS.find(p => p.title === title);
        if (project) {
            setSelectedProject(project);
        }
    }, []);

    useEffect(() => {
        if (gridRef.current) {
            anime({
                targets: gridRef.current.children,
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                duration: 600,
                easing: 'easeOutExpo',
            });
        }
    }, [activeCategory]);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);


    return (
        <>
            <Section id="portfolio-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Proyectos que Dejan Huella</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Explora una selección de nuestros trabajos más recientes y descubre cómo ayudamos a las marcas a brillar.
                    </p>
                </div>
            </Section>

            <Section id="portfolio-grid">
                 <div className="flex justify-center items-center flex-wrap gap-2 mb-12">
                    {allCategories.map((category) => (
                    <button
                        key={category}
                        data-category={category}
                        onClick={handleCategoryClick}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        activeCategory === category
                            ? 'bg-cyan-500 text-slate-900'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project: Project) => (
                    <div 
                        key={project.title}
                        data-title={project.title} 
                        className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer"
                        onClick={handleProjectClick}
                        onKeyDown={handleProjectClick}
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

export default PortfolioPage;