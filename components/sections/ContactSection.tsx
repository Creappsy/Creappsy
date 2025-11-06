import React, { useState, useCallback, useEffect, useRef } from 'react';
import Section from '../Section';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL, SERVICES } from '../../constants';
import anime from 'animejs';

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.119.198-1.015 3.698 3.75-1.001.185.116z" /></svg>
);


const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
    });
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                anime({
                    targets: section.querySelectorAll('.contact-title > *'),
                    translateY: [40, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: 'easeOutExpo',
                });
                observer.unobserve(section);
            }
        }, { threshold: 0.2 });

        observer.observe(section);
        return () => { if (section) observer.unobserve(section); };
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prevErrors => {
            if (prevErrors[name]) {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            }
            return prevErrors;
        });
    }, []);

    const handlePrivacyChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPrivacyPolicyAccepted(e.target.checked);
        setErrors(prevErrors => {
            if (prevErrors.privacyPolicy) {
                const newErrors = { ...prevErrors };
                delete newErrors.privacyPolicy;
                return newErrors;
            }
            return prevErrors;
        });
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validate = () => {
            const newErrors: { [key: string]: string } = {};
            if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es obligatorio.';
            if (!formData.email.trim()) {
                newErrors.email = 'El email es obligatorio.';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'El formato del email no es válido.';
            }
            if (!formData.service) newErrors.service = 'Por favor, selecciona un servicio.';
            if (!formData.message.trim()) {
                newErrors.message = 'Por favor, cuéntanos sobre tu proyecto.';
            } else if (formData.message.trim().length < 10) {
                newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
            }
            if (!privacyPolicyAccepted) {
                newErrors.privacyPolicy = 'Debes aceptar la política de privacidad para continuar.';
            }
            return newErrors;
        };

        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ fullName: '', companyName: '', email: '', phone: '', service: '', budget: '', message: '' });
            setPrivacyPolicyAccepted(false);
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    }, [formData, privacyPolicyAccepted]);

    const getInputClassName = (field: string) => {
        const baseClass = "py-3 px-4 block w-full shadow-sm bg-slate-700 rounded-md transition-colors";
        if (errors[field]) {
            return `${baseClass} border-red-500 focus:ring-red-500 focus:border-red-500 border`;
        }
        return `${baseClass} border-slate-600 focus:ring-cyan-500 focus:border-cyan-500 border`;
    }

    return (
        <Section ref={sectionRef} id="contact">
            <div className="max-w-3xl mx-auto text-center contact-title">
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

            <div className="mt-12 max-w-3xl mx-auto">
                {isSubmitted ? (
                    <div className="p-4 text-center bg-emerald-900/50 border border-emerald-700 text-emerald-300 rounded-md">
                        <h3 className="font-semibold text-lg">¡Mensaje enviado con éxito!</h3>
                        <p className="mt-1">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                    </div>
                ) : (
                    <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-300">Nombre Completo</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                autoComplete="name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={getInputClassName('fullName')}
                                required
                                aria-invalid={!!errors.fullName}
                                aria-describedby="fullName-error"
                            />
                            {errors.fullName && <p id="fullName-error" className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-slate-300">Nombre de la Empresa <span className="text-slate-500">(Opcional)</span></label>
                            <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                autoComplete="organization"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={getInputClassName('companyName')}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={getInputClassName('email')}
                                required
                                aria-invalid={!!errors.email}
                                aria-describedby="email-error"
                            />
                            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Teléfono <span className="text-slate-500">(Opcional)</span></label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className={getInputClassName('phone')}
                            />
                        </div>
                         <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-slate-300">Servicio de Interés</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={getInputClassName('service')}
                                    required
                                    aria-invalid={!!errors.service}
                                    aria-describedby="service-error"
                                >
                                    <option value="" disabled>Selecciona un servicio</option>
                                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                    <option value="Otro">Otro</option>
                                </select>
                                {errors.service && <p id="service-error" className="mt-1 text-sm text-red-400">{errors.service}</p>}
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-slate-300">Presupuesto Estimado <span className="text-slate-500">(Opcional)</span></label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className={getInputClassName('budget')}
                                >
                                    <option value="">Selecciona un rango</option>
                                    <option value="< $2,500 MXN">Menos de $2,500 MXN</option>
                                    <option value="$2,500 - $5,000 MXN">$2,500 - $5,000 MXN</option>
                                    <option value="$5,000 - $10,000 MXN">$5,000 - $10,000 MXN</option>
                                    <option value="$10,000 - $20,000 MXN">$10,000 - $20,000 MXN</option>
                                    <option value="> $20,000 MXN">Más de $20,000 MXN</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300">Cuéntanos sobre tu proyecto</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={getInputClassName('message')}
                                placeholder="Describe tus objetivos, público objetivo y cualquier otra información relevante."
                                required
                                aria-invalid={!!errors.message}
                                aria-describedby="message-error"
                            />
                            {errors.message && <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
                        </div>
                         <div className="sm:col-span-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <input
                                        id="privacyPolicy"
                                        name="privacyPolicy"
                                        type="checkbox"
                                        checked={privacyPolicyAccepted}
                                        onChange={handlePrivacyChange}
                                        className={`h-4 w-4 mt-1 rounded bg-slate-600 border-slate-500 text-cyan-600 focus:ring-cyan-500 ${errors.privacyPolicy ? 'border-red-500' : 'border-slate-500'}`}
                                        required
                                        aria-describedby="privacy-error"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="privacyPolicy" className="font-medium text-slate-300">
                                        He leído y acepto la <a href="/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Política de Privacidad</a>.
                                    </label>
                                    <p className="text-slate-500">Acepto que Creappsy almacene mis datos para responder a mi consulta.</p>
                                </div>
                            </div>
                            {errors.privacyPolicy && <p id="privacy-error" className="mt-1 text-sm text-red-400">{errors.privacyPolicy}</p>}
                        </div>
                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </Section>
    );
};

export default ContactSection;