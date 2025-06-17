import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { SiFacebook, SiInstagram, SiWhatsapp, SiLinkedin } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'aos/dist/aos.css';

import ScrollTopComp from '../Components/ScrollTopComp';
import HomeAboutCompo from '../Components/HomeAboutCompo';
import RecentAlbumCompo from '../Components/RecentAlbumCompo';

import HomeDefultImage01 from '../assets/HomeDefultImage01.jpg';
import HomeDefultImage02 from '../assets/HomeDefultImage02.jpg';
import HomeDefultImage03 from '../assets/HomeDefultImage03.jpg';
import HomeDefultImage04 from '../assets/HomeDefultImage04.jpg';
import HomeDefultImage05 from '../assets/HomeDefultImage05.jpg';

import HomeMobileImage01 from '../assets/HomeMobileImage01.jpg';
import HomeMobileImage02 from '../assets/HomeMobileImage02.jpg';
import HomeMobileImage03 from '../assets/HomeMobileImage03.jpg';
import HomeMobileImage04 from '../assets/HomeMobileImage04.jpg';

import Watermarks1 from '../assets/Watermarks1.png';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [startLoop, setStartLoop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSlideshowImages = isMobile || isTablet
    ? [HomeMobileImage01, HomeMobileImage02, HomeMobileImage03, HomeMobileImage04]
    : [HomeDefultImage01, HomeDefultImage02, HomeDefultImage03, HomeDefultImage04, HomeDefultImage05];

  const swiperKey = `${isMobile || isTablet ? 'portrait' : 'landscape'}`;

const [aboutRef, aboutInView] = useInView({ 
  triggerOnce: true, 
  threshold: 0.2 
});
const [recentRef, recentInView] = useInView({ 
  triggerOnce: true, 
  threshold: 0.2 
});


  return (
    <>
      <div className="w-full mt-19 h-screen overflow-hidden relative">
        <Swiper
          key={swiperKey}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          speed={5000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade]}
          className="w-screen h-screen"
        >
          {currentSlideshowImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-screen">
                <motion.img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: isMobile ? 1.3 : 1.15 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: [0.42, 0, 0.58, 1],
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className={`absolute inset-0 flex flex-col -mt-10 justify-center z-20 text-white
    ${isMobile ? 'px-4 items-center text-center' : isTablet ? 'px-10 ml-10 items-start text-left' : 'px-20 ml-20 items-start text-left'}`}
>
  <h1 className={`font-bellefair font-light mb-1 
    ${isMobile ? 'text-3xl' : isTablet ? 'text-5xl -mt-30 -ml-[3px]' : 'text-5xl -ml-[5px]'}`}>
    Randula Jey Photography
  </h1>

  <p className={`font-bellefair leading-6 
    ${isMobile ? 'text-lg mb-1' : isTablet ? 'text-xl mb-1.5' : 'text-xl mb-2'}`}>
    {isMobile ? (
      <div className='leading-6'>
        We Crown up Your Dreams!
        <br />Professional fine-art wedding photographer.
        <br />Specializing in Wedding, Event, Fashion, and 
        <br />Commercial photography.
      </div>
    ) : (
      <>
        We Crown up Your Dreams!
        <br />I am a professional fine-art wedding photographer,
        <br />Passionate about capturing your most cherished moments with creativity and elegance.
        <br />I specialize in Wedding, Event, Fashion, and Commercial photography. 
        <br />Where your dreams are beautifully brought to life.
      </>
    )}
  </p>

  <div className="flex items-center gap-1.5">
    <p className={`font-bellefair text-xl ${isMobile ? 'text-sm' : 'text-lg'} mt-[4px]`}>
      Catch up with us on!
    </p>

    <a 
      href="https://wa.me/94719365797" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-4 h-4 flex items-center justify-center text-white hover:text-green-600"
    >
      <SiWhatsapp size={isMobile ? 18 : 24} />
    </a>
    <span>|</span>

    <a 
      href="https://www.facebook.com/RANDULAJEYPHOTOGRAPHY" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-4 h-4 flex items-center justify-center text-white hover:text-blue-500"
    >
      <SiFacebook size={isMobile ? 18 : 24} />
    </a>
    <span>|</span>

    <a 
      href="https://www.instagram.com/randula_jey_photography/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-4 h-4 flex items-center justify-center text-white hover:text-pink-600"
    >
      <SiInstagram size={isMobile ? 18 : 24} />
    </a>
    <span>|</span>

    <a 
      href="https://www.linkedin.com/in/randula-jey-bba4692a8/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-4 h-4 flex items-center justify-center text-white hover:text-blue-400"
    >
      <SiLinkedin size={isMobile ? 18 : 24} />
    </a>
  </div>
</motion.div>

      </div>

      <div className="flex justify-center items-center">
        <img 
        src={Watermarks1} 
        className={`w-40 opacity-15 ${isMobile ? '-mb-20' : ''}`} 
        alt="Watermark" />

        <motion.div
          className={`absolute font-bilbo text-black opacity-20 ${
            isMobile ? 'text-4xl mt-2 ' : 
            isTablet ? 'text-6xl mt-3 ' : 'text-8xl pt-35'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25, transition: { duration: 0.1 } }}
          viewport={{ once: true, margin: "-100px" }}
          onHoverStart={() => setStartLoop(true)}
          onViewportEnter={() => setStartLoop(true)}
            style={{
            minHeight: '110px', 
            paddingTop: '12rem',   
            paddingBottom: '1rem',
            lineHeight: '1.3',   
            }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={
              startLoop ? { 
                width: ["0%", "110%"], 
                transition: { duration: 8, 
                  ease: "easeInOut", 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  repeatDelay: 1,
                 },
               } : { width: 0 }
              }
            style={{ 
              display: "inline-block",
               whiteSpace: "nowrap", 
               overflow: "hidden" }}
          >
            We Crown up Your Dreams!
          </motion.span>
        </motion.div>
      </div>
      
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='-mt-7'>
        <HomeAboutCompo isMobile={isMobile} isTablet={isTablet} />
      </motion.div>

      <motion.div
        ref={recentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={recentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center mb-2">
        <RecentAlbumCompo isMobile={isMobile} isTablet={isTablet} />
      </motion.div>

      <div className='absolute'>
        <ScrollTopComp isMobile={isMobile} />
      </div>
    </>
  );
};

export default Home;
