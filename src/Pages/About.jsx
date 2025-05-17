import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

import AboutBgImg from '../assets/AboutBgImg.jpg';
import aboutMan from '../assets/about.jpg';
import aboutMan2 from '../assets/p1.jpg';
import ThreeInOne from '../assets/AboutBgImg.jpg';
import ThreeInTwo from '../assets/l4.jpg';
import ThreeInThree from '../assets/l5.jpg';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openImageModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeImageModal = () => setSelectedImage(null);

  const socialLinks = [
    {
      title: 'Whatsapp',
      href: 'https://wa.me/94719365797',
      icon: <SiWhatsapp />,
      color: 'text-green-600',
    },
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/janantha.randula.73',
      icon: <SiFacebook />,
      color: 'text-blue-600',
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/randula_jey/',
      icon: <SiInstagram />,
      color: 'text-pink-600',
    },
  ];

  const images = [ThreeInOne, ThreeInTwo, ThreeInThree];

  return (
    <div className="relative w-full mt-14">
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeImageModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
        >
          <motion.img
            src={AboutBgImg}
            alt="About Randula Jey"
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-90 z-10" />
        </motion.div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bellefair text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bellefair leading-[1.2] text-white max-w-xs sm:max-w-md md:max-w-xl mt-2 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I capture timeless moments of love and joy through my lens!
          </motion.p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full gap-6 md:gap-8 lg:gap-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src={aboutMan}
              alt="About Randula Jay"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover cursor-pointer"
              onClick={() => openImageModal(aboutMan)}
            />
          </motion.div>

          <div className="w-full md:w-full max-w-3xl text-left md:text-left">
            <motion.div
              className="flex items-center mb-1 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-md text-gray-600 mr-2 whitespace-nowrap font-bellefair">About Me</h3>
              <div className="w-[50px] border-t border-gray-600" />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl text-[var(--RandulaBlue)] font-bellefair mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Who I am?
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-800 font-bellefair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Welcome to Randula Jey Wedding Photography, where your most cherished moments are transformed into
              timeless memories. I'm Randula Jey, a passionate wedding photographer dedicated to capturing the beauty,
              emotion, and joy of your special day. <br /><br />
              With a creative eye and attention to detail, I strive to narrate your love story through stunning visuals
              that you can treasure forever. From candid smiles to grand celebrations, my goal is to provide you with a
              seamless and personalized photography experience.
            </motion.p>

            <motion.div
              className="flex  mt-4 sm:mt-6 items-center justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-gray-800 font-bellefair text-sm sm:text-base md:text-lg mt-[2px] sm:mt-[4px]">Follow me on!</p>
              {socialLinks.map(({ title, href, icon, color }) => (
                <React.Fragment key={title}>
                  <a
                    title={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-gray-800 text-base sm:text-lg md:text-xl hover:${color} transition`}
                  >
                    {icon}
                  </a>
                  <p className="text-gray-800 text-sm sm:text-base"> | </p>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full h-auto py-6 sm:py-8 px-4 sm:px-6 bg-gray-100">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full sm:w-[35%] h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-full max-w-2xl">
            <motion.div
              className="flex items-center mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-lg sm:text-md text-gray-600 mr-2 whitespace-nowrap font-bellefair">In my experience</h3>
              <div className="w-[50px] border-t border-gray-600" />
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl text-[var(--RandulaBlue)] font-bellefair mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Experience makes better things!
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-800 font-bellefair"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Welcome to Randula Jey Wedding Photography, where your most cherished moments are transformed into
              timeless memories. I'm Randula Jey, a passionate wedding photographer dedicated to capturing the beauty,
              emotion, and joy of your special day. <br /><br />
              With a creative eye and attention to detail, I strive to narrate your love story through stunning visuals
              that you can treasure forever. From candid smiles to grand celebrations, my goal is to provide you with a
              seamless and personalized photography experience. <br /><br />
              Let's make your dream wedding unforgettable—one click at a time.
            </motion.p>
          </div>

          <motion.div
            className="w-full md:w-1/2 flex sm:justify-center md:justify-center lg:justify-end order-first md:order-last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img
              src={aboutMan2}
              alt="Experience"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover cursor-pointer"
              onClick={() => openImageModal(aboutMan2)}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
