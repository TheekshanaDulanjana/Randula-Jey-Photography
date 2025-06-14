import React, { useEffect } from 'react';
import MainBG1 from '../assets/HomeDefultImage01.jpg';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PackageICompo = () => {
  const packages = {
    basic: {
      name: "Basic Package",
      price: "LKR 100,000/=",
      items: [
        "16x24 One Fine Art Framed Enlargement.",
        "Couple Main Photo Sessions.",
        "Exclusive Full Event Coverage."
      ]
    },
    silver: {
      name: "Silver Package",
      price: "LKR 150,000/=",
      items: [
        "8x24 or 12x18 fine art story album 50 pages (25 spreads).",
        "16x24 two fine art framed enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions.",
        "Exclusive full event coverage."
      ]
    },
    gold: {
      name: "Gold Package",
      price: "LKR 170,000/=",
      items: [
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions.",
        "Exclusive full event coverage."
      ]
    },
    emerald: {
      name: "Emerald Package",
      price: "LKR 190,000/=",
      items: [
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "8x24 fine art family album.",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions.",
        "Exclusive full event coverage."
      ]
    },
    blackDiamond: {
      name: "Black Diamond Package",
      price: "LKR 205,000/=",
      items: [
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions wedding & homecoming day.",
        "Exclusive full event coverage wedding & homecoming day."
      ]
    },
    blueDiamond: {
      name: "Blue Diamond Package",
      price: "LKR 220,000/=",
      items: [
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "8x24 fine art story homecoming album.",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 200.",
        "Couple main photo sessions wedding & homecoming day.",
        "Exclusive full event coverage wedding & homecoming day."
      ]
    },
    preDiamond: {
      name: "Diamond Package",
      price: "LKR 185,000/=",
      items: [
        "Preshoot photo session.",
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions wedding.",
        "Exclusive full event coverage wedding."
      ]
    },
    redDiamond: {
      name: "Red Diamond Package",
      price: "LKR 190,000/=",
      items: [
        "Preshoot photo session.",
        "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
        "8x24 or 12x18 fine art story preshoot album.",
        "16x24 two fine art framed enlargement.",
        "12x18 two enlargement.",
        "Thanks card 100.",
        "Couple main photo sessions wedding.",
        "Exclusive full event coverage wedding."
      ]
    },
    ultimate01: {
      name: "The Ultimate 01",
      price: "LKR 270,000/=",
      items: [
        "Luxury album - 02",
        ...[
          "16x24 or 12x30 fine art story album 50 pages (25 spreads).",
          "8x24 or 12x18 (family or preshoot) fine art story album.",
          "Glass top / wooden / rexing finishing free."
        ],
        "Enlargements - 04",
        ...[
          "16x24 two fine art framed enlargement.",
          "12x18 two fine art framed enlargement."
        ],
        "Thanks card - 200",
        ...[
          "Thanks card 100 (for wedding day).",
          "Thanks card 100 (for homecoming day)."
        ],
        "Special",
        ...[
          "Sign board free.",
          "Preshoot slideshow for wedding day.",
          "Pen drive free (128GB).",
          "The hotel bride's & groom's whilst getting ready at the hotel.",
          "Robe shoot.",
          "Couple main photo sessions wedding.",
          "Exclusive full event coverage wedding."
        ]
      ]
    },
    ultimate02: {
      name: "The Ultimate 02",
      price: "LKR 320,000/=",
      items: [
        "Luxury album - 03",
        ...[
          "16x24 or 12x30 fine art story album 60 pages (30 spreads).",
          "8x24 or 12x18 Family album.",
          "8x24 or 12x18 fine art story album.",
          "Glass top / wooden / rexing finishing free.",
          "Album box & Bag free."
        ],
        "Enlargements - 06",
        ...[
          "20x30 two fine art framed enlargement.",
          "16x24 two fine art framed enlargement.",
          "12x18 two fine art framed enlargement."
        ],
        "Thanks card - 300",
        ...[
          "Thanks card 150 (for wedding day).",
          "Thanks card 150 (for homecoming day)."
        ],
        "Special",
        ...[
          "Sign board free.",
          "Drone camera footage.",
          "Preshoot slideshow for wedding day.",
          "Pen drive free (128GB).",
          "The hotel bride's & groom's whilst getting ready at the hotel.",
          "Robe shoot.",
          "Couple main photo sessions wedding.",
          "Exclusive full event coverage wedding."
        ]
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
      "Upto 10 hours of coverage",
      "Free Transport Around Matara."
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

  const PackageDisplay = ({ title, packagesData }) => {
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
            {Object.keys(packagesData).map((key, index) => (
              <PackageCard 
                key={key} 
                packageData={packagesData[key]} 
                index={index}
              />
            ))}
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
            Get Even More!
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
      {/* Basic, Silver, Gold & Emerald Packages */}
      <PackageDisplay 
        title="Wedding Packages!" 
        packagesData={{
          basic: packages.basic,
          silver: packages.silver,
          gold: packages.gold,
          emerald: packages.emerald
        }} 
      />
      
      {/* Black & Blue Diamond Packages */}
      <PackageDisplay 
        title="Wedding & Homecoming Packages!" 
        packagesData={{
          blackDiamond: packages.blackDiamond,
          blueDiamond: packages.blueDiamond
        }} 
      />
      
      {/* Diamond & Red Diamond Packages */}
      <PackageDisplay 
        title="Wedding & Pre Shoot Packages!" 
        packagesData={{
          preDiamond: packages.preDiamond,
          redDiamond: packages.redDiamond
        }} 
      />
      
      {/* Ultimate Packages */}
      <PackageDisplay 
        title="Wedding VIP Packages!" 
        packagesData={{
          ultimate01: packages.ultimate01,
          ultimate02: packages.ultimate02
        }} 
      />
      
      {/* Additional Services Section */}
      <AdditionalServices />
      
      {/* Reminders Section */}
      <Reminders />
    </div>
  );
};

export default PackageICompo;