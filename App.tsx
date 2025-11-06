import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/chatbot/Chatbot';
import NosotrosPage from './pages/NosotrosPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import LegalPage from './pages/LegalPage';
import HablemosPage from './pages/HablemosPage';
import DesarrolloWebPage from './pages/services/DesarrolloWebPage';
import MarketingDigitalPage from './pages/services/MarketingDigitalPage';
import DisenoUIUXPage from './pages/services/DisenoUIUXPage';
import AnaliticaEstrategiaPage from './pages/services/AnaliticaEstrategiaPage';
import CreacionDeContenidoPage from './pages/services/CreacionDeContenidoPage';
import {
    privacyPolicyContent,
    termsOfServiceContent,
    cookiePolicyContent,
    contratoDesarrolloWebContent,
    contratoMarketingContent,
    contratoDisenoUIUXContent,
    avisoLegalContent
} from './pages/legalContent';
import NuestraHistoriaPage from './pages/NuestraHistoriaPage';
import CookieBanner from './components/CookieBanner';


const MainPage: React.FC = () => (
    <>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
    </>
);

const App: React.FC = () => {
    // A simple router-like logic based on pathname
    const renderPage = () => {
        const pathname = window.location.pathname;
        if (pathname === '/nosotros') {
            return <NosotrosPage />;
        }
        if (pathname === '/nuestra-historia') {
            return <NuestraHistoriaPage />;
        }
        if (pathname === '/precios') {
            return <PricingPage />;
        }
        if (pathname === '/servicios') {
            return <ServicesPage />;
        }
        if (pathname === '/servicios/desarrollo-web') {
            return <DesarrolloWebPage />;
        }
        if (pathname === '/servicios/marketing-digital') {
            return <MarketingDigitalPage />;
        }
        if (pathname === '/servicios/diseno-ui-ux') {
            return <DisenoUIUXPage />;
        }
        if (pathname === '/servicios/analitica-estrategia') {
            return <AnaliticaEstrategiaPage />;
        }
        if (pathname === '/servicios/creacion-de-contenido') {
            return <CreacionDeContenidoPage />;
        }
        if (pathname === '/portafolio') {
            return <PortfolioPage />;
        }
        if (pathname === '/blog') {
            return <BlogPage />;
        }
        if (pathname === '/contacto') {
            return <ContactPage />;
        }
        if (pathname === '/hablemos') {
            return <HablemosPage />;
        }
        if (pathname === '/carreras') {
            return <CareersPage />;
        }
        if (pathname === '/prensa') {
            return <PressPage />;
        }
        if (pathname === '/aviso-de-privacidad') {
            return <LegalPage title="Aviso de Privacidad" content={privacyPolicyContent} />;
        }
        if (pathname === '/terminos-de-servicio') {
             return <LegalPage title="Términos de Servicio" content={termsOfServiceContent} />;
        }
        if (pathname === '/politica-de-cookies') {
            return <LegalPage title="Política de Cookies" content={cookiePolicyContent} />;
        }
        if (pathname === '/aviso-legal') {
            return <LegalPage title="Aviso Legal" content={avisoLegalContent} />;
        }
        if (pathname === '/contratos/desarrollo-web') {
            return <LegalPage title="Modelo de Contrato: Desarrollo Web" content={contratoDesarrolloWebContent} />;
        }
        if (pathname === '/contratos/marketing-digital') {
            return <LegalPage title="Modelo de Contrato: Marketing Digital" content={contratoMarketingContent} />;
        }
        if (pathname === '/contratos/diseno-ui-ux') {
            return <LegalPage title="Modelo de Contrato: Diseño UI/UX" content={contratoDisenoUIUXContent} />;
        }
        // Default to main page for "/" or any other path
        return <MainPage />;
    };

    return (
        <div className="bg-slate-900 text-slate-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <Header />
            <main>
                {renderPage()}
            </main>
            <Footer />
            <WhatsAppButton />
            <Chatbot />
            <CookieBanner />
        </div>
    );
};

export default App;