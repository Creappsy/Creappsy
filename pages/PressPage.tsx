import React from 'react';
import Section from '../components/Section';

const PressPage: React.FC = () => {
    return (
        <>
            <Section id="press-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Prensa y Medios</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Recursos e información sobre Creappsy para periodistas y medios de comunicación.
                    </p>
                </div>
            </Section>

            <Section id="press-kit">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Kit de Prensa</h2>
                        <p className="mt-4 text-slate-400">
                            Descarga nuestro kit de prensa que incluye nuestro logo en alta resolución, información de la empresa y material gráfico oficial para tus publicaciones.
                        </p>
                        <button className="mt-6 inline-block px-6 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-md hover:bg-slate-600 transition-colors cursor-not-allowed" disabled>
                            Descargar Kit de Prensa (Próximamente)
                        </button>
                    </div>
                     <div className="text-center bg-slate-800/50 rounded-lg p-8 border border-slate-700">
                        <h3 className="font-semibold">Contacto de Medios</h3>
                        <p className="text-slate-400 mt-2">Para consultas de prensa, por favor contacta a:</p>
                        <a href="mailto:prensa@creappsy.com" className="text-cyan-400 hover:text-cyan-300 font-medium">prensa@creappsy.com</a>
                    </div>
                </div>
            </Section>

             <Section id="menciones" className="bg-slate-950/50">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Menciones y Artículos</h2>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700">
                    <p className="text-lg text-slate-300">Aún no hemos sido mencionados en la prensa, ¡pero estamos trabajando en proyectos que esperamos llamen la atención!</p>
                </div>
            </Section>
        </>
    );
};

export default PressPage;
