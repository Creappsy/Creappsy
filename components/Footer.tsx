import React from 'react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL, SERVICES } from '../constants';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);

const LinkedinIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

const GithubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297Z"/></svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950/50 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-2">
                        <a href="/" className="text-2xl font-bold tracking-tight">
                            Creappsy<span className="text-cyan-400">.</span>
                        </a>
                        <p className="mt-4 text-sm text-slate-400">Creamos experiencias digitales que inspiran y generan resultados.</p>
                        <div className="mt-6 flex space-x-6 text-slate-400">
                            <a href="#" className="hover:text-cyan-400 transition-colors"><XIcon /></a>
                            <a href="#" className="hover:text-cyan-400 transition-colors"><LinkedinIcon /></a>
                            <a href="#" className="hover:text-cyan-400 transition-colors"><GithubIcon /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Soluciones</h3>
                        <ul className="mt-4 space-y-3">
                            {SERVICES.map(service => (
                                <li key={service.title}><a href={service.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">{service.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Empresa</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/nosotros" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Sobre Nosotros</a></li>
                            <li><a href="/portafolio" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Portafolio</a></li>
                            <li><a href="/precios" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Precios</a></li>
                            <li><a href="/blog" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
                             <li><a href="/contacto" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Contacto</a></li>
                            <li><a href="/carreras" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Carreras</a></li>
                            <li><a href="/prensa" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Prensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/aviso-legal" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Aviso Legal</a></li>
                            <li><a href="/aviso-de-privacidad" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="/terminos-de-servicio" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Términos de Servicio</a></li>
                            <li><a href="/politica-de-cookies" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Política de Cookies</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Modelos de Contrato</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/contratos/desarrollo-web" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Desarrollo Web</a></li>
                            <li><a href="/contratos/marketing-digital" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Marketing Digital</a></li>
                            <li><a href="/contratos/diseno-ui-ux" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Diseño UI/UX</a></li>
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