import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NAV_ITEMS } from '../constants';
import type { NavItem } from '../types';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const [openDesktopSubMenu, setOpenDesktopSubMenu] = useState<string | null>(null);
  const desktopMenuTimers = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuToggleRef.current &&
        !mobileMenuToggleRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const toggleMobileSubMenu = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget.dataset;
    if (name) {
      setOpenMobileSubMenu(prev => (prev === name ? null : name));
    }
  }, []);

  const handleDesktopMenuEnter = useCallback((e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    const { name } = e.currentTarget.dataset;
    if (name) {
      clearTimeout(desktopMenuTimers.current[name]);
      setOpenDesktopSubMenu(name);
    }
  }, []);

  const handleDesktopMenuLeave = useCallback((e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    const { name } = e.currentTarget.dataset;
    if (name) {
      desktopMenuTimers.current[name] = setTimeout(() => {
          setOpenDesktopSubMenu(null);
      }, 200);
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Creappsy<span className="text-cyan-400">.</span>
          </a>
          <nav className="hidden md:flex space-x-1 items-center">
            {NAV_ITEMS.map((item: NavItem) =>
              item.children ? (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={handleDesktopMenuEnter}
                  onMouseLeave={handleDesktopMenuLeave}
                  data-name={item.name}
                >
                  <a 
                    href={item.href} 
                    className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center p-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    onFocus={handleDesktopMenuEnter}
                    onBlur={handleDesktopMenuLeave}
                    data-name={item.name}
                    aria-haspopup="true"
                    aria-expanded={openDesktopSubMenu === item.name}
                  >
                    {item.name}
                    <ChevronDownIcon className={`h-4 w-4 ml-1 text-slate-400 transition-transform duration-200 ${openDesktopSubMenu === item.name ? 'rotate-180' : ''}`} />
                  </a>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-md shadow-lg bg-slate-800/90 backdrop-blur-sm ring-1 ring-slate-700 transition-all duration-300 transform ${openDesktopSubMenu === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                    aria-label={item.name}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <a 
                          key={child.name} 
                          href={child.href} 
                          className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors rounded-md mx-1"
                          onFocus={handleDesktopMenuEnter}
                          onBlur={handleDesktopMenuLeave}
                          data-name={item.name}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={item.name} href={item.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors p-3 rounded-md">
                  {item.name}
                </a>
              )
            )}
          </nav>
          <div className="md:hidden">
            <button ref={mobileMenuToggleRef} onClick={toggleMobileMenu} className="p-2 rounded-md text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-slate-900/95 backdrop-blur-sm" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item: NavItem) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={toggleMobileSubMenu}
                      data-name={item.name}
                      className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                      aria-haspopup="true"
                      aria-expanded={openMobileSubMenu === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${openMobileSubMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileSubMenu === item.name && (
                      <div className="pl-5 pt-1 pb-2">
                        {item.children.map((child) => (
                          <a key={child.name} href={child.href} onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors">
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href} onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;