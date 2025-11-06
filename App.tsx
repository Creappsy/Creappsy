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
import NosotrosPage from './pages/NosotrosPage';
import PricingPage from './pages/PricingPage';

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
        if (pathname === '/precios') {
            return <PricingPage />;
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
        </div>
    );
};

export default App;