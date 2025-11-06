import React from 'react';
import Section from '../Section';
import { PRICING_TIERS } from '../../constants';
import type { PriceTier } from '../../types';

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

const PricingSection: React.FC = () => {
  return (
    <Section id="pricing">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Elige el Plan Perfecto para Ti</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
          Elige el plan que mejor se adapte a tu urgencia y objetivo. Para cumplir los tiempos de entrega, necesitamos tu contenido (textos y fotos) listo desde el inicio. ¡Empecemos!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {PRICING_TIERS.map((tier: PriceTier) => (
          <div key={tier.name} className={`rounded-2xl p-8 border flex flex-col h-full ${tier.recommended ? 'border-cyan-500 bg-slate-800/50 relative' : 'border-slate-700 bg-slate-900/50'}`}>
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
            <a href="#contact" className={`mt-8 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 ${tier.recommended ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}>
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;