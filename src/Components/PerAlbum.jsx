import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

  const showPrevImage = useCallback(() => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : folderData.length - 1));
  }, [folderData]);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((prev) => (prev < folderData.length - 1 ? prev + 1 : 0));
  }, [folderData]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showNextImage, showPrevImage]);

  return (
    <div className="relative w-full mt-19">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <div className="w-full h-full">
          <img
            src={AlbumDefultBanner}
            alt="Album Default Banner"
            className="hidden md:block w-full h-full object-cover"
          />
          <img
            src={AlbumMobileBanner}
            alt="Album Mobile Banner"
            className="md:hidden w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-4xl md:text-6xl font-bellefair text-white">{title}</h1>
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
                  className="mb-4 relative overflow-hidden group cursor-pointer"
                  onClick={() => openImage(index)}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <img
                    src={getImageUrl(file.id)}
                    alt={file.name}
                    className="w-full h-auto object-cover text-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </Masonry>
          )}
        </div>
      </div>

      {/* Modal with buttons */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-full w-full px-4 flex items-center justify-center">
              {/* Left Arrow (hidden on mobile and tablet) */}
              <button
                onClick={showPrevImage}
                className="absolute left-4 md:left-8 text-white text-3xl md:text-5xl z-50 hidden md:inline"
              >
                <FaChevronLeft />
              </button>

              {/* Image */}
              <motion.div
                key={folderData[selectedImageIndex].id}
                className="max-h-[90vh] w-full max-w-5xl"
                drag={window.innerWidth <= 768 ? 'x' : false}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) showNextImage();
                  else if (info.offset.x > 100) showPrevImage();
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img
                  src={getImageUrl(folderData[selectedImageIndex].id)}
                  alt="Full Image"
                  className="max-h-[90vh] w-auto mx-auto"
                />
              </motion.div>

              {/* Right Arrow (hidden on mobile and tablet) */}
              <button
                onClick={showNextImage}
                className="absolute right-4 md:right-8 text-white text-3xl md:text-5xl z-50 hidden md:inline"
              >
                <FaChevronRight />
              </button>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeImage}
              >
                &times;
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
