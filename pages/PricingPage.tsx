import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import { PRICING_TIERS, PRICING_FAQS } from '../constants';
import type { PriceTier } from '../types';
import FAQItem from '../components/FAQItem';

// Icons from PricingSection
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);
const FireIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.362A8.287 8.287 0 0012 7.04a8.252 8.252 0 013.362-1.826z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a2.25 2.25 0 012.25 2.25V6.75a2.25 2.25 0 01-2.25 2.25H15M6.75 21a2.25 2.25 0 002.25-2.25V16.5a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 16.5v2.25a2.25 2.25 0 002.25 2.25" />
  </svg>
);

// Payment Icons
const StripeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Stripe</title>
        <path d="M22.844 18.068h-4.332c-.894 0-1.586-.224-2.074-.672-.488-.448-.732-1.08-.732-1.895 0-.816.244-1.448.732-1.895.488-.448 1.18-.672 2.074-.672h1.68v-2.91h-1.68c-.894 0-1.586-.224-2.074-.672-.488-.448-.732-1.08-.732-1.895 0-.816.244-1.448.732-1.895.488-.448 1.18-.672 2.074-.672h4.332v13.518zM8.053 4.55h4.332c.894 0 1.586.224 2.074.672.488.448.732 1.08.732 1.895 0 .816-.244-1.448-.732 1.895-.488.448-1.18.672-2.074.672h-1.68v2.91h1.68c.894 0 1.586.224 2.074.672.488.448.732 1.08.732 1.895 0 .816-.244-1.448-.732 1.895-.488.448-1.18.672-2.074.672H8.053V4.55zm-6.88 2.592h4.332v2.91H1.173v-2.91zm0 5.424h4.332v2.91H1.173v-2.91z"/>
    </svg>
);
const PaypalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>PayPal</title>
        <path d="M7.856 5.348c.18-1.12.896-1.74 1.933-1.74h6.04c2.81 0 4.803 1.43 4.225 4.384-.582 2.954-2.732 4.384-5.32 4.384h-2.126l-.49 3.092-.124.81-.035.195c-.05.28-.112.548-.22.81h-.002c-.104.254-.253.48-.44.67-.184.184-.404.335-.65.446-.24.108-.502.164-.78.164H5.35l2.506-15.84zm.648 10.232l.26-1.64h1.834c3.08 0 4.1-1.657 4.542-4.04.44-2.383-1.04-3.52-3.15-3.52h-4.63L9.36 15.58h-.856z"/>
    </svg>
);
const BitcoinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Bitcoin</title>
      <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM9.505 5.753c.12-.42.45-.66.8-.66h1.543c.48 0 .89.26.96.7.07.44-.19.68-.52.83l-1.35.5c1.42.34 2.29 1.16 2.29 2.51 0 1.25-.8 2.2-2.11 2.51v1.59a.62.62 0 0 1-.62.62h-.4a.62.62 0 0 1-.62-.62v-1.58c-.53-.12-1.08-.3-1.6-.53l-.33-.14a.55.55 0 0 1-.2-.8s.66-.27.69-.28c.31-.13.38-.3.38-.45 0-.21-.16-.38-.42-.5-.26-.11-.7-.28-.7-.28a.55.55 0 0 1-.23-.78l.05-.1zm.74 3.55c0 .28.23.44.57.56.34.12.73.27.73.27a.64.64 0 0 1 .18.82l-.02.04c-.34.72-1.16.6-1.48.5zm1.5-3.11c0 .28-.2.43-.5.53s-.66.25-.66.25a.6.6 0 0 1-.21.79l-.02.02c.4.15.82.3 1.22.46.22.09.43.18.63.29.2.1.4.22.57.36.18.14.33.3.46.47.13.18.23.38.3.59.08.2.12.42.12.64 0 .84-.46 1.48-1.24 1.76v1.1a.62.62 0 0 1-.62.62h-.4a.62.62 0 0 1-.62-.62v-1.07c-.42.06-.84.1-1.25.12h-.14c-.42-.02-.84-.06-1.25-.12v1.07a.62.62 0 0 1-.62.62h-.4a.62.62 0 0 1-.62-.62v-1.15c-.7-.3-1.21-.88-1.21-1.69 0-.58.32-1.07.78-1.37.28-.18.59-.34.9-.48l1.1-.52c.26-.12.42-.3.42-.55s-.2-.42-.48-.53c-.28-.11-.74-.3-.74-.3a.58.58 0 0 1-.24-.77l.04-.08c.3-.64 1.1-.6 1.4-.52z"/>
    </svg>
);
const EthereumIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Ethereum</title>
      <path d="M11.944 17.97L4.58 13.62 11.943 24l7.365-10.38-7.364 4.35zM12.056 0L4.69 12.223l7.366 4.354 7.364-4.354L12.056 0z"/>
    </svg>
);


