import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const FloatingPhone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(40deg) rotateX(30deg)",
      }}
      className="rounded-[24px] bg-orange-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-[500px] w-[300px] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <img
        src="/nanta2.png"
        alt="Screen Content"
        className="h-full w-full object-cover rounded-[20px]"
      />
    </div>
  );
};

const AboutSection = () => {
  useEffect(() => {
    const marqueeContainers = document.querySelectorAll(".marquee-container");

    marqueeContainers.forEach((marqueeContainer) => {
      const content = marqueeContainer.innerHTML;
      marqueeContainer.innerHTML = content + content;

      let startPos = 0;
      const speed = 2;

      const animate = () => {
        startPos -= speed;
        if (startPos <= -marqueeContainer.scrollWidth / 2) {
          startPos = 0;
        }
        marqueeContainer.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  return (
    <section className="relative bg-black text-black w-full py-16 px-6 flex flex-col items-center justify-center">
      {/* Background Marquee Text */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="marquee-container whitespace-nowrap text-[8rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          GRAPHIC DESIGNER &nbsp; GRAPHIC DESIGNER &nbsp;
        </div>
        <div className="marquee-container whitespace-nowrap text-[8rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          WEB DEVELOPER &nbsp; WEB DEVELOPER &nbsp;
        </div>
        <div className="marquee-container whitespace-nowrap text-[8rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          UI/UX DEVELOPER &nbsp; UI/UX DEVELOPER &nbsp;
        </div>
      </div>

      <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-8">
        {/* Floating Phone */}
        <div
          className="w-[300px] h-[520px] rounded-lg  mr-7 flex-shrink-0"
          data-aos="slide-right"
        >
          <FloatingPhone />
        </div>
        {/* Content */}
        <div
          className="text-center ml-5 lg:text-left lg:max-w-lg"
          data-aos="slide-left"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed">
            I am a creative, persistent, and adaptive individual, with the
            ability to think innovatively and be solution-oriented. Experienced
            in the Technology Field, I am always open to new learning and
            committed to producing quality work. With a combination of good
            problem-solving and communication skills, I am able to work
            collaboratively and independently, and complete each project
            effectively and efficiently.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg flex items-center gap-2 shadow-md">
            Download CV <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
