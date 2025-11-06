import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Section from '../components/Section';
import ContactSection from '../components/sections/ContactSection';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a.75.75 0 01-1.06 0l-3.72-3.72C9.347 17.1 8.5 16.136 8.5 15v-4.286c0-.97.616-1.813 1.5-2.097m6.5 0v3.375c0 .621.504 1.125 1.125 1.125h3.375m-1.94-4.594a.75.75 0 10-1.06-1.06L13.5 6.25l-1.06-1.06a.75.75 0 00-1.06 1.06l1.06 1.06-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06 1.06 1.06a.75.75 0 001.06-1.06l-1.06-1.06zM3.75 14.25c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a.75.75 0 01-1.06 0L.27 22.75A1.966 1.966 0 010 21.25v-4.286c0-.97.616-1.813 1.5-2.097m6.5 0v3.375c0 .621.504 1.125 1.125 1.125h3.375" />
    </svg>
);

const ContactPage: React.FC = () => {
    const testimonialsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = testimonialsRef.current;
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
                    targets: section.querySelectorAll('.testimonial-card'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: (anime as any).stagger(200),
                }, '-=400');
                observer.unobserve(section);
            }
        }, { threshold: 0.2 });

        observer.observe(section);

        return () => { if (section) observer.unobserve(section); };
    }, []);

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
            <Section ref={testimonialsRef} id="contact-testimonials" className="bg-slate-950/50">
                <div className="text-center section-title">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Únete a Nuestros Clientes Satisfechos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        La confianza de nuestros clientes es nuestro mayor activo y la mejor carta de presentación.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial: Testimonial) => (
                    <div key={testimonial.name} className="testimonial-card bg-slate-800/50 p-8 rounded-lg border border-slate-700 flex flex-col">
                        <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400 mb-4" />
                        <p className="text-slate-300 flex-grow">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default ContactPage;