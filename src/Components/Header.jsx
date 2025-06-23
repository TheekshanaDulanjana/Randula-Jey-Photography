import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RandulaJay_Logo from '../assets/RandulaJay_Logo.png';

export default function Header() {
  const [fadeClass, setFadeClass] = useState('opacity-0');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerFadeTransition = (callback) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      callback();
      setFadeClass('opacity-100');
      setIsMobileMenuOpen(false);
    }, 1000);
  };

  const scrollToTop = (path, sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#`);
    }
  };

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      const tryScroll = () => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${sectionId}`);
        }
      };

      setTimeout(tryScroll, 100);
      window.history.replaceState({}, '', '/');
    }
  }, [location]);

  useEffect(() => {
    setTimeout(() => setFadeClass('opacity-100'), 100);
  }, []);

  const handleLogoClick = () => {
    triggerFadeTransition(() => {
      navigate('/');
      scrollToTop('/', 'home');
    });
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Essence' },
    { path: '/main-album', label: 'Snapshots' },
    { path: '#testimonials', label: 'Testimonials', sectionId: 'testimonials' },
    { path: '#faq', label: 'Support', sectionId: 'faq' },
    { path: '#contact', label: 'Inquiry', sectionId: 'contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItem = ({ path, label, sectionId }) => {
    const textClasses = "cursor-pointer px-4 py-2 lg:px-0 lg:py-0 text-lg lg:text-xl";

    if (label === 'Home') {
      return (
        <button
          onClick={() =>
            triggerFadeTransition(() => {
              scrollToTop(path, 'home');
              navigate('/');
            })
          }
          className={textClasses}
        >
          {label}
        </button>
      );
    } else if (label === 'Support' || label === 'Inquiry' || label === 'Testimonials') {
      return (
        <button
          onClick={() =>
            triggerFadeTransition(() => scrollToSection(sectionId))
          }
          className={textClasses}
        >
          {label}
        </button>
      );
    } else {
      return (
        <Link
          to={path}
          onClick={() =>
            triggerFadeTransition(() => scrollToTop(path))
          }
          className={textClasses}
        >
          {label}
        </Link>
      );
    }
  };

  return (
    <header className={`bg-white fixed top-0 left-0 w-full z-50 h-20`}>
      <div className={`bg-white fixed top-0 left-0 w-full z-50 h-20 shadow-sm backdrop-blur-lg duration-[1500ms] `}>
        <div className="flex justify-between items-center max-w-full lg:px-12 xl:px-20 mx-auto px-4 sm:px-6 h-full">
          {/* Logo */}
          <button onClick={handleLogoClick} className="cursor-pointer">
            <img src={RandulaJay_Logo} alt="Randula Jey Logo" className="h-15 w-auto transition-all" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8 font-bellefair text-[var(--RandulaBlue)]">
              {navItems.map((item) => (
                <li key={item.path} className="relative group transition-all duration-300">
                  {renderNavItem(item)}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--RandulaBlue)] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block w-6 h-0.5 bg-[var(--RandulaBlue)] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[var(--RandulaBlue)] ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-[var(--RandulaBlue)] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul className="flex flex-col font-bellefair text-[var(--RandulaBlue)]">
            {navItems.map((item) => (
              <li key={item.path} className="relative group transition-all duration-300 border-b border-gray-100 last:border-b-0">
                <div className="px-6 py-2">
                  {renderNavItem(item)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
