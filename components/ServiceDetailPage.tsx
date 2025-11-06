import React, { useState, useCallback, useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from './Section';
import { PORTFOLIO_PROJECTS } from '../constants';
import type { Project } from '../types';
import PortfolioModal from './PortfolioModal';

interface ServiceDetailPageProps {
    title: string;
    subtitle: string;
    description: string;
    process: { title: string; description: string }[];
    relatedServiceCategory: string;
    children: React.ReactNode;
}

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ title, subtitle, description, process, relatedServiceCategory, children }) => {
    
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const sectionsRef = useRef<HTMLElement[]>([]);

    // FIX: Created a helper function to add refs to the array without returning a value from Array.prototype.push.
    const addSectionRef = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    useEffect(() => {
        // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
        (anime as any)({
            targets: "#service-hero > div > *",
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(200),
            duration: 800,
            easing: 'easeOutExpo'
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targets = entry.target.querySelectorAll('.section-title-services, .related-project-card, .process-step');
                     // FIX: Cast to 'any' to bypass incorrect type definitions for animejs.
                     (anime as any)({
                        targets: targets,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(150),
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        sectionsRef.current.forEach(section => {
            if(section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
               if(section) observer.unobserve(section);
            });
        };

    }, []);

    const handleProjectClick = useCallback((e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        if (e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'Enter') return;
        const { title } = e.currentTarget.dataset;
        const project = PORTFOLIO_PROJECTS.find(p => p.title === title && p.serviceCategory === relatedServiceCategory);
        if (project) {
            setSelectedProject(project);
        }
    }, [relatedServiceCategory]);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    const relatedProjects = PORTFOLIO_PROJECTS.filter(p => p.serviceCategory === relatedServiceCategory).slice(0, 2);

    return (
        <>
            <Section id="service-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <p className="text-cyan-400 font-semibold">{subtitle}</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        {description}
                    </p>
                </div>
            </Section>

            <Section id="service-details">
                {children}
            </Section>

            <Section ref={addSectionRef} id="process" className="bg-slate-950/50">
                <div className="text-center section-title-services">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestro Proceso</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Un enfoque estructurado para garantizar resultados excepcionales y una colaboración transparente.
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
                    {process.map((step, index) => (
                        <div key={step.title} className="flex items-start process-step">
                             <div className="flex-shrink-0 flex flex-col items-center mr-6">
                                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400 font-bold text-lg border-2 border-slate-600">
                                    {index + 1}
                                </div>
                                {index < process.length - 1 && <div className="w-px h-16 bg-slate-600 mt-2"></div>}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="mt-1 text-slate-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {relatedProjects.length > 0 && (
                <Section ref={addSectionRef} id="related-projects">
                    <div className="text-center section-title-services">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Proyectos Relacionados</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                            Mira cómo hemos aplicado este servicio para crear soluciones exitosas.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {relatedProjects.map((project) => (
                        <div
                            key={project.title}
                            data-title={project.title} 
                            className="group relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer related-project-card"
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
                            <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </Section>
            )}

             <Section ref={addSectionRef} id="service-cta" className="bg-slate-950/50">
                <div className="text-center max-w-2xl mx-auto section-title-services">
                    <h2 className="text-3xl font-bold tracking-tight">¿Listo para potenciar tu presencia digital?</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Hablemos de cómo nuestro servicio de {title} puede ayudarte a alcanzar tus objetivos.
                    </p>
                    <div className="mt-8">
                        <a href="/contacto" className="inline-block px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                            Solicitar una Consulta Gratuita
                        </a>
                    </div>
                </div>
            </Section>
            <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
        </>
    )
}

export default ServiceDetailPage;