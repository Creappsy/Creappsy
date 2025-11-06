import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';

const PressPage: React.FC = () => {
    const sectionsRef = useRef<HTMLElement[]>([]);

    const addSectionRef = (el: HTMLElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };
    
    useEffect(() => {
        const tlHero = (anime as any).timeline({ easing: 'easeOutExpo' });
        tlHero.add({
            targets: "#press-hero h1",
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800
        }).add({
            targets: "#press-hero p",
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600
        }, "-=400");
        
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targets = entry.target.querySelectorAll('.section-title > *, .press-card');
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
            <Section id="press-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Prensa y Medios</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Recursos, noticias e información sobre Creappsy para periodistas y profesionales de la comunicación.
                    </p>
                </div>
            </Section>

            <Section ref={addSectionRef} id="press-kit">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="press-card">
                        <h2 className="text-3xl font-bold tracking-tight">Sobre Creappsy</h2>
                        <p className="mt-4 text-slate-400">
                            Creappsy es una agencia de diseño y desarrollo digital con sede en la Ciudad de México, especializada en crear experiencias web y móviles memorables. Fusionamos estrategia, creatividad y tecnología de punta, incluyendo inteligencia artificial, para ayudar a las empresas a destacar en el competitivo panorama digital.
                        </p>
                    </div>
                     <div className="text-center bg-slate-800/50 rounded-lg p-8 border border-slate-700 press-card">
                        <h3 className="text-xl font-semibold">Kit de Prensa y Contacto</h3>
                        <p className="text-slate-400 mt-2">Para logos, biografías del equipo y otros recursos, o para cualquier consulta de medios, por favor contacta a nuestro equipo de comunicación.</p>
                        <a href="mailto:prensa@creappsy.com" className="text-cyan-400 hover:text-cyan-300 font-medium mt-2 block">prensa@creappsy.com</a>
                        <button className="mt-6 inline-block px-6 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-md hover:bg-slate-600 transition-colors cursor-not-allowed opacity-50" disabled>
                            Descargar Kit de Prensa (Próximamente)
                        </button>
                    </div>
                </div>
            </Section>

             <Section ref={addSectionRef} id="menciones" className="bg-slate-950/50">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Menciones y Artículos</h2>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700 press-card">
                    <p className="text-lg text-slate-300">Estamos construyendo el futuro, ¡y pronto habrá noticias que contar!</p>
                    <p className="mt-4 text-slate-400">Actualmente estamos enfocados en proyectos innovadores que esperamos compartir con el mundo muy pronto. Mantente al tanto para futuras actualizaciones y menciones en prensa.</p>
                </div>
            </Section>
        </>
    );
};

export default PressPage;
