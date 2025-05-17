import React, { useState } from 'react';
import PackegesBgImg from '../assets/PackegesBgImg.jpg';
import PackageICompo from '../Components/PackageICompo';
import PackageIICompo from '../Components/PackageIICompo';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import ScrollTopComp from '../Components/ScrollTopComp';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState('wedding');

  return (
    <div className="relative w-full mt-16">
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.img
            src={PackegesBgImg}
            alt="About Randula Jay"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bellefair text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Packages <span className="text-2xl">2025</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-xl font-bellefair leading-[1.2] text-white max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover our photography packages tailored to capture your best moments.
            <br />
            Choose the perfect one for your needs!
          </motion.p>
        </div>
      </div>

      {/* Package category buttons */}
      <motion.div
        className="flex justify-center mt-4 font-bellefair"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex space-x-2">
          {['wedding', 'preshoot'].map((pkg, index) => (
            <React.Fragment key={pkg}>
              <button
                className="text-gray-600 hover:text-[var(--RandulaBlue)] hover:underline cursor-pointer"
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg === 'wedding' ? 'Wedding & Homecoming' : 'Preshoot & Engagement'}
              </button>
              {index === 0 && <span className="text-gray-600">|</span>} 
            </React.Fragment>
          ))}
        </div>
      </motion.div>


      {/* Components based on the selected package */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {selectedPackage === 'wedding' ? <PackageICompo /> : <PackageIICompo />}
      </motion.div>

      <ScrollTopComp />
    </div>
  );
}
