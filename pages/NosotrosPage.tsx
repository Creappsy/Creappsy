import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS, TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.625a6.01 6.01 0 00-1.5 11.625zM9 15.75a3 3 0 11-6 0 3 3 0 016 0zM21 15.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM10.5 15a7.5 7.5 0 10-7.5 7.5h15a7.5 7.5 0 00-7.5-7.5z" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const RocketLaunchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 014.24 4.24h-4.82m-2.82-11.64a6 6 0 017.38 5.84h-4.82m-2.56-5.84a6 6 0 01-4.24-4.24v4.82m11.64 2.82a6 6 0 01-7.38-5.84v4.82m5.84 2.56a6 6 0 01-4.24 4.24h-4.82m-5.84-7.38a6 6 0 015.84-7.38v4.82" />
  </svg>
);

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a.75.75 0 01-1.06 0l-3.72-3.72C9.347 17.1 8.5 16.136 8.5 15v-4.286c0-.97.616-1.813 1.5-2.097m6.5 0v3.375c0 .621.504 1.125 1.125 1.125h3.375m-1.94-4.594a.75.75 0 10-1.06-1.06L13.5 6.25l-1.06-1.06a.75.75 0 00-1.06 1.06l1.06 1.06-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06 1.06 1.06a.75.75 0 001.06-1.06l-1.06-1.06zM3.75 14.25c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a.75.75 0 01-1.06 0L.27 22.75A1.966 1.966 0 010 21.25v-4.286c0-.97.616-1.813 1.5-2.097m6.5 0v3.375c0 .621.504 1.125 1.125 1.125h3.375" />
    </svg>
);

const values = [
    {
        icon: <LightBulbIcon className="h-8 w-8 text-cyan-400" />,
        title: 'Innovación Constante',
        description: 'Buscamos y aplicamos las últimas tecnologías para ofrecer soluciones de vanguardia.'
    },
    {
        icon: <UsersIcon className="h-8 w-8 text-purple-400" />,
        title: 'Colaboración',
        description: 'Trabajamos codo a codo con nuestros clientes, creando una sinergia que impulsa el éxito.'
    },
    {
        icon: <HeartIcon className="h-8 w-8 text-rose-400" />,
        title: 'Pasión por lo que Hacemos',
        description: 'Amamos el diseño y la tecnología, y esa pasión se refleja en la calidad de nuestro trabajo.'
    },
    {
        icon: <RocketLaunchIcon className="h-8 w-8 text-emerald-400" />,
        title: 'Enfoque en Resultados',
        description: 'No solo creamos cosas bonitas; creamos soluciones que generan un impacto real y medible.'
    }
];

const NosotrosPage: React.FC = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const tlHero = anime.timeline({ easing: 'easeOutExpo' });
        tlHero.add({
            targets: "#nosotros-hero h1",
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800
        }).add({
            targets: "#nosotros-hero p",
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600
        }, "-=400");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId === 'nuestra-historia') {
                        anime({ targets: "#historia-img", opacity: [0, 1], scale: [0.9, 1], duration: 1000, easing: 'easeOutExpo' });
                        anime({ targets: "#historia-text > *", translateY: [40, 0], opacity: [0, 1], delay: anime.stagger(200), duration: 800, easing: 'easeOutExpo' });
                    } else if (sectionId === 'nuestros-valores') {
                        anime({ targets: ".value-card", translateY: [50, 0], opacity: [0, 1], delay: anime.stagger(200), duration: 800, easing: 'easeOutExpo' });
                    } else if (sectionId === 'testimonials') {
                        anime({ targets: ".testimonial-card", translateY: [50, 0], opacity: [0, 1], delay: anime.stagger(200), duration: 800, easing: 'easeOutExpo' });
                    } else if (sectionId === 'equipo') {
                        anime({ targets: ".team-member-card", translateY: [50, 0], opacity: [0, 1], delay: anime.stagger(150), duration: 800, easing: 'easeOutExpo' });
                    }
                     anime({
                        targets: entry.target.querySelectorAll('.section-title > *'),
                        translateY: [40, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(200),
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

    const addSectionRef = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <>
            <Section id="nosotros-hero" className="!pt-32 !pb-16 text-center relative overflow-hidden bg-slate-950/50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/20 to-cyan-500/20 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">El Equipo Detrás de la <span className="text-cyan-400">Innovación Digital</span></h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Somos un colectivo de creativos, estrategas y desarrolladores unidos por una misión: construir el futuro digital de las marcas.
                    </p>
                </div>
            </Section>

            <Section ref={addSectionRef} id="nuestra-historia">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div id="historia-img">
                        <img src="https://picsum.photos/seed/nuestra-historia/800/600" alt="Equipo de Creappsy colaborando" className="rounded-lg shadow-2xl"/>
                    </div>
                    <div id="historia-text">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestra Historia</h2>
                        <p className="mt-4 text-slate-400">
                           Creappsy nació en 2018 de la idea de que la tecnología y el diseño podían unirse para crear algo más que solo sitios web. Comenzamos como un pequeño equipo en un coworking de la Ciudad de México, con la ambición de ayudar a las startups locales a tener una presencia digital profesional.
                        </p>
                        <p className="mt-4 text-slate-400">
                            A través de los años, hemos crecido y evolucionado, pero nuestro ADN sigue siendo el mismo: una curiosidad insaciable, un compromiso con la excelencia y un deseo genuino de ver a nuestros clientes triunfar.
                        </p>
                    </div>
                </div>
            </Section>
            
            <Section ref={addSectionRef} id="nuestros-valores" className="bg-slate-950/50">
                 <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Valores Fundamentales</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Estos son los principios que guían cada decisión, cada línea de código y cada diseño que creamos.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map(value => (
                         <div key={value.title} className="value-card bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mx-auto">
                                {value.icon}
                            </div>
                            <h3 className="mt-5 text-lg font-medium">{value.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section ref={addSectionRef} id="testimonials">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lo que Dicen Nuestros Clientes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        La confianza de nuestros clientes es nuestro mayor activo.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial: Testimonial) => (
                    <div key={testimonial.name} className="testimonial-card bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col">
                        <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400 mb-4" />
                        <p className="text-slate-300 flex-grow">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </Section>

            <Section ref={addSectionRef} id="equipo" className="bg-slate-950/50">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Conoce a Nuestro Equipo</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        El talento, la experiencia y la dedicación son el corazón de Creappsy. Conoce a las personas que harán tu proyecto realidad.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map(member => <TeamMemberCard key={member.name} member={member} />)}
                </div>
            </Section>
        </>
    );
};

export default NosotrosPage;