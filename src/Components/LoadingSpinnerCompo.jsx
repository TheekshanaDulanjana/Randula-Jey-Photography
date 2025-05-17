import RandulaJay_Logo from '../assets/RandulaJay_Logo.png';

const LoadingSpinnerCompo = () => {
  const animationStyle = {
    animation: 'fadeFlip 2s ease-in-out forwards, scaleFadeOut 1s ease-out 3.2s forwards'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md">
      <style>
        {`
          @keyframes fadeFlip {
            0% {
              opacity: 0;
              transform: rotateY(0deg);
            }
            30% {
              opacity: 1;
              transform: rotateY(90deg);
            }
            70% {
              opacity: 1;
              transform: rotateY(270deg);
            }
            100% {
              opacity: 1;
              transform: rotateY(360deg);
            }
          }

          @keyframes scaleFadeOut {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.5);
            }
          }
        `}
      </style>
      <img
        src={RandulaJay_Logo}
        alt="Randula Jay Logo"
        className="w-35 h-35"
        style={animationStyle}
      />
    </div>
  );
};

export default LoadingSpinnerCompo;
