import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const process = [
    { title: 'Definición de Objetivos y KPIs', description: 'Trabajamos contigo para definir qué significa el éxito para tu negocio y establecemos los indicadores clave de rendimiento (KPIs) para medirlo.' },
    { title: 'Implementación y Configuración', description: 'Configuramos y personalizamos herramientas como Google Analytics 4, Tag Manager y plataformas de visualización para recopilar los datos correctos de manera precisa.' },
    { title: 'Análisis e Interpretación', description: 'Vamos más allá de los números para encontrar insights valiosos sobre el comportamiento de tus usuarios, identificando oportunidades de mejora y crecimiento.' },
    { title: 'Estrategia y Hoja de Ruta', description: 'Convertimos los datos en un plan de acción. Te entregamos una hoja de ruta con recomendaciones priorizadas para optimizar tu producto y tus estrategias de marketing.' }
];

const subServices = [
  { title: 'Configuración de Analítica Web', description: 'Implementamos un seguimiento robusto para medir todo lo que importa, desde el tráfico hasta las conversiones más complejas.' },
  { title: 'Optimización de la Tasa de Conversión (CRO)', description: 'Utilizamos datos y pruebas A/B para mejorar sistemáticamente el rendimiento de tu sitio web y maximizar tus resultados.' },
  { title: 'Dashboards y Visualización de Datos', description: 'Creamos paneles de control personalizados y fáciles de entender para que puedas monitorear la salud de tu negocio de un vistazo.' },
  { title: 'Consultoría Estratégica Digital', description: 'Actuamos como tu socio estratégico, ayudándote a tomar decisiones informadas basadas en datos para el crecimiento a largo plazo.' },
];

const AnaliticaEstrategiaPage: React.FC = () => {
    return (
        <ServiceDetailPage
            title="Analítica y Estrategia"
            subtitle="Decisiones Basadas en Datos"
            description="Dejamos de lado las suposiciones y te ayudamos a tomar decisiones inteligentes basadas en datos. Recopilamos, analizamos y convertimos la información de tus usuarios en una hoja de ruta clara para el crecimiento."
            process={process}
            relatedServiceCategory="Analítica y Estrategia"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Pilares Estratégicos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Cómo transformamos datos brutos en inteligencia de negocio.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subServices.map(service => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-medium text-emerald-400">{service.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ServiceDetailPage>
    );
};

export default AnaliticaEstrategiaPage;