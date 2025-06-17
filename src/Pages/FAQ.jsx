import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const Faq = () => {
  const [leftOpenId, setLeftOpenId] = useState(null);
  const [rightOpenId, setRightOpenId] = useState(null);

  const faqs = [
  {
    id: 1,
    question: "What is required to reserve a date for our event?",
    answer: "To reserve your event date, a non-refundable booking fee of LKR 20,000 must be paid. Dates will only be officially secured once this payment is completed.",
  },
  {
    id: 2,
    question: "When is the full payment due for our package?",
    answer: "The remaining payment must be settled at least one week before the event date. However, payment terms can be discussed and adjusted depending on the package and your specific needs.",
  },
  {
    id: 3,
    question: "Do you offer any discounts or price negotiations?",
    answer: "Yes, we occasionally offer discounts, and package prices may be negotiable depending on the event and requirements.",
  },
  {
    id: 4,
    question: "Can we customize the photography packages to suit our needs?",
    answer: "Absolutely! All packages are customizable to better match your preferences and requirements. Please contact us to discuss the available options.",
  },

  {
    id: 5,
    question: "Any special plans for foreign couples with limited time?",
    answer: "Yes, we provide special arrangements for foreign couples. Pre-shoot sessions and related coverage can be completed within one week to suit your travel schedule.",
  },
  {
    id: 6,
    question: "When can we schedule the pre-shoot session?",
    answer: "The pre-shoot can be arranged up to 30 days before the wedding day. Early scheduling is recommended to ensure availability and proper planning.",
  },
  {
    id: 7,
    question: "What happens if we need to change the wedding date after booking?",
    answer: "If the client changes the wedding date, our team will still cover the event on the new date, subject to availability. Please inform us as early as possible to confirm the change.",
  },
    
  {
    id: 8,
    question: "Can we have a physical meeting to discuss the details?",
    answer: "Yes, we are happy to meet in person or discuss everything online. You’ll find our full contact details, location, and online platforms below this section.",
  },

  {
    id: 9,
    question: "How long does it take to deliver the photo album?",
    answer: "The final album will be delivered within 3 months from the event date.",
  },
  {
    id: 10,
    question: "How many photos will be captured during the event?",
    answer: "During the morning session, we capture around 100–150 photos, and over 250 photos during the main function.",
  },
  {
    id: 11,
    question: "Are transport charges included in the package?",
    answer: "We offer free transport within Matara. However, additional transport charges will apply for locations outside Matara. These charges may vary depending on the fuel cost on the wedding day.",
  },

  {
    id: 12,
    question: "Is social media publication included in the photography packages?",
    answer: "No, social media publication is not essentially included in any package. However, if you wish to have your event featured on our social media platforms, you may discuss it with us in advance.",
  },
    
];


  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

  const renderFaqColumn = (faqs, openId, setOpenId) => {
    return faqs.map(({ id, question, answer }, index) => {
      const isOpen = openId === id;
      return (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.1 + index * 0.05,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
            isOpen ? 'bg-gray-200 shadow-sm' : 'bg-gray-100'
          }`}
          onClick={() => setOpenId(isOpen ? null : id)}
        >
          <div className="flex justify-between items-start text-[var(--RandulaBlue)] text-xl sm:text-xl ">
            <span>{id}. {question}</span>
            <span className={`text-xl transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-45'}`}>
              {isOpen ? '−' : '+'}
            </span>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="text-base sm:text-xl text-gray-600 mt-2">{answer}</p>
            </motion.div>
          )}
        </motion.div>
      );
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full mx-auto px-4 lg:px-12 xl:px-20 sm:px-6 md:px-8 py-16 sm:py-35 font-bellefair bg-white"
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.1,
          ease: [0.16, 0.77, 0.47, 0.97]
        }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="sm:hidden flex items-center">
          <h3 className="text-lg text-gray-600 text-left mr-2">Customer Support</h3>
          <div className="w-[50px] border-t border-gray-600" />
        </div>
        <div className="hidden sm:flex items-center mb-1">
          <h3 className="text-md text-gray-600 mr-2 font-bellefair">Customer Support</h3>
          <div className="w-[50px] border-t border-gray-600"></div>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-[var(--RandulaBlue)] mb-6 text-left"
        >
          Frequently Asked Questions
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="space-y-4 sm:space-y-5">
          {renderFaqColumn(leftFaqs, leftOpenId, setLeftOpenId)}
        </div>
        <div className="space-y-4 sm:space-y-5">
          {renderFaqColumn(rightFaqs, rightOpenId, setRightOpenId)}
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;