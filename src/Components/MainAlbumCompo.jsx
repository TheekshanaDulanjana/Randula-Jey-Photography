import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import l1 from '../assets/PackegesBgImg.jpg';
import l2 from '../assets/PackegesBgImg.jpg';
import l3 from '../assets/PackegesBgImg.jpg';
import l4 from '../assets/l4.jpg';

const images = [
  { title: 'Randula & Tharusha', imageUrl: p1, albumId: '1JlzQI7ardd15MhnQSASlf2vyyrSFcjo_' , shootType:'Wedding shoot'},
  { title: 'Tharusha & Tharusha', imageUrl: p2, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
  { title: 'Randula & Randula', imageUrl: p3, albumId: '1AyuxZzZ6sZGmAhxDF3C2QxCo6x1i-O4d' , shootType:'Wedding shoot' },
  { title: 'Tharusha & Randula', imageUrl: l1, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Pawan & Tharusha', imageUrl: l2, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Randula & Pawan', imageUrl: l3, albumId: 'album_coming_soon'  , shootType:'Wedding shoot'},
  { title: 'Randula & Pawan', imageUrl: l4, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Randula & Pawan', imageUrl: l4, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Pawan & Tharusha', imageUrl: l2, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Randula & Pawan', imageUrl: l3, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },
  { title: 'Randula & Pawan', imageUrl: l4, albumId: 'album_coming_soon'  , shootType:'Wedding shoot'},
  { title: 'Randula & Pawan', imageUrl: l4, albumId: 'album_coming_soon' , shootType:'Wedding shoot' },

];

const INITIAL_COUNT = 8;
const INCREMENT = 8;

function Albums({ item, index }) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleClick = () => {
    navigate(`/album/${item.albumId}`, {
      state: {
        shootType: item.shootType,
        title: item.title,
      },
    });
  };
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden w-[300px] h-[400px]    group"
    >
      <button
        onClick={handleClick}
        className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="relative overflow-hidden w-full h-full">
          <img
            src={item.imageUrl}
            alt="listing cover"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-xl font-bellefair drop-shadow-md">See Album</span>
          </div>
        </div>
        <div className="p-2 flex flex-col -mt-1">
          <p className="truncate text-lg text-center font-bellefair text-[var(--RandulaBlue)]">
            {item.title}
          </p>
        </div>
      </button>
    </motion.div>
  );
}

export default function MainAlbumCompo({ searchTerm = '' }) { 
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const filteredImages = images.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + INCREMENT, filteredImages.length));
  };

  const showLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredImages.length > 0 ? (
          filteredImages.slice(0, visibleCount).map((item, index) => (
            <Albums key={index} item={item} index={index} />
          ))
        ) : (
          <p className="text-center text-2xl text-[var(--RandulaBlue)] font-bellefair  pt-20 pb-20">No results found! 
          <br /> <span className=' text-gray-700 text-2xl'>Sorry, We couldn't find anything matching your search!</span></p>
        )}
      </div>

      <div className="pb-10">
        {visibleCount < filteredImages.length ? (
          <button
            onClick={showMore}
            className="mt-5 block mx-auto font-bellefair px-4 py-1 bg-transparent text-[var(--RandulaBlue)] border border-[var(--RandulaBlue)] relative overflow-hidden backdrop-blur-sm transition duration-300 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Show more
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-full bg-[var(--RandulaBlue)] transition-all duration-300 group-hover:w-full z-0"></span>
          </button>
        ) : (
          filteredImages.length > INITIAL_COUNT && (
            <button
              onClick={showLess}
              className="mt-5 block mx-auto font-bellefair px-4 py-1 bg-transparent text-[var(--RandulaBlue)] border border-[var(--RandulaBlue)] relative overflow-hidden backdrop-blur-sm transition duration-300 group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Show less
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-[var(--RandulaBlue)] transition-all duration-300 group-hover:w-full z-0"></span>
            </button>
          )
        )}
      </div>
    </div>
  );
}
