import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const process = [
    { title: 'Investigación y Empatía', description: 'Realizamos investigaciones de usuarios, análisis competitivos y definimos "user personas" para entender profundamente las necesidades y puntos de dolor de tu audiencia.' },
    { title: 'Arquitectura y Wireframing', description: 'Estructuramos la información y creamos wireframes de baja fidelidad para definir el flujo de usuario y la disposición de los elementos de manera lógica e intuitiva.' },
    { title: 'Diseño de Interfaz (UI) y Prototipado', description: 'Creamos un sistema de diseño visual atractivo y coherente con tu marca. Construimos prototipos interactivos que permiten probar la experiencia antes del desarrollo.' },
    { title: 'Pruebas de Usabilidad y Entrega', description: 'Validamos el diseño con usuarios reales para identificar y corregir problemas de usabilidad. Preparamos y entregamos todos los activos de diseño al equipo de desarrollo.' }
];

const subServices = [
  { title: 'Diseño de Experiencia de Usuario (UX)', description: 'Nos enfocamos en la lógica, la estructura y el flujo de la interacción para que tu producto digital sea fácil y agradable de usar.' },
  { title: 'Diseño de Interfaz de Usuario (UI)', description: 'Creamos la capa visual de tu producto, cuidando la tipografía, los colores, los iconos y cada detalle para construir una interfaz estéticamente impactante.' },
  { title: 'Auditoría de Usabilidad', description: 'Evaluamos tu producto existente para identificar puntos de fricción y proponer mejoras concretas que incrementen la satisfacción y la conversión.' },
  { title: 'Sistemas de Diseño', description: 'Creamos guías de estilo y librerías de componentes reutilizables que aseguran consistencia y eficiencia en el diseño y desarrollo a largo plazo.' },
];

const DisenoUIUXPage: React.FC = () => {
    return (
        <ServiceDetailPage
            title="Diseño UI/UX"
            subtitle="Experiencias Memorables"
            description="Creamos interfaces que no solo son visualmente atractivas, sino también intuitivas y eficientes. Nuestro enfoque centrado en el usuario garantiza que tu producto digital sea amado por tu audiencia y cumpla tus objetivos de negocio."
            process={process}
            relatedServiceCategory="Diseño UI/UX"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestro Enfoque de Diseño</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Fusionamos arte y ciencia para crear productos digitales que funcionan.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subServices.map(service => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-medium text-rose-400">{service.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ServiceDetailPage>
    );
};

export default DisenoUIUXPage;