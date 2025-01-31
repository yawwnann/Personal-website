const BackgroundImages = () => (
  <>
    <div
      className="character-image absolute top-[15vh] left-[10%] w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] z-1"
      data-aos="slide-right"
    >
      <img
        src="./img/Saly-13.png"
        alt="Character"
        className="animation-loop w-full h-full object-contain"
      />
    </div>
    <div
      className="hand-image absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] hidden sm:block"
      data-aos="slide-left"
    >
      <img
        src="./img/Saly-8.png"
        alt="Hand"
        className="animation-move w-full h-full object-contain"
      />
    </div>
  </>
);

export default BackgroundImages;
