import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import AhinsaIsuruWED from '../assets/AhinsaIsuruWED.jpg';
import AhinsaIsuruPRE from '../assets/AhinsaIsuruPRE.jpg';
import AshaniDimal from '../assets/AshaniDimal.jpg';
import DilhaniSahanPRE from '../assets/DilhaniSahanPRE.jpg';
import DilhaniSahanWED from '../assets/DilhaniSahanWED.jpg';
import DilshikaPiyath from '../assets/DilshikaPiyath.jpg';
import DulmiChamod from '../assets/DulmiChamod.jpg';
import GathikaIshara from '../assets/GathikaIshara.jpg';
import GimhaniAvishka from '../assets/GimhaniAvishka.jpg';
import HashaniSajithPRE from '../assets/HashaniSajithPRE.jpg';
import HashaniSajithWED from '../assets/HashaniSajithWED.jpg';
import HashimaDilshan from '../assets/HashimaDilshan.jpg';
import LahiruHansini from '../assets/LahiruHansini.jpg';
import MadushaniShamen from '../assets/MadushiShamen.jpg';
import MethniBilan from '../assets/MethniBilan.jpg';
import NadeekaDimuthu from '../assets/NadeekaDimuthu.jpg';
import NihinsaHashen from '../assets/NihinsaHashan.jpg';
import NimeshaDharshana from '../assets/NimeshaDharshana.jpg';
import NirmaniHansith from '../assets/NirmaniHasitha.jpg';
import NisharaYuwani from '../assets/NisharaYuwani.jpg';
import SansaSineth from '../assets/SansaSineth.jpg';
import SasiniHarshana from '../assets/SasiniHarshana.jpg';
import SinethSanchila from '../assets/SinethSanchila.jpg';
import SitharaNaveen from '../assets/SitharaNaveen.jpg';
import ThedaniUdara from '../assets/ThedaniUdara.jpg';
import UreshaKelum from '../assets/UreshaKelum.jpg';
import UthpalaSanjanu from '../assets/UthpalaSanjanu.jpg';
import VishakaRavindu from '../assets/VishakaRavindu.jpg';
import KalaniRuwanPRE from '../assets/KalaniRuwanPRE.jpg';
import KalaniRuwanWED from '../assets/KalaniRuwanWED.jpg';
import JithuRK from '../assets/JithuRK.jpg';
import MadushankaNaduni from '../assets/MadushankaNaduni.jpg';
import TharikaArachchige from '../assets/TharikaArachchige .jpg';
import SitharaSanjaya from '../assets/SitharaSanjaya.jpg';


