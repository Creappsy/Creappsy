import React from 'react';
import type { NavItem, Service, Project, PriceTier, BlogPost, TeamMember, FAQ, Testimonial } from './types';

// Icons for services
const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
);
const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>
);
const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.62-3.385m0 0a15.998 15.998 0 01-3.388-1.621m-5.043.025a15.998 15.998 0 00-3.388-1.622m5.043.025a15.998 15.998 0 01-1.622 3.385" /></svg>
);
const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1-1.5m0 0l-1 1.5m1-1.5l1-1.5M9 11.25l1.5 1.5m-1.5-1.5l-1.5 1.5" /></svg>
);
const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
);


export const CONTACT_EMAIL = 'info@creappsy.com';
export const WHATSAPP_NUMBER = '+52 55 1219 3749'; // For display purposes
export const WHATSAPP_API_NUMBER = '525512193749'; // For the URL
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_API_NUMBER}`;

export const BLOG_CATEGORIES: readonly NavItem[] = [
    { name: 'SEO', href: '/blog' },
    { name: 'Diseño UI/UX', href: '/blog' },
    { name: 'Marketing', href: '/blog' },
    { name: 'Desarrollo', href: '/blog' },
];

export const SERVICES: readonly Service[] = [
    {
      icon: <CodeBracketIcon className="h-6 w-6 text-cyan-400" />,
      title: 'Desarrollo Web a Medida',
      description: 'Creamos sitios web y aplicaciones web robustas, escalables y optimizadas para el rendimiento.',
      href: '/servicios/desarrollo-web'
    },
    {
      icon: <MegaphoneIcon className="h-6 w-6 text-purple-400" />,
      title: 'Marketing Digital',
      description: 'Impulsamos tu presencia en línea con estrategias de SEO, SEM y redes sociales que generan resultados.',
      href: '/servicios/marketing-digital'
    },
    {
      icon: <PaintBrushIcon className="h-6 w-6 text-rose-400" />,
      title: 'Diseño UI/UX',
      description: 'Diseñamos interfaces intuitivas y atractivas que ofrecen una experiencia de usuario excepcional.',
      href: '/servicios/diseno-ui-ux'
    },
    {
      icon: <ChartBarIcon className="h-6 w-6 text-emerald-400" />,
      title: 'Analítica y Estrategia',
      description: 'Convertimos datos en decisiones. Analizamos el rendimiento para optimizar y alcanzar tus objetivos.',
      href: '/servicios/analitica-estrategia'
    },
    {
      icon: <DocumentTextIcon className="h-6 w-6 text-amber-400" />,
      title: 'Creación de Contenido',
      description: 'Creamos contenido que conecta. Desde blogs hasta guiones, producimos textos que cautivan a tu audiencia.',
      href: '/servicios/creacion-de-contenido'
    },
];

export const NAV_ITEMS: readonly NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/nosotros' },
  { 
    name: 'Servicios',
    href: '/servicios',
    children: SERVICES.map(service => ({
        name: service.title,
        href: service.href,
    })),
  },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Precios', href: '/precios' },
  {
    name: 'Blog',
    href: '/blog',
    children: BLOG_CATEGORIES,
  },
  { name: 'Contacto', href: '/contacto' },
  {
    name: 'Más',
    href: '#',
    children: [
      { name: 'Nuestra Historia', href: '/nuestra-historia' },
      { name: 'Carreras', href: '/carreras' },
      { name: 'Prensa', href: '/prensa' },
    ],
  },
];


export const PORTFOLIO_PROJECTS: readonly Project[] = [
    {
      imageUrl: 'https://picsum.photos/seed/ModaUrbana/800/600',
      title: 'E-commerce "Moda Urbana"',
      category: 'Desarrollo Web',
      description: 'Plataforma de comercio electrónico completa con pasarelas de pago y gestión de inventario para una marca de ropa en crecimiento.',
      serviceCategory: 'Desarrollo Web a Medida',
    },
    {
      imageUrl: 'https://picsum.photos/seed/LanzaTech/800/600',
      title: 'Campaña "Lanza-Tech"',
      category: 'Marketing Digital',
      description: 'Estrategia de lanzamiento para una startup tecnológica, logrando un 200% de ROI en 3 meses a través de SEO y SEM.',
      serviceCategory: 'Marketing Digital',
    },
    {
      imageUrl: 'https://picsum.photos/seed/FitTrack/800/600',
      title: 'App Móvil "FitTrack"',
      category: 'Diseño UI/UX',
      description: 'Diseño de interfaz y experiencia de usuario para una aplicación de fitness, mejorando la retención de usuarios en un 35%.',
      serviceCategory: 'Diseño UI/UX',
    },
    {
      imageUrl: 'https://picsum.photos/seed/InnovateConf/800/600',
      title: 'Landing Page "Innovate Conference"',
      category: 'Desarrollo Web',
      description: 'Página de aterrizaje interactiva para una conferencia internacional de tecnología, con sistema de registro integrado.',
      serviceCategory: 'Desarrollo Web a Medida',
    },
    {
      imageUrl: 'https://picsum.photos/seed/FinanzasClaras/800/600',
      title: 'Dashboard "FinanzasClaras"',
      category: 'Analítica y Estrategia',
      description: 'Creación de un dashboard de inteligencia de negocio para una fintech, visualizando KPIs en tiempo real para la toma de decisiones.',
      serviceCategory: 'Analítica y Estrategia',
    },
    {
      imageUrl: 'https://picsum.photos/seed/HogarFuturo/800/600',
      title: 'Branding "Hogar Futuro"',
      category: 'Diseño Web',
      description: 'Diseño de identidad de marca y sitio web corporativo para una agencia inmobiliaria, enfocado en generar confianza y leads de alta calidad.',
      serviceCategory: 'Desarrollo Web a Medida',
    },
    {
      imageUrl: 'https://picsum.photos/seed/ViajeroConecta/800/600',
      title: 'App "ViajeroConecta"',
      category: 'Diseño UI/UX',
      description: 'Diseño de la interfaz de una aplicación móvil social para viajeros, priorizando la facilidad de uso y la interacción entre usuarios.',
      serviceCategory: 'Diseño UI/UX',
    },
    {
      imageUrl: 'https://picsum.photos/seed/SaborGourmet/800/600',
      title: 'Blog "SaborGourmet"',
      category: 'Creación de Contenido',
      description: 'Estrategia y producción de contenido SEO para un blog de recetas, triplicando el tráfico orgánico en 6 meses.',
      serviceCategory: 'Creación de Contenido',
    },
];

export const PRICING_TIERS: readonly PriceTier[] = [
    {
        name: 'Despegue Rápido',
        price: '$2,500',
        period: 'MXN / Pago Único',
        delivery: 'Entrega: 2 Días Hábiles',
        features: [
            '1 Página: Landing Page estática de alto impacto',
            'Formulario de Contacto optimizado',
            'Enlace directo a WhatsApp',
            'BONO: Instalación Píxel de Facebook/Meta',
        ],
        cta: 'Empezar Ahora',
    },
    {
        name: 'Negocio con Autoridad',
        price: '$4,900',
        period: 'MXN / Pago Único',
        delivery: 'Entrega: 3 Días Hábiles',
        features: [
            'Hasta 4 Secciones',
            'Sección de Testimonios',
            'Gestión de Dominio y Hosting GRATIS (1er año)',
            'Configuración de Google Maps',
            'Garantía de Satisfacción (1 ronda de ajustes)',
        ],
        cta: 'Elegir Plan Más Vendido',
        recommended: true,
    },
    {
        name: 'E-commerce de Alto Valor',
        price: '$9,900',
        period: 'MXN / Pago Único',
        delivery: 'Entrega: 5 Días Hábiles',
        features: [
            'Funcionalidad de E-commerce',
            'Configuración de Pasarela de Pago (PayPal/Stripe)',
            'Optimización para 15 productos iniciales',
            'BONO: Capacitación en video de 30 min.',
            'Páginas legales esenciales',
        ],
        cta: 'Iniciar Tienda',
        limited: true,
    },
];

export const BLOG_POSTS: readonly BlogPost[] = [
    {
      category: 'SEO',
      title: '5 Mitos del SEO que Debes Dejar de Creer en 2024',
      author: 'Ana García',
      date: '15 Jul, 2024',
      excerpt: 'El mundo del SEO está en constante cambio. Desmentimos los mitos más comunes para que tu estrategia sea efectiva.',
      imageUrl: 'https://picsum.photos/seed/SEO-Mitos/800/600',
    },
    {
      category: 'Diseño UI/UX',
      title: 'Principios de Diseño de Interfaz para No Diseñadores',
      author: 'Carlos Reyes',
      date: '10 Jul, 2024',
      excerpt: 'Aprende los conceptos básicos del diseño de UI para mejorar la apariencia y usabilidad de tus proyectos digitales.',
      imageUrl: 'https://picsum.photos/seed/UI-Principios/800/600',
    },
    {
      category: 'Marketing',
      title: 'Cómo Usar la IA para Potenciar tu Marketing de Contenidos',
      author: 'Sofía Morales',
      date: '5 Jul, 2024',
      excerpt: 'Descubre herramientas y estrategias para integrar la inteligencia artificial en tu creación de contenidos y optimizar resultados.',
      imageUrl: 'https://picsum.photos/seed/IA-Marketing/800/600',
    },
    {
      category: 'Desarrollo',
      title: 'Server-Side Rendering (SSR) vs. Static Site Generation (SSG)',
      author: 'Luis Fernández',
      date: '1 Jul, 2024',
      excerpt: '¿Cuál es la mejor opción para tu próximo proyecto web? Analizamos las ventajas y desventajas de cada enfoque.',
      imageUrl: 'https://picsum.photos/seed/SSR-SSG/800/600',
    },
    {
      category: 'Marketing',
      title: 'El Poder del Email Marketing en la Era de las Redes Sociales',
      author: 'Sofía Morales',
      date: '25 Jun, 2024',
      excerpt: 'Aunque no lo creas, el email sigue siendo una de las herramientas más poderosas para la conversión y fidelización.',
      imageUrl: 'https://picsum.photos/seed/Email-Marketing/800/600',
    },
    {
      category: 'Diseño UI/UX',
      title: 'Accesibilidad Web: ¿Por qué es importante y cómo empezar?',
      author: 'Carlos Reyes',
      date: '20 Jun, 2024',
      excerpt: 'Crear sitios web accesibles no solo es lo correcto, sino que también mejora el SEO y amplía tu audiencia.',
      imageUrl: 'https://picsum.photos/seed/Accesibilidad-Web/800/600',
    },
];

export const TESTIMONIALS: readonly Testimonial[] = [
    {
        quote: 'Creappsy transformó nuestra presencia online. Su equipo no solo entregó un sitio web increíble, sino que también nos guiaron en cada paso. ¡El ROI fue casi inmediato!',
        name: 'Elena Rivera',
        role: 'CEO de Moda Urbana',
        imageUrl: 'https://i.pravatar.cc/150?u=ElenaRivera',
    },
    {
        quote: 'El profesionalismo y la creatividad del equipo de Creappsy superaron todas nuestras expectativas. Entendieron nuestra visión a la perfección y la ejecutaron de manera impecable.',
        name: 'Marcos Aguilar',
        role: 'Fundador de Lanza-Tech',
        imageUrl: 'https://i.pravatar.cc/150?u=MarcosAguilar',
    },
    {
        quote: 'Trabajar con Creappsy fue un cambio de juego para nosotros. Su enfoque en la experiencia del usuario mejoró nuestras tasas de conversión en un 40%. Altamente recomendados.',
        name: 'Valeria Soto',
        role: 'Directora de Producto en FitTrack',
        imageUrl: 'https://i.pravatar.cc/150?u=ValeriaSoto',
    },
];

export const TEAM_MEMBERS: readonly TeamMember[] = [
    {
        name: 'Ana García',
        role: 'CEO & Fundadora',
        bio: 'Con más de 10 años de experiencia en la industria digital, Ana lidera Creappsy con una visión clara: fusionar tecnología y creatividad para resolver problemas reales.',
        imageUrl: 'https://i.pravatar.cc/150?u=AnaGarcia',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Carlos Reyes',
        role: 'Director de Diseño (UI/UX)',
        bio: 'Carlos es un apasionado del diseño centrado en el usuario. Su obsesión es crear interfaces que no solo sean bellas, sino también intuitivas y eficientes.',
        imageUrl: 'https://i.pravatar.cc/150?u=CarlosReyes',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Luis Fernández',
        role: 'Líder de Desarrollo',
        bio: 'Un arquitecto de software que convierte ideas complejas en código limpio y escalable. Luis es el cerebro técnico detrás de nuestros proyectos más ambiciosos.',
        imageUrl: 'https://i.pravatar.cc/150?u=LuisFernandez',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Sofía Morales',
        role: 'Estratega de Marketing Digital',
        bio: 'Sofía vive y respira datos. Su especialidad es crear campañas de marketing que no solo generan clics, sino que construyen marcas y comunidades.',
        imageUrl: 'https://i.pravatar.cc/150?u=SofiaMorales',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Javier Peña',
        role: 'Desarrollador Frontend',
        bio: 'Javier es el puente entre el diseño y el código. Se especializa en dar vida a las interfaces con animaciones fluidas y una atención meticulosa al detalle.',
        imageUrl: 'https://i.pravatar.cc/150?u=JavierPena',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Laura Méndez',
        role: 'Project Manager',
        bio: 'Laura se asegura de que cada proyecto se entregue a tiempo y dentro del presupuesto, manteniendo una comunicación clara y constante con nuestros clientes.',
        imageUrl: 'https://i.pravatar.cc/150?u=LauraMendez',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
];

export const PRICING_FAQS: readonly FAQ[] = [
  {
    question: '¿Qué necesito para empezar con el plan "Despegue Rápido"?',
    answer: 'Para cumplir con la entrega en 2 días, necesitamos que tengas todo tu contenido listo: textos, logo en alta calidad y las imágenes que quieras usar. Nosotros nos encargamos del resto.'
  },
  {
    question: '¿El dominio y hosting del plan "Negocio con Autoridad" son gratis para siempre?',
    answer: 'Nosotros gestionamos la compra y configuración inicial y cubrimos el costo del primer año como un bono de bienvenida. A partir del segundo año, el costo de renovación del dominio (aprox. $20 USD/año) y hosting corre por tu cuenta.'
  },
  {
    question: '¿Puedo vender productos digitales con el plan E-commerce?',
    answer: '¡Sí! La pasarela de pago que configuramos (PayPal/Mercado Pago) te permite vender tanto productos físicos como digitales. Te mostraremos cómo configurarlos en la capacitación incluida.'
  },
  {
    question: '¿Qué pasa si necesito más de una ronda de ajustes?',
    answer: 'Nuestro proceso está diseñado para ser muy eficiente y la ronda de ajustes incluida suele ser suficiente. Si necesitas cambios adicionales, se cotizan por separado a una tarifa por hora preferencial para nuestros clientes.'
  },
  {
    question: '¿Ofrecen servicios de mantenimiento mensual?',
    answer: 'Actualmente estamos enfocados en los pagos únicos para la creación de sitios. Sin embargo, estamos desarrollando planes de mantenimiento mensual que incluirán actualizaciones, copias de seguridad y soporte. ¡Anunciaremos más detalles pronto!'
  }
];