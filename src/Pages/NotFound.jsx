import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Randula Jey Photography";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center p-6">
      <div>
        <h1 className="text-6xl font-bellefair  mb-4 text-[var(--RandulaBlue)]">404</h1>
        <p className="text-2xl text-[var(--RandulaBlue)] mb-6 font-bellefair">Oops! We can’t seem to find the page you’re looking for.</p>
        <a
          href="/"
          className="font-bellefair px-5 sm:px-6 py-1 sm:py-2 text-sm sm:text-base bg-transparent text-[var(--RandulaBlue)] border border-[var(--RandulaBlue)] relative overflow-hidden backdrop-blur-sm transition duration-300 group"
            >
              <span className="relative z-10 group-hover:text-white">Go To Home</span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-[var(--RandulaBlue)] transition-all cursor-pointer duration-300 group-hover:w-full z-0" />
        </a>
      </div>
    </div>
  );

};

export default NotFound;
