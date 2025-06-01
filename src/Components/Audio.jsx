import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import BgAudio from '../assets/Background_Audio.mp3';

const GlobalAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); 

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            audioRef.current.muted = false;
            setIsMuted(false);
          })
          .catch((err) => {
            console.log('Play failed:', err);
          });
      } else {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={BgAudio} autoPlay loop muted hidden />
      <button
        onClick={toggleMute}
        className="fixed bottom-8 cursor-pointer right-10 w-8 h-8 flex items-center justify-center  backdrop-blur-sm bg-transparent text-[var(--RandulaBlue)] shadow-lg outline transition-transform transform hover:scale-110 group z-50 overflow-hidden"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--RandulaBlue)]">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </span>
        <span className="absolute left-0 bottom-0 w-0 h-full transition-all duration-300 group-hover:w-full  z-0"></span>
      </button>
    </>
  );
};

export default GlobalAudio;
