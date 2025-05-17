import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

import Album01 from '../assets/p1.jpg';
import Album02 from '../assets/p2.jpg';
import Album03 from '../assets/p3.jpg';
import Album04 from '../assets/PackegesBgImg.jpg';
import Album05 from '../assets/PackegesBgImg.jpg';
import Album06 from '../assets/PackegesBgImg.jpg';
import Album07 from '../assets/l4.jpg';
import Album08 from '../assets/PackegesBgImg.jpg';

export default function RecentAlbums() {
  
  const images = [
    { title: 'Album 01', imageUrl: Album01, albumId: '1fmLG-eS0eexGCXKCmtm3_rqurE8mQqPY' , shootType:'Wedding shoot'},
    { title: 'Album 02', imageUrl: Album02, albumId: '1fmLG-eS0eexGCXKCmtm3_rqurE8mQqPY' , shootType:'Wedding shoot' },
    { title: 'Album 03', imageUrl: Album03, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
    { title: 'Album 04', imageUrl: Album04, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
    { title: 'Album 05', imageUrl: Album05, albumId: '1JlzQI7ardd15MhnQSASlf2vyyrSFcjo_' , shootType:'Wedding shoot'},
    { title: 'Album 06', imageUrl: Album06, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
    { title: 'Album 07', imageUrl: Album07, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
    { title: 'Album 08', imageUrl: Album08, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
    ];

  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTouchDevice, setIsTouchDevice] = useState(() =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0
);

  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

      if (width > 1200) {
        setItemsPerPage(4);
      } else if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }

    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [startIndex, setStartIndex] = useState(0);
  const currentPage = Math.floor(startIndex / itemsPerPage);

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => Math.min(prev + itemsPerPage, (totalPages - 1) * itemsPerPage));
  };

  const goToPage = (page) => {
    setDirection(page > currentPage ? 1 : -1);
    setStartIndex(page * itemsPerPage);
  };

  const visibleItems = images.slice(startIndex, startIndex + itemsPerPage);

  const getCardDimensions = () => {
    if (windowWidth >= 1024) return { width: '280px', height: '400px' };
    if (windowWidth >= 768) return { width: '220px', height: '320px' };
    return { width: '280px', height: '400px' };
  };

  const { width: cardWidth, height: cardHeight } = getCardDimensions();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => { if (startIndex + itemsPerPage < images.length) handleNext(); },
    onSwipedRight: () => { if (startIndex > 0) handlePrev(); },
    trackMouse: false,
  });

  const handleClick = (item) => {
    navigate(`/album/${item.albumId}`, {
      state: { 
        shootType: item.shootType, 
        title: item.title },
    });
  };

  return (
    <div className='w-full flex flex-col items-center gap-4 sm:px-6'>
      <h1 className="text-center text-3xl sm:text-4xl text-[var(--RandulaBlue)] mt-20 sm:mt-30 -mb-5 font-bellefair">
        Curated Collection of Albums!
      </h1>

      <h3 className="text-center text-lg sm:text-md text-gray-600 font-bellefair">
        What I have Created!
      </h3>  

      <div className='relative w-full max-w-screen-2xl mx-auto'>
        {!isTouchDevice && startIndex > 0 && (
          <button
            onClick={handlePrev}
            className='absolute left-1 sm:left-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100'
          >
            <FaChevronLeft className='text-[var(--RandulaBlue)] text-sm sm:text-base' />
          </button>
        )}

<AnimatePresence mode="wait">
          <motion.div
            {...(isTouchDevice ? swipeHandlers : {})}
            key={startIndex}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='flex flex-wrap sm:gap-2 justify-center'
          >
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className='group relative bg-white hover:shadow-sm transition-shadow overflow-hidden cursor-pointer'
                style={{ width: cardWidth, height: cardHeight, margin: '0.5rem' }}
                onClick={() => handleClick(item)}
              >
                <div className='relative overflow-hidden w-full h-full'>
                  <img
                    src={item.imageUrl}
                    alt='listing cover'
                    className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <span className='text-white text-sm sm:text-xl font-bellefair drop-shadow-md'>
                      See Album
                    </span>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-gray-100 to-white'>
                  <p className='truncate text-sm sm:text-lg text-center font-bellefair text-[var(--RandulaBlue)]'>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!isTouchDevice && startIndex + itemsPerPage < images.length && (
          <button
            onClick={handleNext}
            className='absolute right-1 sm:right-5 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100'
          >
            <FaChevronRight className='text-[var(--RandulaBlue)] text-sm sm:text-base' />
          </button>
        )}
      </div>

      <div className='flex justify-center items-center gap-2 mt-2'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 transition-colors ${i === currentPage ? 'bg-[var(--RandulaBlue)]' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      <div className="flex items-center -mt-3">
        <button
          title="Snapshots"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            navigate('/main-album');
          }}
          className="mt-5 block mx-auto font-bellefair px-3 sm:px-4 py-1 text-sm sm:text-base bg-transparent text-[var(--RandulaBlue)] border border-[var(--RandulaBlue)] relative overflow-hidden backdrop-blur-sm transition duration-300 group"
        >
          <span className="relative z-10 group-hover:text-white">View more albums</span>
          <span className="absolute left-0 bottom-0 w-0 h-full bg-[var(--RandulaBlue)] transition-all duration-300 group-hover:w-full z-0" />
        </button>
      </div>
    </div>
  );
}
