import React, { useEffect } from 'react';
import MainBG1 from '../assets/MainBG1.jpg';
import { FaAngleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PackageICompo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

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

  const PackageDisplay = ({ title, packagesData }) => {
    return (
      <div className="py-8 px-4 -mt-10" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 h-64 overflow-hidden" data-aos="zoom-in">
            <img 
              src={MainBG1} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl text-center font-bellefair text-[var(--RandulaBlue)] mb-8 tracking-wider" data-aos="fade-up">{title}</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.keys(packagesData).map((key) => (
              <div key={key} className="border border-gray-200 p-6 text-center" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-bellefair text-[var(--RandulaBlue)] mb-4">{packagesData[key].name}</h2>
                <ul className="space-y-2 text-left text-xl pt-5 font-bellefair text-gray-700">
                  {packagesData[key].items.map((item, index) => (
                    <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
                      <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-md text-gray-700 font-poppins font-semibold text-start mt-6" data-aos="fade-up" data-aos-delay="300">{packagesData[key].price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AdditionalServices = () => {
    return (
      <div className="py-12 px-4 bg-gray-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 h-64 overflow-hidden" data-aos="zoom-in">
            <img 
              src={MainBG1} 
              alt="Additional Services" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-light text-center mb-8 tracking-wider font-bellefair text-[var(--RandulaBlue)]" data-aos="fade-up">Get Even More!</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Extras */}
            <div className="border border-gray-200 p-6 bg-white" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Extras</h2>
              <ul className="space-y-3">
                {evenMore.extras.map((item, index) => (
                  <li key={index} className="text-xl flex justify-between font-bellefair text-gray-700" data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
                    <span className="flex items-start">
                      <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
                      <span>{item.split(' - ')[0]}</span>
                    </span>
                    <span className="font-medium">{item.split(' - ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Enlargement Prices */}
            <div className="border border-gray-200 p-6 bg-white" data-aos="fade-up" data-aos-delay="150">
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Enlargement (framed)</h2>
              <ul className="space-y-3">
                {evenMore.enlargementPrices.map((item, index) => (
                  <li key={index} className="flex justify-between font-bellefair text-xl text-gray-700" data-aos="fade-up" data-aos-delay={200 + (index * 50)}>
                    <span className="flex items-start">
                      <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
                      <span>{item.split(' - ')[0]}</span>
                    </span>
                    <span className="font-medium">{item.split(' - ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Story Albums */}
            <div className="border border-gray-200 p-6 bg-white" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Story Albums</h2>
              <ul className="space-y-3">
                {evenMore.storyAlbums.map((item, index) => (
                  <li key={index} className="flex justify-between font-bellefair text-xl text-gray-700" data-aos="fade-up" data-aos-delay={250 + (index * 50)}>
                    <span className="flex items-start">
                      <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
                      <span>{item.split(' - ')[0]}</span>
                    </span>
                    <span className="font-medium">{item.split(' - ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Videography */}
            <div className="border border-gray-200 p-6 bg-white" data-aos="fade-up" data-aos-delay="250">
              <h2 className="text-2xl font-medium mb-4 text-center font-bellefair text-[var(--RandulaBlue)]">Videography</h2>
              <ul className="space-y-3">
                {evenMore.videography.map((item, index) => (
                  <li key={index} className="flex justify-between font-bellefair text-xl text-gray-700" data-aos="fade-up" data-aos-delay={300 + (index * 50)}>
                    <span className="flex items-start">
                      <FaAngleRight className="mt-1 mr-2 flex-shrink-0" />
                      <span>{item.split(' - ')[0]}</span>
                    </span>
                    <span className="font-medium">{item.split(' - ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Reminders = () => {
    return (
      <div className="py-12 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-8 h-64 overflow-hidden" data-aos="zoom-in">
            <img 
              src={MainBG1} 
              alt="Things to Keep in Mind" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl font-light text-center mb-8 tracking-wider font-bellefair text-[var(--RandulaBlue)]" data-aos="fade-up">Things to Keep in Mind!</h1>
          
          <div className="border border-gray-200 p-8 bg-white" data-aos="fade-up">
            <ul className="space-y-4">
              {evenMore.reminders.map((item, index) => (
                <li key={index} className="flex items-center font-bellefair text-gray-700 text-xl mb-1" data-aos="fade-up" data-aos-delay={index * 50}>
                  <FaAngleRight className="mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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