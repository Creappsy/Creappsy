import React, { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppIcon = () => (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.119.198-1.015 3.698 3.75-1.001.185.116zM12 5.211c.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56.969 0 1.891.19 2.758.56l.123.072.195-.028c.847-.123 1.705-.123 2.552 0l.195.028.123-.072c.867-.37 1.789-.56 2.758-.56v.002z" /></svg>
);

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const message = 'Hola, me gustaría obtener más información sobre sus servicios.';
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const finalWhatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={finalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            aria-label="Contactar por WhatsApp"
        >
            <WhatsAppIcon />
        </a>
    );
};

export default WhatsAppButton;