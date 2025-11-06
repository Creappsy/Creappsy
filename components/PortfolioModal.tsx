import React, { useEffect, useRef, useCallback } from 'react';
import type { Project } from '../types';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!project) return;
    
    const modalNode = modalRef.current;
    if (!modalNode) return;

    const focusableElements = modalNode.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);
  
  const handleModalContentClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={modalRef}
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-slide-up"
        onClick={handleModalContentClick}
      >
        <div className="md:w-1/2">
          <img src={project.imageUrl.replace('/600/400', '/800/600')} alt={project.title} className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-sm font-semibold text-cyan-400">{project.category}</span>
              <h2 className="mt-1 text-3xl font-bold text-white">{project.title}</h2>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <p className="mt-4 text-slate-300 flex-grow">
            {project.description} Este es un texto de ejemplo más largo para rellenar el espacio. La plataforma de comercio electrónico se construyó utilizando tecnologías de vanguardia para garantizar una experiencia de compra fluida y segura. Se implementó un sistema de gestión de inventario personalizado y se integraron múltiples pasarelas de pago para mayor comodidad del cliente.
          </p>
          <div className="mt-6">
            <a href="/contacto" className="inline-block px-6 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-md shadow-lg hover:from-purple-700 hover:to-cyan-600">
              Iniciar un proyecto similar
            </a>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes slide-up {
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PortfolioModal;