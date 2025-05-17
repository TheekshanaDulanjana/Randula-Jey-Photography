import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import l1 from '../assets/AboutBgImg.jpg';
import l2 from '../assets/AboutBgImg.jpg';
import l3 from '../assets/AboutBgImg.jpg';

const testimonials = [
  {
    id: 1,
    image: l1,
    coupleImage: p1,
    names: "Sanduni & Perera",
    date: "24th of April 2025",
    message: "Randula exceeded all our expectations with his exceptional work. His attention to detail and ability to capture the essence of our special day was remarkable. Every photo tells a story, and we couldn't be happier with the results."
  },
  {
    id: 2,
    image: l2,
    coupleImage: p2,
    names: "Another & Couple",
    date: "15th of May 2025",
    message: "Randula exceeded all our expectations with his exceptional work. His attention to detail and ability to capture the essence of our special day was remarkable. Every photo tells a story, and we couldn't be happier with the results."
  },
  {
    id: 3,
    image: l3,
    coupleImage: p3,
    names: "Third & Example",
    date: "30th of June 2025",
    message: "Working with Randula was a pleasure from start to finish. His creative vision and technical expertise resulted in photographs that we will cherish forever. He made us feel comfortable throughout the entire process."
  }
];

export default function TestimonialsCompo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // ✅ Touch handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      handlePrev();
    } else if (deltaX < -50) {
      handleNext();
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto pt-30 my-12 px-4 sm:px-6 lg:px-0">
      {/* Section Title for Mobile */}
      <div className="lg:hidden mb-8 text-center">
        <h1 className="text-3xl text-[var(--RandulaBlue)] font-bellefair">
          Customer Experiences That Inspire!
        </h1>
        <h3 className="text-md text-gray-600 font-bellefair mt-2">
          We Cherish Your Testimonials!
        </h3>
      </div>

      <div
        className="flex flex-col lg:flex-row bg-white overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row w-full"
          >
            {/* Left - Image Section */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden relative">
              <img
                src={currentTestimonial.coupleImage}
                alt="Couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-4 right-4 flex items-end gap-2">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-right text-white"
                >
                  <p className="text-sm sm:text-sm font-bellefair"> Next </p>
                  <p className="text-lg sm:text-lg md:text-lg font-bellefair -mt-2 italic">{nextTestimonial.names}</p>
                </motion.div>

                <motion.button
                  onClick={handleNext}
                  className='cursor-pointer'
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}>
                  <img
                    src={nextTestimonial.coupleImage}
                    alt={nextTestimonial.names}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover border-2 border-white"
                  />
                </motion.button>
              </div>
            </div>

            {/* Right - Text Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 bg-gray-50 relative flex flex-col justify-center">
              {/* Section Title for Desktop */}
              <div className='hidden lg:block pb-15'>
                <h1 className="text-3xl md:text-4xl text-[var(--RandulaBlue)] font-bellefair">
                  Customer Experiences That Inspire!
                </h1>
                <h3 className="text-md md:text-lg text-gray-600 font-bellefair mt-2">
                  We Cherish Your Testimonials!
                </h3>
              </div>

              <FaQuoteRight className="text-gray-200 absolute bottom-6 right-6 text-4xl sm:text-5xl md:text-6xl opacity-50" />
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-800 leading-relaxed font-bellefair text-base sm:text-lg md:text-xl mb-6 max-w-xl text-justify">
                  {currentTestimonial.message}
                </p>
                <p className="text-[var(--RandulaBlue)] font-bellefair text-lg sm:text-md border-l-4 border-[var(--RandulaBlue)] pl-2 italic">
                  {currentTestimonial.names} <br />
                  <span className='text-sm -mt-2'>{currentTestimonial.date}</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6 sm:mt-8">
        {/* Only show these buttons on larger screens */}
        <div className="hidden lg:flex">
          <button
            onClick={handlePrev}
            className="bg-white p-2 pl-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer duration-200"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-[var(--RandulaBlue)] text-sm sm:text-base" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3  transition-all duration-200 ${currentIndex === index ? 'bg-[var(--RandulaBlue)] scale-125' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className="hidden lg:flex">
          <button
            onClick={handleNext}
            className="bg-white p-2 pr-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer duration-200"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-[var(--RandulaBlue)] text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </div>
  );
}
