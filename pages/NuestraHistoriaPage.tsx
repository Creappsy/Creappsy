import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';

const timelineEvents = [
    {
        year: '2018',
        title: 'Nace la Idea',
        description: 'En un café de la Ciudad de México, un pequeño grupo de apasionados por la tecnología y el diseño funda Creappsy con una misión: ayudar a las startups a tener una presencia digital impactante.',
    },
    {
        year: '2020',
        title: 'Primer Gran Cliente',
        description: 'Desarrollamos una plataforma de e-commerce completa para "Moda Urbana", lo que nos posicionó como una agencia capaz de manejar proyectos complejos y de alto impacto.',
    },
    {
        year: '2022',
        title: 'Expansión del Equipo',
        description: 'Nuestro equipo crece, incorporando especialistas en marketing digital y analítica de datos para ofrecer un servicio 360° y soluciones integrales a nuestros clientes.',
    },
    {
        year: '2024',
        title: 'Integración de IA',
        description: 'Pioneros en la adopción de inteligencia artificial, integramos herramientas de IA generativa en nuestros flujos de trabajo para potenciar la creatividad y la eficiencia.',
    },
];

const NuestraHistoriaPage: React.FC = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);

    const addSectionRef = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };
    
    useEffect(() => {
        const tlHero = (anime as any).timeline({ easing: 'easeOutExpo' });
        tlHero.add({
            targets: "#historia-hero h1",
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800
        }).add({
            targets: "#historia-hero p",
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600
        }, "-=400");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId === 'timeline') {
                        (anime as any)({ 
                            targets: ".timeline-event", 
                            translateX: [-50, 0], 
                            opacity: [0, 1], 
                            delay: anime.stagger(300), 
                            easing: 'easeOutExpo' 
                        });
                        (anime as any)({ 
                            targets: ".timeline-line", 
                            scaleY: [0, 1], 
                            duration: 1500, 
                            easing: 'easeInOutQuad' 
                        });
                    } else {
                        (anime as any)({
                            targets: entry.target.querySelectorAll('.section-title > *'),
                            translateY: [40, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(200),
                            duration: 800,
                            easing: 'easeOutExpo'
                        });
                    }
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

    return (
        <>
            <Section id="historia-hero" className="!pt-32 !pb-16 text-center relative overflow-hidden bg-slate-950/50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/20 to-cyan-500/20 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">De una Idea a un Referente Digital</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Nuestra historia es un viaje de pasión, innovación y un compromiso inquebrantable con el éxito de nuestros clientes.
                    </p>
                </div>
            </Section>

            <Section ref={addSectionRef} id="timeline">
                 <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestra Trayectoria</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Cada paso en nuestro camino ha sido impulsado por el deseo de crear algo extraordinario.
                    </p>
                </div>
                <div className="mt-16 max-w-3xl mx-auto relative">
                    <div className="timeline-line absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-slate-700" style={{ transformOrigin: 'top' }}></div>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="timeline-event relative pl-12 md:pl-0 mb-12">
                            <div className="md:flex items-center">
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                                     <div className={`flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                        <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 -translate-x-1/2"></div>
                                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex-1">
                                            <p className="text-xl font-bold text-cyan-400">{event.year}</p>
                                            <h3 className="mt-1 text-lg font-semibold">{event.title}</h3>
                                            <p className="mt-2 text-sm text-slate-400">{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section ref={addSectionRef} id="historia-cta" className="bg-slate-950/50">
                 <div className="text-center max-w-2xl mx-auto section-title">
                    <h2 className="text-3xl font-bold tracking-tight">Sé Parte de Nuestro Próximo Capítulo</h2>
                    <p className="mt-4 text-lg text-slate-400">
                        La historia de Creappsy la escribimos junto a clientes como tú. Permítenos ser el socio tecnológico que impulse tu visión hacia el futuro.
                    </p>
                    <div className="mt-8">
                        <a href="/contacto" className="inline-block px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                            Construyamos el Futuro Juntos
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default NuestraHistoriaPage;
