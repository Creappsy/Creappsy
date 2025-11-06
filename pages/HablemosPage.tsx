import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import CalendlyEmbed from '../components/CalendlyEmbed';

const benefits = [
    "Análisis inicial de tus necesidades y objetivos.",
    "Recomendaciones personalizadas para tu proyecto.",
    "Resolución de dudas sobre nuestros servicios y procesos.",
    "Propuesta de los siguientes pasos sin compromiso."
];

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

const HablemosPage: React.FC = () => {
    // FIX: Changed ref type from HTMLElement to HTMLDivElement to match the element it's attached to.
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tlHero = (anime as any).timeline({ easing: 'easeOutExpo' });
        tlHero.add({
            targets: "#hablemos-hero h1",
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800
        }).add({
            targets: "#hablemos-hero p",
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600
        }, "-=400");

        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const tl = (anime as any).timeline({ easing: 'easeOutExpo', duration: 800 });
                tl.add({
                    targets: section.querySelectorAll('.section-title > *'),
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: (anime as any).stagger(200),
                }).add({
                    targets: section.querySelectorAll('.benefit-item'),
                    translateX: [-30, 0],
                    opacity: [0, 1],
                    delay: (anime as any).stagger(150),
                }, '-=400');
                observer.unobserve(section);
            }
        }, { threshold: 0.2 });

        observer.observe(section);

        return () => { if (section) observer.unobserve(section); };
    }, []);

    return (
        <>
            <Section id="hablemos-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Agenda una Consulta Gratuita</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Reserva 30 minutos con nuestro equipo. Es el primer paso para transformar tu idea en una realidad digital exitosa.
                    </p>
                </div>
            </Section>

            <Section id="calendly-section">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={sectionRef}>
                        <div className="section-title">
                            <h2 className="text-3xl font-bold tracking-tight">¿Qué esperar de la llamada?</h2>
                            <p className="mt-4 text-slate-400">Esta sesión está diseñada para que nos conozcas, entendamos tu proyecto y te ofrezcamos un camino claro hacia adelante. Sin presiones, solo valor.</p>
                        </div>
                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start benefit-item">
                                    <CheckIcon className="h-6 w-6 text-cyan-400 flex-shrink-0 mr-4 mt-1" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <CalendlyEmbed />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default HablemosPage;