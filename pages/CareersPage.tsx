import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import { CONTACT_EMAIL } from '../constants';

const cultureItems = [
    {
        icon: (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.625a6.01 6.01 0 00-1.5 11.625zM9 15.75a3 3 0 11-6 0 3 3 0 016 0zM21 15.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
        title: 'Innovación Constante',
        description: 'Fomentamos la curiosidad y la experimentación. Tendrás la oportunidad de trabajar con las últimas tecnologías y proponer nuevas ideas.'
    },
    {
        icon: (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM10.5 15a7.5 7.5 0 10-7.5 7.5h15a7.5 7.5 0 00-7.5-7.5z" /></svg>),
        title: 'Colaboración Radical',
        description: 'Creemos que las mejores ideas surgen del trabajo en equipo. Valoramos la comunicación abierta, honesta y el apoyo mutuo.'
    },
    {
        icon: (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>),
        title: 'Crecimiento Profesional',
        description: 'Invertimos en tu desarrollo. Ofrecemos presupuesto para formación, acceso a cursos y la oportunidad de crecer dentro de la empresa.'
    },
    {
        icon: (props: React.SVGProps<SVGSVGElement>) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
        title: 'Bienestar y Flexibilidad',
        description: 'Entendemos que la vida va más allá del trabajo. Ofrecemos horarios flexibles y opciones de trabajo remoto para un equilibrio saludable.'
    }
];

const CareersPage: React.FC = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);

    const addSectionRef = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };
    
    useEffect(() => {
        const tlHero = (anime as any).timeline({ easing: 'easeOutExpo' });
        tlHero.add({
            targets: "#careers-hero h1",
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800
        }).add({
            targets: "#careers-hero p",
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600
        }, "-=400");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targets = entry.target.querySelectorAll('.section-title > *, .culture-card, .open-positions-card');
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

    return (
        <>
            <Section id="careers-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Únete a un Equipo que Está <span className="text-cyan-400">Redefiniendo lo Digital</span></h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Buscamos mentes creativas y apasionadas por la tecnología para construir el futuro, un proyecto a la vez.
                    </p>
                </div>
            </Section>

            <Section ref={addSectionRef} id="cultura">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestra Cultura</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
                        Más que un trabajo, es una misión. Fomentamos un ambiente donde la creatividad, el aprendizaje y la colaboración prosperan.
                    </p>
                </div>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cultureItems.map(item => (
                         <div key={item.title} className="culture-card bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mx-auto text-cyan-400">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
            
            <Section ref={addSectionRef} id="posiciones" className="bg-slate-950/50">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Posiciones Abiertas</h2>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700 open-positions-card">
                    <p className="text-lg text-slate-300">Actualmente no tenemos posiciones abiertas.</p>
                    <p className="mt-2 text-slate-400">Sin embargo, siempre estamos buscando talento excepcional. Si crees que tienes lo necesario para unirte a nuestro equipo y te apasiona nuestro trabajo, nos encantaría saber de ti. Puedes <a href="/nosotros#equipo" className="text-cyan-400 hover:text-cyan-300 underline">conocer a nuestro equipo actual aquí</a>.</p>
                    <a href={`mailto:${CONTACT_EMAIL}?subject=Oportunidad de Carrera en Creappsy`} className="mt-6 inline-block px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all">
                        Envía tu CV de Forma Espontánea
                    </a>
                </div>
            </Section>
        </>
    );
};

export default CareersPage;
