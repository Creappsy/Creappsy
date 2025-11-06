import React from 'react';
import Section from '../components/Section';

interface LegalPageProps {
    title: string;
    content: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
    return (
        <>
            <Section id="legal-hero" className="!pt-32 !pb-16 bg-slate-950/50">
                 <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
                    <p className="mt-4 text-slate-500">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </Section>

            <Section id="legal-content" className="!pt-0 !pb-24">
                <div className="prose prose-invert prose-lg max-w-4xl mx-auto text-slate-300 prose-headings:text-slate-100 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
                   {content}
                </div>
            </Section>
        </>
    );
};

export default LegalPage;
