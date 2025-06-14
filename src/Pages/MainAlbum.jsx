import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

import AlbumDefultBanner from '../assets/AlbumDefultBanner.jpg';
import AlbumMobileBanner from '../assets/AlbumMobileBanner.jpg';
import MainAlbumCompo from '../Components/MainAlbumCompo';
import ScrollTopComp from '../Components/ScrollTopComp';

const MainAlbum = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      console.log('Searching for:', trimmedTerm);
    }
  };

  return (
    <div className="w-full mt-19">
      {/* Header Section  */}
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        >
          {/* Mobile Image */}
          <motion.img
            src={AlbumMobileBanner}
            alt="Album Mobile Banner"
            className="w-full h-full object-cover md:hidden"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          {/* Desktop/Tablet Image */}
          <motion.img
            src={AlbumDefultBanner}
            alt="Album Default Banner"
            className="w-full h-full object-cover hidden md:block"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <motion.h1
            className="text-5xl md:text-6xl font-bellefair text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Collections
          </motion.h1>
          <motion.p
            className="text-md md:text-xl font-bellefair text-white mt-2 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Every frame tells a story beyond words! Dive into timeless moments captured with passion and artistry! <br />
            Let your heart wander through memories frozen in light!
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="w-full max-w-md relative mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search your album..."
              className="w-full font-bellefair border shadow-xl border-gray-400 hover:border-white px-4 py-2 pr-10 bg-transparent text-white backdrop-blur-xs focus:outline-none focus:border-white transition duration-300"
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              <FaSearch className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Album Component */}
      <div className="mt-10 px-4 md:px-10 pb-20">
        <MainAlbumCompo searchTerm={searchTerm} />
      </div>
      <ScrollTopComp />
    </div>
  );
};

export default MainAlbum;