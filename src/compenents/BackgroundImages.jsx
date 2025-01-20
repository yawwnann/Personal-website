const BackgroundImages = () => (
  <>
    <div
      className="character-image absolute top-[-300px] right-1/2 transform mr-40 mt-80 -translate-x-2/2 w-[500px] h-[500px] mb-8"
      data-aos="slide-right"
    >
      <img src="/Saly-13.png" alt="Character" className="animation-loop" />
    </div>
    <div
      className="hand-image absolute bottom-0 left-1/2 transform ml-20 -translate-x-2/2 w-[600px] h-[600px]"
      data-aos="slide-left"
    >
      <img src="/Saly-8.png" alt="Hand" className="animation-move" />
    </div>
  </>
);

export default BackgroundImages;
