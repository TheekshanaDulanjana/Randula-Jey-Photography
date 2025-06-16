import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiLinkedin,
} from 'react-icons/si';
import { Phone } from 'lucide-react';

import logo from '../assets/RandulaJay_Logo.png';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fadeClass, setFadeClass] = useState('opacity-0');

  const triggerFadeTransition = (callback) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      callback();
      setFadeClass('opacity-100');
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
    { path: '/packages', label: 'Offers' },
    { path: '#faq', label: 'Support', sectionId: 'faq' },
    { path: '#contact', label: 'Inquiry', sectionId: 'contact' },
  ];

  const renderNavItem = ({ path, label, sectionId }) => {
    if (label === 'Home') {
      return (
        <button
          onClick={() =>
            triggerFadeTransition(() => {
              scrollToTop(path, 'home');
              navigate('/');
            })
          }
          className="hover:text-[var(--RandulaBlue)] text-lg cursor-pointer"
        >
          {label}
        </button>
      );
    } else if (
      label === 'Support' ||
      label === 'Inquiry' ||
      label === 'Testimonials'
    ) {
      return (
        <button
          onClick={() =>
            triggerFadeTransition(() => scrollToSection(sectionId))
          }
          className="hover:text-[var(--RandulaBlue)] text-lg cursor-pointer"
        >
          {label}
        </button>
      );
    } else {
      return (
        <Link
          to={path}
          onClick={() => triggerFadeTransition(() => scrollToTop(path))}
          className="hover:text-[var(--RandulaBlue)] text-lg cursor-pointer"
        >
          {label}
        </Link>
      );
    }
  };

  return (
    <footer className="bg-gray-200 text-[var(--RandulaBlue)] px-6 py-8 text-sm overflow-hidden font-bellefair">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row">
        {/* Column 1: Logo and Text (Hidden on tablet and mobile) */}
        <div className="hidden lg:block w-full lg:w-3/7 mb-8 lg:mb-0 lg:pl-20">
          <button onClick={handleLogoClick} className="cursor-pointer">
            <img
              src={logo}
              className="w-16 mb-4"
              alt="Randula Jay Photography"
            />
          </button>
          <p className="text-gray-700 text-lg">
            We Crown up Your Dreams! <br />
            Capturing life's precious moments with
            <br />
            Creativity and Passion!
          </p>
        </div>

        <div className="w-full md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-5 md:gap-8 text-center sm:text-left">
          {/* Column 2: Useful Links */}
          <div className="sm:pl-4 md:pl-0">
            <h3 className="text-2xl mb-4">Useful Links</h3>
            <ul className="space-y-1 text-gray-700">
              {navItems.map((item) => (
                <li key={item.path}>{renderNavItem(item)}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="sm:pl-4  md:pl-0">
            <h3 className="text-2xl mb-4">Support</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center sm:justify-start justify-center gap-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=randulajeeyphotography@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-lg hover:text-[var(--RandulaBlue)]"
                >
                  randulajeeyphotography@gmail.com
                </a>
              </li>
              <li className="text-lg flex items-center sm:justify-center justify-center gap-2 max-w-[500px]">
                <span>
                  No.36, Wilmot Balasuriya Mawatha,
                  <br /> Nupe,Matara, <br />
                  Sri Lanka.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Make a Reservation */}
          <div className="sm:pl-4 md:pl-0 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl mb-4">Make a Reservation</h3>
            <p className="text-gray-700 mb-1 text-lg leading-6 pb-2">
              Book your photography <br />session today.
            </p>
            <div className="w-40 h-8 outline-1 outline-gray-700 hover:outline-[var(--RandulaBlue)] flex items-center justify-center">
              <a
                href="tel:+94719365797"
                className="flex items-center gap-2 text-gray-700 hover:text-[var(--RandulaBlue)]"
              >
                <Phone className="w-4 h-4" />
                +94 719 365 797
              </a>
            </div>

            <div className="w-40 h-8 outline-1 outline-gray-700 hover:outline-[var(--RandulaBlue)] flex items-center justify-center mt-2">
              <a
                href="https://wa.me/94719365797"
                className="flex items-center gap-2 text-gray-700 hover:text-[var(--RandulaBlue)]"
              >
                <SiWhatsapp className="w-4 h-4" />
                +94 719 365 797
              </a>
            </div>
          </div>

          {/* Column 5: Social Links */}
          <div className="sm:pl-4 md:ml-8 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl mb-4">Social Links</h3>
            <div className="flex flex-col space-y-2 text-gray-700">
              <a
                href="https://www.facebook.com/RANDULAJEYPHOTOGRAPHY"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-lg hover:text-[var(--RandulaBlue)] transition-colors"
              >
                <SiFacebook className="w-4 mr-2 text-xl" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/randula_jey_photography/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-lg hover:text-[var(--RandulaBlue)] transition-colors"
              >
                <SiInstagram className="w-4 mr-2 text-xl" /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/randula-jey-bba4692a8/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-lg hover:text-[var(--RandulaBlue)] transition-colors"
              >
                <SiLinkedin className="w-4 mr-2 text-xl" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-400 text-center">
        <div className="text-[var(--RandulaBlue)]  text-lg ">
          © {new Date().getFullYear()} Randula Jey Photography. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
