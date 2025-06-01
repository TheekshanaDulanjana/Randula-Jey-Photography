import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopComp = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setShowScrollButton(false), 10000);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showScrollButton && (
      <button
        onClick={scrollToTop}
        className="fixed cursor-pointer bottom-8 right-20 w-8 h-8 flex items-center justify-center  backdrop-blur-sm bg-transparent text-[var(--RandulaBlue)] shadow-lg outline transition-transform transform hover:scale-110 group z-[60] overflow-hidden"
        aria-label="Scroll to top"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--RandulaBlue)]">
          <FaArrowUp className="text-sm font-bold" />
        </span>
        <span className="absolute left-0 bottom-0 w-0 h-full transition-all duration-300 group-hover:w-full z-0"></span>
      </button>
    )
  );
};

export default ScrollTopComp;