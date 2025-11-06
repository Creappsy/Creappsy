import React, { useState, useEffect } from 'react';

const CALENDLY_URL = "https://calendly.com/creappsy-demo/consulta-30min";

const CalendlyEmbed: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading of the widget
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-slate-800/50 rounded-lg border border-slate-700 shadow-lg h-[600px] w-full flex flex-col transition-all duration-300">
            <div className="p-4 border-b border-slate-700 text-center">
                <h3 className="font-bold text-lg">Consulta de 30 Minutos</h3>
                <p className="text-sm text-slate-400">con el equipo de Creappsy</p>
            </div>
            <div className="flex-grow p-4 relative">
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <svg className="animate-spin h-8 w-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="mt-4 text-slate-400">Cargando calendario...</p>
                        </div>
                    </div>
                ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center text-center bg-slate-900/50 rounded-md p-4">
                        <h4 className="text-xl font-semibold">¡Estamos listos para hablar contigo!</h4>
                        <p className="mt-2 text-slate-400">
                            Nuestro widget de Calendly se cargaría aquí. Para continuar, por favor haz clic en el botón de abajo para abrir el calendario en una nueva pestaña.
                        </p>
                        <a 
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block px-8 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Agendar mi Cita
                        </a>
                        <p className="text-xs text-slate-500 mt-4">
                            (Serás redirigido a Calendly.com)
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalendlyEmbed;