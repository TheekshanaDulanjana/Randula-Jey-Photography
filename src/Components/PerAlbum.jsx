import React, { useState, useEffect } from 'react';
import { useParams,  useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollTopComp from './ScrollTopComp';
import LoadingSpinnerCompo from './LoadingSpinnerCompo';

import AlbumDefultBanner from '../assets/AlbumDefultBanner.jpg';
import AlbumMobileBanner from '../assets/AlbumMobileBanner.jpg';

const PerAlbum = () => {
  const { albumId } = useParams();
  const location = useLocation();

  const shootType = location.state?.shootType || '';
  const title = location.state?.title || '';

  const [folderData, setFolderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const getImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s1000`;
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${albumId}' in parents and mimeType contains 'image'&key=${apiKey}`
      );
      const data = await response.json();
      setFolderData(data.files || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchImages();
  }, [albumId]);

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : folderData.length - 1));
  };

  const showNextImage = () => {
    setSelectedImageIndex((prev) => (prev < folderData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full mt-19">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <div className="w-full h-full">
          {/* Desktop/Tablet Image */}
          <img
            src={AlbumDefultBanner}
            alt="Album Default Banner"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile Image -*/}
          <img
            src={AlbumMobileBanner}
            alt="Album Mobile Banner"
            className="md:hidden w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10" />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-6xl font-bellefair text-white">
            {title}
          </h1>
          <p className="text-xl text-white font-bellefair mt-2">{shootType}</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-40">
              <LoadingSpinnerCompo />
            </div>
          ) : (
            <Masonry
              breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
              className="flex gap-4"
              columnClassName="masonry-column"
            >
              {folderData.map((file, index) => (
                <motion.div
                  key={file.id}
                  className="mb-4 relative overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => openImage(index)}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <img
                    src={getImageUrl(file.id)}
                    alt={file.name}
                    className="w-full h-auto object-cover text -sm transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </Masonry>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full p-4 flex items-center justify-center">
              <motion.img
                src={getImageUrl(folderData[selectedImageIndex].id)}
                alt="Full Image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="max-h-[90vh] w-auto rounded-md shadow-2xl"
              />

              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeImage}
              >
                &times;
              </button>
              <button
                className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={showPrevImage}
              >
                <FaChevronLeft className="text-[var(--RandulaBlue)] text-sm sm:text-base" />
              </button>
              <button
                className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={showNextImage}
              >
                <FaChevronRight className="text-[var(--RandulaBlue)] text-sm sm:text-base" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollTopComp />
    </div>
  );
};

export default PerAlbum;