import React from 'react';
import Section from '../components/Section';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
    return (
        <>
            <Section id="contact-hero" className="!pt-32 !pb-16 text-center bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-600/10 to-cyan-500/10 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Hablemos</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
                        ¿Tienes una idea o un proyecto en mente? Nos encantaría escucharte.
                    </p>
                </div>
            </Section>
            <ContactSection />
        </>
    );
};

export default ContactPage;