const images = [
  { title: 'Nihinsa & Hashen', imageUrl: NihinsaHashen, albumId: '13DBxHgDcalyG5S3ef6MUHKvlZNDTwP6I?usp'  , shootType:'Wedding shoot'},
  { title: 'Ashani & Dimal', imageUrl: AshaniDimal, albumId: '1ws3zPXQyxswy1JKp4LVJo_BAM3gPICVs?usp' , shootType:'Wedding Shoot' },
  { title: 'Ahinsa & Isuru', imageUrl: AhinsaIsuruWED, albumId: '1cViwIfG95MKOc2VCY67JV84gVJj8VAUT?usp' , shootType:'Wedding Shoot' },
  { title: 'Vishaka & Ravindu', imageUrl: VishakaRavindu, albumId: '1Y48Xfcmv7K6040dv0ky4hXHx1aKI6y9K?usp' , shootType:'Wedding Shoot' },
  
  { title: 'Uthpala & Sanjanu', imageUrl: UthpalaSanjanu, albumId: '14VbZJn_9wkdrFdlrREB6oRcmc7Vb_KVq?usp'  , shootType:'Pre Shoot'},
  { title: 'Sasini & Harshana', imageUrl: SasiniHarshana, albumId: '1YS3vVBdMTD1lsm8it-mjLSMOIwRtt5PN?usp'  , shootType:'Pre Shoot'},
  { title: 'Lahiru & Hansini', imageUrl: LahiruHansini, albumId: '1MhiP7fahjwmNDxa1Civ8vP4NW5Ximhlp?usp' , shootType:'Pre Shoot' },
  { title: 'Nirmani & Hansith', imageUrl: NirmaniHansith, albumId: '1ptLzdnKa8rdcofPiOfKlzKy45y67COH4?usp' , shootType:'Pre shoot' },
  
  { title: 'Sithara & Naveen', imageUrl: SitharaNaveen, albumId: '1Zkfs1cADg990HGJ73ij4gSgJy5dE0jxo?usp' , shootType:'Wedding shoot' },
  { title: 'Uresha & Kelum', imageUrl: UreshaKelum, albumId: '1D6ef2ZdyAPn9SX67ITHJwGO1nQtM0TII?usp' , shootType:'Pre shoot' },
  { title: 'Gathika & Ishara', imageUrl: GathikaIshara, albumId: '1W0OFwobZPXeF6-ro-f6X9YA3sd2wQi0K?usp' , shootType:'Pre shoot' },
  { title: 'Thedani & Udara', imageUrl: ThedaniUdara, albumId: '1kmMLBdegeSlinTmE3oNWW9bsQhP_0C-M?usp' , shootType:'Wedding shoot' },
  
  { title: 'Jithu RK', imageUrl: JithuRK, albumId: '108mXPhFOj0x9Jvi2RfD-XbpqHUyoymiV?usp' , shootType:'Life Style' },
  { title: 'Madushanka & Nanduni', imageUrl: MadushankaNaduni, albumId: '1P8KdnCpzPO50z_Gfc7EjpeSvb7-Tivx1?usp' , shootType:'Pre shoot' },
  { title: 'Tharika Arachchige', imageUrl: TharikaArachchige, albumId: '1RoPBArz1TumfHGkaY5fV8Jf3ZL2-s7BW?usp' , shootType:'Life Style'},
  { title: 'Sithara & Sanjaya', imageUrl: SitharaSanjaya, albumId: '17PF_jYV2Y_oC1NQkJR5RagUQ_S_u4Dyo?usp' , shootType:'Pre shoot' },
  
  { title: 'Sansa & Sineth', imageUrl: SansaSineth, albumId: '1HEkBpC3W4gbFg_-nw7jFNI9fQtncLnwI?usp' , shootType:'Pre shoot' },
  { title: 'Nimesha & Dharshana', imageUrl: NimeshaDharshana, albumId: '1nyh_BtL6W1Crt4tUrgWjTwO3T6b7OuRQ?usp' , shootType:'Pre shoot' },
  { title: 'Ahinsa & Isuru', imageUrl: AhinsaIsuruPRE, albumId: '1olRUrxrUKSodRMUbmY5PiY-GSM7tmW5J?usp' , shootType:'Pre Shoot'},
  { title: 'Dilshika & Piyath', imageUrl: DilshikaPiyath, albumId: '1HJ7zGmNS_XGs9vle_Chl0AQ33k9ZU28i?usp' , shootType:'Pre shoot' },
  
  { title: 'Dulmi & Chamod', imageUrl: DulmiChamod, albumId: '1pQISC_dIs-LzCniZxSvm6hW5YM2ZUCXh?usp' , shootType:'Pre shoot' },
  { title: 'Madushani & Shamen', imageUrl: MadushaniShamen, albumId: '1_AvTdJF--heLJa22_NB7qEa9tH089juM?usp' , shootType:'Wedding Shoot' },
  { title: 'Nadeeka & Dimuthu', imageUrl: NadeekaDimuthu, albumId: '1MOE8mVIa8e654hBcOisaaoPhz3jG5qZm?usp' , shootType:'Pre Shoot' },
  { title: 'Nishara & Yuwani', imageUrl: NisharaYuwani, albumId: '1p0CgymRWsXhZEIGA9_kQVJaKo_bMASn_?usp' , shootType:'Pre shoot' },
  
  { title: 'Sineth & Sanchila', imageUrl: SinethSanchila, albumId: '14JcmqfBtzQtEmp4nTjfY1LpxbDWjtxmG?usp' , shootType:'Wedding Shoot' },
  { title: 'Methni & Bilan', imageUrl: MethniBilan, albumId: '1Gm1PRcXuoQIR2kEuokoKj3MzDaqqK9sJ?usp' , shootType:'Pre Shoot' },
  { title: 'Hashima & Dilshan', imageUrl: HashimaDilshan, albumId: '1HHpByGvm6GtlK0lvn0Epx5jsj4gOkUVO?usp' , shootType:'Pre Shoot'},
  { title: 'Gimhani & Avishka', imageUrl: GimhaniAvishka, albumId: '1zNq5y7qOCVt0m9UbGQCSin_a3Ofkku3z?usp' , shootType:'Pre shoot' },
  

  { title: 'Kalani & Ruwan', imageUrl: KalaniRuwanPRE, albumId: '1jpGGr0E7gkeO1NWPVvwirRqqMgtbTvM4?usp'  , shootType:'Pre Shoot'},
  { title: 'Kalani & Ruwan', imageUrl: KalaniRuwanWED, albumId: '1KHnIyBa4DniwPbzNKMyxIaAEhgm33kWf?usp' , shootType:'Wedding Shoot' },
  
  { title: 'Hashani & Sajith', imageUrl: HashaniSajithPRE, albumId: '1J5UR-EKOwSX1whUAcQdlm0Lkwm4F256P?usp'  , shootType:'Pre Shoot'},
  { title: 'Hashani & Sajith', imageUrl: HashaniSajithWED, albumId: '15EBAzuuTZRBgbLMNbrj_w0FwNxm0_BUv?usp' , shootType:'Wedding Shoot' },
  { title: 'Dilhani & Sahan', imageUrl: DilhaniSahanPRE, albumId: '1Iu6FGOknVUefDIu-05NCaY1tjLa1P9ue?usp' , shootType:'Pre Shoot' },
  { title: 'Dilhani & Sahan', imageUrl: DilhaniSahanWED, albumId: '1TSrYQlvwZG8AcuTMn7CtueS-94J2joVg?usp' , shootType:'Wedding Shoot' },
  

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
      className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden w-[300px] h-[400px] group"
    >
      <button
        onClick={handleClick}
        className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="relative overflow-hidden w-full h-full">
          <img
            src={item.imageUrl}
            alt="Banner"
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
