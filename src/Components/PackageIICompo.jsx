import React, { useEffect } from 'react';
import MainBG1 from '../assets/p2.jpg';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PackageIICompo = () => {
  const packages = {
    preShoot: {
      silver: {
        name: "Silver Package",
        price: "LKR 45,000/=",
        items: [
          "Casual photo session.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies.",
          "Your images will be uploaded to Google Drive."
        ]
      },
      gold: {
        name: "Gold Package",
        price: "LKR 75,000/=",
        items: [
          "12x18 fine art story album.",
          "12x18 one framed fine art enlargement.",
          "Casual photo session.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies",
          "Your images will be uploaded to Google Drive."
        ]
      }
    },
    engagement: {
      silver: {
        name: "Silver Package",
        price: "LKR 50,000/=",
        items: [
          "Couple photo session.",
          "Exclusive event coverage.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies.",
          "Your images will be uploaded to Google Drive."
        ]
      },
      gold: {
        name: "Gold Package",
        price: "LKR 80,000/=",
        items: [
          "8x24 fine art story album (40 pages / 20 spreads).",
          "16x24 one framed fine art enlargement.",
          "Couple photo session.",
          "Exclusive event coverage.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies.",
          "Your images will be uploaded to Google Drive."
        ]
      }
    },
    homecoming: {
      silver: {
        name: "Silver Package",
        price: "LKR 50,000/=",
        items: [
          "Couple photo session.",
          "Exclusive event coverage.",
          "Casual photo session.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies.",
          "Your images will be uploaded to Google Drive."
        ]
      },
      gold: {
        name: "Gold Package",
        price: "LKR 100,000/=",
        items: [
          "8x24 / 12x18 fine art story album (50 pages / 25 spreads).",
          "12x18 two framed fine art enlargements.",
          "100 thank you cards.",
          "Couple photo session.",
          "Exclusive event coverage.",
          "High quality edited soft copies.",
          "Unlimited unedited soft copies.",
          "Your images will be uploaded to Google Drive."
        ]
      }
    },
    emerald: {
      items: [
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "8x24 fine art family album.",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions.",
        "Exclusive full event coverage."
      ]
    }
  };

  const evenMore = {
    extras: [
      "Going away photoshoot after the function - LKR 8,000/=",
      "Thank you card (per one) - LKR 120/=",
      "Additional page for magazine album - LKR 2,000/=",
      "An ectra hour - LKR 5,000/="
    ],
    enlargementPrices: [
      "12x18 fine art framed enlargment - LKR 4,000/=",
      "16x24 fine art framed enlargment - LKR 10,000/=",
      "20x30 fine art framed enlargment - LKR 15,000/=",
      "16x24 sign board - LKR 10,000/="
    ],
    storyAlbums: [
      "08x24 story album - LKR 30,000/=",
      "10x24 story album - LKR 35,000/=",
      "12x24 story album - LKR 40,000/=",
      "12x30 or 16x24 story album - LKR 50,000/="
    ],
    videography: [
      "Videography highlight (full hd) - LKR 60,000/=",
      "Videography full (full hd) - LKR 80,000/="
    ],
    reminders: [
      "Social media publication is not essentially included in any package.",
      "Reminder Payment must be settled at least one week before the event.",
      "For date reservation, you must pay LKR 20,000. Dates are only reserved when the booking fee is paid.",
      "The transport charges may increase depending on the fuel cost on the wedding day.",
      "Additional costs will be added for pre-shoot and wedding day transport.",
      "If the date is changed by the client, the event will still be covered by the team.",
      "The pre-shoot date can be arranged up to 30 days before the wedding day.",
      "Packages are customizable to better fit your requirements. Please contact us for any inquiries.",
      "Upto 06 hours of coverage",
      "Free Transport Aaround Matara."
    ]
  };

  const PackageCard = ({ packageData, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        className="border border-gray-200 p-6 text-center"
      >
        <h2 className="text-3xl font-bellefair text-[var(--RandulaBlue)] mb-4">{packageData.name}</h2>
        <ul className="space-y-2 text-left text-xl pt-5 font-bellefair text-gray-700">
          {packageData.items.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.05) }}
              className="flex items-start"
            >
              <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-md text-gray-700 font-poppins font-semibold text-start mt-6"
        >
          {packageData.price}
        </motion.p>
      </motion.div>
    );
  };

  const PackageDisplay = ({ title, packageData }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 -mt-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 h-64 overflow-hidden"
          >
            <img 
              src={MainBG1} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl text-center font-bellefair text-[var(--RandulaBlue)] mb-8 tracking-wider"
          >
            {title}
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PackageCard packageData={packageData.silver} index={0} />
            <PackageCard packageData={packageData.gold} index={1} />
          </div>
        </div>
      </motion.div>
    );
  };

  const AdditionalItem = ({ item, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.li 
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="flex justify-between font-bellefair text-xl text-gray-700"
      >
        <span className="flex items-start">
          <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
          <span>{item.split(' - ')[0]}</span>
        </span>
        <span className="font-medium">{item.split(' - ')[1]}</span>
      </motion.li>
    );
  };

  const AdditionalServices = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 h-64 overflow-hidden"
          >
            <img 
              src={MainBG1} 
              alt="Additional Services" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-light text-center mb-8 tracking-wider font-bellefair text-[var(--RandulaBlue)]"
          >
            Additional Services!
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Extras */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-gray-200 p-6 bg-white"
            >
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Extras</h2>
              <ul className="space-y-3">
                {evenMore.extras.map((item, index) => (
                  <AdditionalItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.div>
            
            {/* Enlargement Prices */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-gray-200 p-6 bg-white"
            >
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Enlargement (framed)</h2>
              <ul className="space-y-3">
                {evenMore.enlargementPrices.map((item, index) => (
                  <AdditionalItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.div>
            
            {/* Story Albums */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-gray-200 p-6 bg-white"
            >
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Story Albums</h2>
              <ul className="space-y-3">
                {evenMore.storyAlbums.map((item, index) => (
                  <AdditionalItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.div>
            
            {/* Videography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-gray-200 p-6 bg-white"
            >
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Videography</h2>
              <ul className="space-y-3">
                {evenMore.videography.map((item, index) => (
                  <AdditionalItem key={index} item={item} index={index} />
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ReminderItem = ({ item, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.li 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="flex items-center font-bellefair text-gray-700 text-xl mb-1"
      >
        <FaAngleRight className="mr-3" />
        <span>{item}</span>
      </motion.li>
    );
  };

  const Reminders = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 h-64 overflow-hidden"
          >
            <img 
              src={MainBG1} 
              alt="Things to Keep in Mind" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-light text-center mb-8 tracking-wider font-bellefair text-[var(--RandulaBlue)]"
          >
            Things to Keep in Mind!
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border border-gray-200 p-8 bg-white"
          >
            <ul className="space-y-4">
              {evenMore.reminders.map((item, index) => (
                <ReminderItem key={index} item={item} index={index} />
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      {/* Wedding Preshoots Section */}
      <PackageDisplay 
        title="Wedding Preshoots!" 
        packageData={packages.preShoot} 
      />
      
      {/* Engagement Packages Section */}
      <PackageDisplay 
        title="Engagement Packages!" 
        packageData={packages.engagement} 
      />
      
      {/* Homecoming Packages Section */}
      <PackageDisplay 
        title="Homecoming Packages!" 
        packageData={packages.homecoming} 
      />
      
      {/* Additional Services Section */}
      <AdditionalServices />
      
      {/* Reminders Section */}
      <Reminders />
    </div>
  );
};

export default PackageIICompo;