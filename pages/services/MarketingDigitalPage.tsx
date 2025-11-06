import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const process = [
    { title: 'Auditoría y Análisis Inicial', description: 'Evaluamos tu presencia digital actual, analizamos a tu competencia y definimos KPIs claros para medir el éxito de nuestras estrategias.' },
    { title: 'Planificación Estratégica', description: 'Desarrollamos una estrategia multicanal personalizada que combina SEO, SEM, redes sociales y marketing de contenidos para alcanzar tus objetivos.' },
    { title: 'Ejecución y Optimización', description: 'Lanzamos las campañas y monitoreamos su rendimiento en tiempo real, realizando ajustes continuos para maximizar el ROI y mejorar los resultados.' },
    { title: 'Reporte y Análisis de Resultados', description: 'Te proporcionamos informes detallados y transparentes que muestran el impacto de nuestras acciones, junto con recomendaciones para los próximos pasos.' }
];

const subServices = [
  { title: 'Optimización para Motores de Búsqueda (SEO)', description: 'Mejoramos tu visibilidad en Google para atraer tráfico orgánico de calidad y posicionarte como una autoridad en tu sector.' },
  { title: 'Publicidad de Pago por Clic (SEM/PPC)', description: 'Creamos y gestionamos campañas en Google Ads y redes sociales para generar leads y ventas de manera inmediata y medible.' },
  { title: 'Gestión de Redes Sociales', description: 'Construimos y gestionamos tu comunidad en línea, creando contenido de valor que genera engagement y fideliza a tus clientes.' },
  { title: 'Marketing de Contenidos', description: 'Producimos artículos de blog, videos y otros recursos que atraen, educan y convierten a tu audiencia objetivo.' },
];

const MarketingDigitalPage: React.FC = () => {
    return (
        <ServiceDetailPage
            title="Marketing Digital"
            subtitle="Estrategias de Crecimiento"
            description="Aumentamos tu visibilidad, atraemos a tu público objetivo y convertimos visitantes en clientes. Diseñamos estrategias de marketing digital integrales y basadas en datos para impulsar el crecimiento de tu negocio."
            process={process}
            relatedServiceCategory="Marketing Digital"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestras Tácticas</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Un enfoque 360° para construir y fortalecer tu presencia en línea.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subServices.map(service => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-medium text-purple-400">{service.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ServiceDetailPage>
    );
};

export default MarketingDigitalPage;