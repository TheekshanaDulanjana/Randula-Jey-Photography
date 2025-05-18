import RandulaJay_Logo from '../assets/RandulaJay_Logo.png';

const LoadingSpinnerCompo = () => {
  const animationStyle = {
    animation: 'fadeFlip 2s linear infinite'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <style>
        {`
          @keyframes fadeFlip {
            0% {
              opacity: 0.5;
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
              opacity: 0.5;
              transform: rotateY(360deg);
            }
          }
        `}
      </style>
      <img
        src={RandulaJay_Logo}
        alt="Randula Jay Logo"
        className="w-20 h-35"
        style={animationStyle}
      />
    </div>
  );
};

export default LoadingSpinnerCompo;
