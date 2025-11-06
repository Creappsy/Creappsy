import React from 'react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from '../constants';

const LinkedinIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
)

const TwitterIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.623 1.933 2.434 3.337 4.583 3.374-1.794 1.403-4.062 2.197-6.524 2.197-.424 0-.84-.025-1.249-.073 2.313 1.491 5.071 2.358 8.04 2.358 9.648 0 14.93-7.996 14.93-14.93 0-.227-.005-.452-.014-.676.984-.707 1.838-1.592 2.52-2.624z"/></svg>
)

const GithubIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
)

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const WhatsAppFooterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.119.198-1.015 3.698 3.75-1.001.185.116z" /></svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950/50 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold tracking-tight">
                            Creappsy<span className="text-cyan-400">.</span>
                        </a>
                        <p className="mt-4 text-sm text-slate-400">Creamos experiencias digitales que inspiran y generan resultados.</p>
                        <div className="mt-6 flex space-x-6 text-slate-400">
                            <a href="#" className="hover:text-cyan-400 transition-colors"><TwitterIcon /></a>
                            <a href="#" className="hover:text-cyan-400 transition-colors"><LinkedinIcon /></a>
                            <a href="#" className="hover:text-cyan-400 transition-colors"><GithubIcon /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Soluciones</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Desarrollo Web</a></li>
                            <li><a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Marketing</a></li>
                            <li><a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Diseño UI/UX</a></li>
                            <li><a href="#services" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Analítica</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Empresa</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#about" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#blog" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="/nosotros#equipo" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Equipo</a></li>
                            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Carreras</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Contacto</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                                    <MailIcon className="h-5 w-5 mr-2" />
                                    <span>{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                             <li>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                                    <WhatsAppFooterIcon className="h-5 w-5 mr-2" />
                                    <span>{WHATSAPP_NUMBER}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Términos de Servicio</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Creappsy. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;