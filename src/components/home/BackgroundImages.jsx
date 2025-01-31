const BackgroundImages = () => (
  <>
    <div
      className="character-image absolute top-[-300px] mr-10 right-1/2 transform translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mt-80 mb-8 z-1"
      data-aos="slide-right"
    >
      <img src="./img/Saly-13.png" alt="Character" className="animation-loop" />
    </div>
    <div
      className="hand-image absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]"
      data-aos="slide-left"
    >
      <img src="./img/Saly-8.png" alt="Hand" className="animation-move" />
    </div>
  </>
);

export default BackgroundImages;
