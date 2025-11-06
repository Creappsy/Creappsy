import React, { useState, useEffect, useCallback } from 'react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = useCallback(() => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    }, []);

    const handleDecline = useCallback(() => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-[100]">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="p-4 rounded-lg bg-slate-800/90 backdrop-blur-sm shadow-lg border border-slate-700 sm:flex sm:items-center sm:justify-between">
                    <div className="flex-1 flex items-start">
                        <p className="text-sm text-slate-300">
                            Utilizamos cookies propias y de terceros para personalizar contenido, analizar nuestro tráfico y mejorar tu experiencia. Al hacer clic en "Aceptar", consientes su uso.
                            <a href="/politica-de-cookies" className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300 underline">Leer Política de Cookies</a>.
                        </p>
                    </div>
                    <div className="mt-4 flex-shrink-0 flex sm:mt-0 sm:ml-4 space-x-3">
                        <button
                            onClick={handleAccept}
                            type="button"
                            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500"
                        >
                            Aceptar
                        </button>
                        <button
                            onClick={handleDecline}
                            type="button"
                            className="flex items-center justify-center px-4 py-2 border border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-200 bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500"
                        >
                            Rechazar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;