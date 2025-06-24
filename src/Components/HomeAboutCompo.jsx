import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';

import HomeAboutImage01 from '../assets/HomeAboutImage01.jpg';
import HomeAboutImage02 from '../assets/HomeAboutImage02.jpg';
import HomeAboutImage03 from '../assets/HomeAboutImage03.jpg';
import HomeAboutImage04 from '../assets/HomeAboutImage04.jpg';
import HomeAboutImage05 from '../assets/HomeAboutImage05.jpg';

const aboutImages = [HomeAboutImage01, HomeAboutImage02, HomeAboutImage03, HomeAboutImage04, HomeAboutImage05];

const HomeAboutCompo = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row pt-30 ">
      {/* Left*/}
      <div className="w-full lg:w-1/2 flex lg:px-12 xl:px-20 items-center justify-center px-4 sm:px-6 py-8 md:py-10 bg-gray-100 z-20 relative">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}          
          className="max-w-xl">

          <div className="flex items-center mb-2">
            <h3 className="text-lg sm:text-md text-gray-600 mr-2 font-bellefair">About Us</h3>
            <div className="w-[50px] border-t border-gray-400" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[var(--RandulaBlue)] font-bellefair mb-3 sm:mb-4">
            Who We Are?
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-bellefair leading-relaxed mb-4 sm:mb-6">

            Randula Jey Photography represents a modern, detail-driven brand that 
            blends artistic vision with a refined style.
            Known for its signature aesthetic and personalized service,
            the brand stands for quality, elegance, and a deep commitment to
            visual storytelling that speaks beyond words.<br className="hidden sm:block" /> <br />
            We don’t just take photos — We craft lasting impressions that feel as real as the moment itself.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              title="Essence"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                navigate('/about');
              }}
              className="font-bellefair px-5 sm:px-6 py-1 sm:py-2 text-sm sm:text-base bg-transparent text-[var(--RandulaBlue)] border border-[var(--RandulaBlue)] relative overflow-hidden backdrop-blur-sm transition duration-300 group"
            >
              <span className="relative z-10 group-hover:text-white">more info...</span>
              <span className="absolute left-0 bottom-0 w-0 h-full bg-[var(--RandulaBlue)] transition-all cursor-pointer duration-300 group-hover:w-full z-0" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          speed={2000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade]}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-10 z-10" />
          {aboutImages.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
              >
                <img
                  src={img}
                  alt={`About Slide ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeAboutCompo;
