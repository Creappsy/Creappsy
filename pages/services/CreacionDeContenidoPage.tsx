import React from 'react';
import ServiceDetailPage from '../../components/ServiceDetailPage';

const process = [
    { title: 'Estrategia y Planificación', description: 'Definimos tu voz de marca, investigamos a tu audiencia y creamos un calendario editorial para guiar toda la producción de contenido.' },
    { title: 'Creación y Redacción', description: 'Nuestro equipo de redactores y creativos produce contenido original, relevante y optimizado para SEO que resuena con tu público objetivo.' },
    { title: 'Revisión y Aprobación', description: 'Colaboramos contigo para revisar el contenido, asegurando que cumpla con tus expectativas y los más altos estándares de calidad antes de su publicación.' },
    { title: 'Distribución y Promoción', description: 'Publicamos el contenido en los canales adecuados y lo promocionamos para maximizar su alcance e impacto, atrayendo tráfico y generando engagement.' }
];

const subServices = [
  { title: 'Redacción de Blogs (SEO)', description: 'Artículos optimizados que te posicionan como un experto en tu industria y atraen tráfico orgánico de calidad a tu sitio web.' },
  { title: 'Copywriting para Redes Sociales', description: 'Textos creativos y persuasivos para tus publicaciones en redes sociales que fomentan la interacción y construyen una comunidad.' },
  { title: 'Guiones para Video', description: 'Creamos guiones atractivos para videos corporativos, de redes sociales o YouTube que comunican tu mensaje de manera efectiva.' },
  { title: 'Email Marketing y Newsletters', description: 'Redactamos campañas de correo electrónico que nutren a tus leads, fidelizan a tus clientes y generan conversiones.' },
];

const CreacionDeContenidoPage: React.FC = () => {
    return (
        <ServiceDetailPage
            title="Creación de Contenido"
            subtitle="Contenido que Conecta"
            description="Producimos contenido de alta calidad que cuenta tu historia, educa a tu audiencia y convierte seguidores en clientes. Desde artículos de blog optimizados para SEO hasta guiones de video atractivos."
            process={process}
            relatedServiceCategory="Creación de Contenido"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nuestros Formatos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                        Adaptamos nuestra creatividad a la plataforma que tu marca necesita.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subServices.map(service => (
                        <div key={service.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-medium text-amber-400">{service.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ServiceDetailPage>
    );
};

export default CreacionDeContenidoPage;