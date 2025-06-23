import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

import SitharaNaveen from '../assets/SitharaNaveen.jpg';
import AhinsaIsuruWED from '../assets/AhinsaIsuruWED.jpg';
import SinethSanchila from '../assets/SinethSanchila.jpg';
import NisharaYuwani from '../assets/NisharaYuwani.jpg';
import GathikaIshara from '../assets/GathikaIshara.jpg';
import DilshikaPiyath from '../assets/DilshikaPiyath.jpg';
import UthpalaSanjanu from '../assets/UthpalaSanjanu.jpg';
import SasiniHarshana from '../assets/SasiniHarshana.jpg';

export default function RecentAlbums() {
  const images = [
  { title: 'Ahinsa & Isuru', imageUrl: AhinsaIsuruWED, albumId: '1cViwIfG95MKOc2VCY67JV84gVJj8VAUT?usp' , shootType:'Wedding Shoot' },
  { title: 'Dilshika & Piyath', imageUrl: DilshikaPiyath, albumId: '1HJ7zGmNS_XGs9vle_Chl0AQ33k9ZU28i?usp' , shootType:'Wedding shoot' },
  { title: 'Gathika & Ishara', imageUrl: GathikaIshara, albumId: '1W0OFwobZPXeF6-ro-f6X9YA3sd2wQi0K?usp' , shootType:'Wedding shoot' },
  { title: 'Nishara & Yuwani', imageUrl: NisharaYuwani, albumId: '1p0CgymRWsXhZEIGA9_kQVJaKo_bMASn_?usp' , shootType:'Wedding shoot' },
  { title: 'Sasini & Harshana', imageUrl: SasiniHarshana, albumId: '1YS3vVBdMTD1lsm8it-mjLSMOIwRtt5PN?usp'  , shootType:'Pre Shoot'},
  { title: 'Sineth & Sanchila', imageUrl: SinethSanchila, albumId: '14JcmqfBtzQtEmp4nTjfY1LpxbDWjtxmG?usp' , shootType:'Wedding Shoot' },
  { title: 'Sithara & Naveen', imageUrl: SitharaNaveen, albumId: '1Zkfs1cADg990HGJ73ij4gSgJy5dE0jxo?usp' , shootType:'Wedding shoot' },
  { title: 'Uthpala & Sanjanu', imageUrl: UthpalaSanjanu, albumId: '14VbZJn_9wkdrFdlrREB6oRcmc7Vb_KVq?usp'  , shootType:'Pre Shoot'},
  ];

  const duplicatedImages = [...images, ...images];
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTouchDevice, setIsTouchDevice] = useState(() =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardDimensions = () => {
    if (windowWidth >= 1024) return { width: '280px', height: '400px' };
    if (windowWidth >= 768) return { width: '220px', height: '320px' };
    return { width: '280px', height: '400px' };
  };

  const { width: cardWidth, height: cardHeight } = getCardDimensions();

  const swipeHandlers = useSwipeable({
    trackMouse: false,
  });

  const handleClick = (item) => {
    navigate(`/album/${item.albumId}`, {
      state: {
        shootType: item.shootType,
        title: item.title,
      },
    });
  };

  return (
    <div className='w-full flex flex-col items-center gap-4 sm:px-6 overflow-hidden'>
      <h1 className="text-center text-3xl sm:text-4xl text-[var(--RandulaBlue)] mt-20 sm:mt-30 -mb-5 font-bellefair">
        Curated Collection of Albums!
      </h1>

      <h3 className="text-center text-lg sm:text-md text-gray-600 font-bellefair">
        What I have Created!
      </h3>

      <div className='relative w-full max-w-full mx-auto'>
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-left {
            display: flex;
            width: max-content;
            animation: scroll-left 90s linear infinite;
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className='overflow-hidden'>
          <motion.div
            {...(isTouchDevice ? swipeHandlers : {})}
            className="animate-scroll-left hover:pause"
          >
            {duplicatedImages.map((item, index) => (
              <div
                key={index}
                className='group bg-white hover:shadow-sm transition-shadow cursor-pointer inline-block overflow-hidden'
                style={{ width: cardWidth, margin: '0.5rem' }}
                onClick={() => handleClick(item)}
              >

                <div
                  className='relative w-full overflow-hidden'
                  style={{ height: `calc(${cardHeight} - 40px)` }}
                >
                  <img
                    src={item.imageUrl}
                    alt='listing cover'
                    className='w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none'>
                    <span className='text-white text-sm sm:text-xl font-bellefair drop-shadow-md'>
                      See Album
                    </span>
                  </div>
                </div>

                <div className='p-2 h-[40px] bg-gradient-to-t from-gray-100 to-white flex items-center justify-center'>
                  <p className='truncate text-sm sm:text-lg text-center font-bellefair text-[var(--RandulaBlue)]'>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
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
