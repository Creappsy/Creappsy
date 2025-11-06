import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';
import Section from '../../components/Section';

const process = [
    { title: 'Descubrimiento y Estrategia', description: 'Comenzamos por entender a fondo tus objetivos de negocio y tu público para definir una estrategia clara y un plan de proyecto detallado.' },
    { title: 'Diseño UI/UX y Prototipado', description: 'Creamos wireframes y prototipos interactivos que definen la estructura y la experiencia de usuario, asegurando un diseño intuitivo antes de escribir una sola línea de código.' },
    { title: 'Desarrollo y Codificación', description: 'Nuestro equipo de desarrolladores da vida al diseño utilizando tecnologías modernas, enfocándose en un código limpio, escalable y optimizado para el rendimiento.' },
    { title: 'Pruebas y Lanzamiento', description: 'Realizamos pruebas exhaustivas en múltiples dispositivos y navegadores para garantizar la calidad. Una vez aprobado, desplegamos tu sitio web y te acompañamos en el lanzamiento.' }
];

const subServices = [
  { title: 'Sitios Web Corporativos', description: 'Creamos la carta de presentación digital de tu empresa, enfocada en la usabilidad y la comunicación efectiva de tu marca.' },
  { title: 'Tiendas en Línea (E-commerce)', description: 'Desarrollamos plataformas de comercio electrónico robustas, seguras y fáciles de gestionar, integradas con las principales pasarelas de pago.' },
  { title: 'Aplicaciones Web a Medida', description: 'Construimos soluciones complejas, desde paneles de administración internos hasta plataformas interactivas para tus clientes.' },
  { title: 'Landing Pages de Alta Conversión', description: 'Diseñamos y desarrollamos páginas de aterrizaje optimizadas para capturar leads y maximizar el retorno de tus campañas de marketing.' },
];

const DesarrolloWebPage: React.FC = () => {
    return (
        <ServiceDetailPage
            title="Desarrollo Web a Medida"
            subtitle="Soluciones Digitales"
            description="Transformamos tus ideas en experiencias web funcionales, rápidas y seguras. Creamos desde sitios corporativos elegantes hasta aplicaciones web complejas, siempre con un enfoque en la escalabilidad y el rendimiento."
            process={process}
            relatedServiceCategory="Desarrollo Web a Medida"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lo que Ofrecemos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Nuestra experiencia cubre todo el espectro del desarrollo web moderno.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subServices.map(service => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-medium text-cyan-400">{service.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ServiceDetailPage>
    );
};

export default DesarrolloWebPage;