const PricingPage: React.FC = () => {
    const plansRef = useRef<HTMLElement>(null);
    const faqRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const plansSection = plansRef.current;
        const faqSection = faqRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'pricing-plans') {
                        anime({
                            targets: '.pricing-tier-page',
                            translateY: [50, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(200),
                            duration: 800,
                            easing: 'easeOutExpo',
                        });
                    }
                    if (entry.target.id === 'pricing-faq') {
                        anime({
                            targets: '.faq-item',
                            translateY: [30, 0],
                            opacity: [0, 1],
                            delay: anime.stagger(100),
                            duration: 600,
                            easing: 'easeOutExpo',
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (plansSection) observer.observe(plansSection);
        if (faqSection) observer.observe(faqSection);

        return () => {
            if (plansSection) observer.unobserve(plansSection);
            if (faqSection) observer.unobserve(faqSection);
        };
    }, []);

    return (
        <>
            <Section id="pricing-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Planes Claros, Resultados Reales.</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        Sin contratos a largo plazo ni sorpresas. Elige el impulso que tu negocio necesita hoy.
                    </p>
                    <div className="mt-8 inline-flex items-center bg-slate-800/50 p-1.5 rounded-lg text-sm">
                        <button className="px-4 py-1.5 rounded-md bg-cyan-500 text-slate-900 font-semibold">Pago Único</button>
                        <button className="px-4 py-1.5 rounded-md text-slate-400 cursor-not-allowed" disabled>Mantenimiento Mensual <span className="text-xs text-purple-400">(Próximamente)</span></button>
                    </div>
                </div>
            </Section>

            <Section ref={plansRef} id="pricing-plans" className="!pt-12 !pb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {PRICING_TIERS.map((tier: PriceTier) => (
                    <div key={tier.name} className={`pricing-tier-page rounded-2xl p-8 border flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 ${tier.recommended ? 'border-cyan-500 bg-slate-800/50 relative' : 'border-slate-700 bg-slate-900/50'}`}>
                        {tier.recommended && (
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-cyan-500 text-slate-900 px-3 py-1 text-sm font-semibold rounded-full">Más Vendido</div>
                        )}
                        {tier.limited && (
                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-rose-500 text-white px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
                            <FireIcon className="h-4 w-4" />
                            <span>Cupos Limitados</span>
                        </div>
                        )}
                        <h3 className="text-lg font-semibold">{tier.name}</h3>
                        <p className="mt-4 text-4xl font-bold">{tier.price}</p>
                        <p className="text-sm text-slate-400">{tier.period}</p>
                        {tier.delivery && <p className="mt-1 text-xs font-semibold text-emerald-400">{tier.delivery}</p>}
                        <ul className="mt-6 space-y-4 flex-grow">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-cyan-400 flex-shrink-0 mr-3 mt-1" />
                                <span className="text-slate-300">{feature}</span>
                            </li>
                        ))}
                        </ul>
                        <a href="/contacto" className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 ${tier.recommended ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
                        {tier.cta}
                        </a>
                    </div>
                    ))}
                </div>
            </Section>
            
            <Section id="payment-methods" className="!pt-0">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Aceptamos Múltiples Formas de Pago</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Flexibilidad para tu comodidad. Aceptamos las principales tarjetas, transferencias y criptomonedas.
                    </p>
                </div>
                <div className="mt-10 max-w-4xl mx-auto flex justify-center items-center flex-wrap gap-x-10 gap-y-6 text-slate-400">
                    <div className="flex items-center space-x-3 transition-colors hover:text-white">
                        <StripeIcon className="h-6 fill-current" />
                        <span className="font-semibold text-lg">Stripe</span>
                    </div>
                     <div className="flex items-center space-x-3 transition-colors hover:text-white">
                        <PaypalIcon className="h-7 fill-[#0070BA]" />
                         <span className="font-semibold text-lg">PayPal</span>
                    </div>
                     <div className="flex items-center space-x-3 transition-colors hover:text-white">
                        <BitcoinIcon className="h-8 w-8 text-[#F7931A] fill-current" />
                         <span className="font-semibold text-lg">Bitcoin</span>
                    </div>
                    <div className="flex items-center space-x-3 transition-colors hover:text-white">
                        <EthereumIcon className="h-8 w-8 text-[#627EEA] fill-current" />
                         <span className="font-semibold text-lg">Ethereum</span>
                    </div>
                </div>
            </Section>
            
            <Section ref={faqRef} id="pricing-faq" className="bg-slate-950/50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Preguntas Frecuentes</h2>
                        <p className="mt-4 text-lg text-slate-400">
                           Resolvemos tus dudas para que tomes la mejor decisión.
                        </p>
                    </div>
                    <div className="mt-12">
                        {PRICING_FAQS.map(faq => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default PricingPage;