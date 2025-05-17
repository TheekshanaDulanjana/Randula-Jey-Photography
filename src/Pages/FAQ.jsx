import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 1, question: "What packages do you offer?", answer: "We offer a variety of wedding photography packages, tailored to your needs. Packages include options for full-day coverage, engagement shoots, albums, and more. Please contact us for detailed pricing." },
    { id: 2, question: "How far in advance should I book?", answer: "We recommend booking at least 6 months in advance to secure your preferred date." },
    { id: 3, question: "Do you provide a second photographer?", answer: "Yes, a second photographer can be included in your package for additional coverage." },
    { id: 4, question: "After the wedding will we receive photos?", answer: "Yes, we deliver edited high-resolution photos within 4-6 weeks via an online gallery." },
    { id: 5, question: "Can we choose locations for our photos?", answer: "Absolutely! We welcome your suggestions for favorite or meaningful locations." },
    { id: 6, question: "What if the weather is bad? (Outdoor Plans)", answer: "We always have backup plans and creative ideas for indoor or covered locations." },
    { id: 7, question: "What if the weather is bad? (Equipment Safety)", answer: "Our equipment is weather-sealed and we take all necessary precautions to protect it during adverse conditions." },
    { id: 8, question: "What if the weather is bad? (Rescheduling)", answer: "In extreme weather conditions, we're happy to discuss rescheduling options at no additional cost." },
  ];

  return (
    <div className="w-full mx-auto px-4 lg:px-12 xl:px-20 sm:px-6 md:px-8 py-16 sm:py-35 font-bellefair bg-white">
      <div className="mb-10">
        <div className="block sm:hidden mb-4">
          <h3 className="text-lg text-gray-600 text-left">Customer Support</h3>
        </div>
        <div className="hidden sm:flex items-center mb-1">
          <h3 className="text-md text-gray-600 mr-2 font-bellefair">Customer Support</h3>
          <div className="w-[50px] border-t border-gray-600"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl text-[var(--RandulaBlue)] mb-6 text-left">Frequently Asked Questions</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {faqs.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className={`p-4 sm:p-5 cursor-pointer transition-all duration-200 ${isOpen ? 'bg-gray-200 shadow-sm' : 'bg-gray-100'}`}
              onClick={() => setOpenId(isOpen ? null : id)}
            >
              <div className="flex justify-between items-start text-[var(--RandulaBlue)] text-lg sm:text-xl font-medium">
                <span>{id}. {question}</span>
                <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-45'}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-base sm:text-lg text-gray-600 mt-2">{answer}</p>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
