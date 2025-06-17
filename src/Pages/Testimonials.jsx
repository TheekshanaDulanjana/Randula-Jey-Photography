import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import l1 from '../assets/AboutDefultBanner.jpg';
import l2 from '../assets/AboutDefultBanner.jpg';
import l3 from '../assets/AboutDefultBanner.jpg';

import IsuruTestimonial from '../assets/IsuruTestimonial.jpg';
import AhinsaTestimonial from '../assets/AhinsaTestimonial.jpg';
import ShashiniYasiruTestimonial from '../assets/ShashiniYasiruTestimonial.jpg';

const testimonials = [
  {
    id: 1,
    image: l1,
    coupleImage: ShashiniYasiruTestimonial,
    names: "Shashini & Yasiru",
    date: "23rd of May 2025",
    message: "Highly Recommended❤️ \nThank you to Randula Jay Photography for capturing every emotion, smile, and unforgettable moment of our special day. Your talent for turning memories into art is unmatched. We’re beyond grateful for the beautiful collection of photos that we’ll treasure for a lifetime!"},

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
    names: "Dilan Kaluarachchi ",
    date: " ",
    message: "He is very friendly \nWho has a great sense of art. \nGifted us a quality output combined with nice shots and super editing.❤️ \nThank you randula malli❤️ \nමාතර අංක එකෙ photographer❤️"
  },
  {
    id: 3,
    image: l3,
    coupleImage: p3,
    names: "Sineth & Sanchila",
    date: " ",
    message: "Highly Recommended 💯❤️\nRandula done the shoot better than i experienced \nReally great ❤️\nHighly Recommended 💯❤️"
  },
    {
    id: 3,
    image: l3,
    coupleImage: p3,
    names: "Shalini & Harshana",
    date: "09th of June 2024",
    message: "Highly Recommend Randula Jay Photography..🖤♥️ \nIt was done more beautifully than we expected 🖤♥️"
  },
      {
    id: 3,
    image: l3,
    coupleImage: p3,
    names: "Kavishka",
    date: "09th of June 2024",
    message: "Highly Recommended Photographer ❤️❤️ \nවැඩේ හිතුවෙ නැති විදියට සුපිරියටම තිබුනා. \nThank You So Much Brother Make Our Beautiful Day Even More Beautiful😍😍😍"
  },
        {
    id: 3,
    image: AhinsaTestimonial,
    coupleImage: IsuruTestimonial,
    names: "Isuru & Ahinsa",
    date: "09th of June 2024",
    message: "Randula Jey \nTharusha Rupasinghe I just want to say thank you Randula jey  for your great work and for being so very patient with us all and your professionalism is second to none. Thank you soo much bro and will be sure to recommend you to anyone we know who is looking for a photographer. 🤛🖤"
  },
        {
    id: 3,
    image: ShashiniYasiruTestimonial,
    coupleImage: AhinsaTestimonial,
    names: "Ahinsa & Isuru",
    date: "09th of June 2024",
    message: " So first I have to say something about Randula jey ❤️🫶🏻, like before I met him I thought that he is a person with some attitude and all. \nBut after meeting him Facebook page I was really pleased and happy to meet him. Because he is a person that I saw in photography industry as the most humbled person with great quality with him.🥵 Keeping these quality has make him the person today in this photography industry. Today he is a brand in his industry. \nI have no doubt of recommending him for your lovely day to be more special and more colorful, capturing by his camera lenses.Thank you so much for the lovely moment capturing by you and your team Tharusha Rupasinghe,The pictures are filled with qualities and perfect.🫶🏻❤️"
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
    <div className="relative w-full max-w-full mx-auto pt-30 my-12 px-4 sm:px-6 lg:px-0">
      {/* Section Title for Mobile */}
      <div className="lg:hidden mb-8  text-center">
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
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div> */}

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
              <div className='hidden lg:block pb-10 '>
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
                <p className="text-gray-800 leading-6 font-bellefair text-base sm:text-lg md:text-xl mb-6 max-w-full text-justify">
                  {currentTestimonial.message.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
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
        <div className="flex items-center gap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 hover:cursor-pointer  transition-all duration-200 ${currentIndex === index ? 'bg-[var(--RandulaBlue)] scale-100' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
