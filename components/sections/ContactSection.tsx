import React from 'react';
import Section from '../Section';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from '../../constants';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.119.198-1.015 3.698 3.75-1.001.185.116z" /></svg>
);


const ContactSection: React.FC = () => {
    return (
        <Section id="contact">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hablemos de tu Proyecto</h2>
                <p className="mt-4 text-lg text-slate-400">
                    ¿Listo para empezar? Elige tu método de contacto preferido o completa el formulario. Estamos aquí para ayudarte a convertir tu visión en realidad.
                </p>
            </div>
            
            <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href={`mailto:${CONTACT_EMAIL}`} className="group relative bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mx-auto">
                    <MailIcon className="h-6 w-6 text-purple-400"/>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">Email</h3>
                    <p className="mt-1 text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">{CONTACT_EMAIL}</p>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mx-auto">
                    <WhatsAppIcon className="h-6 w-6 text-emerald-400"/>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">WhatsApp</h3>
                    <p className="mt-1 text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">{WHATSAPP_NUMBER}</p>
                </a>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-slate-300">Nombre</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="py-3 px-4 block w-full shadow-sm bg-slate-700 border-slate-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-slate-300">Apellido</label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="py-3 px-4 block w-full shadow-sm bg-slate-700 border-slate-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="py-3 px-4 block w-full shadow-sm bg-slate-700 border-slate-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mensaje</label>
                        <div className="mt-1">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="py-3 px-4 block w-full shadow-sm bg-slate-700 border-slate-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </Section>
    );
};

export default ContactSection;