import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Komponen AboutSection
const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollHeight = 1000;
  const text = `I am a creative, persistent, and adaptive individual, with the ability to think innovatively and be solution-oriented. Experienced in the Technology Field, I am always open to new learning and committed to producing quality work. With a combination of good problem-solving and communication skills, I am able to work collaboratively and independently, and complete each project effectively and efficiently.`;
  const words = text.split(" ");

  useEffect(() => {
    // Menghitung posisi scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollTop / documentHeight, 1);
      setScrollPosition(scrollPercentage * maxScrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Mengatur animasi marquee kanan
    const marqueeContainersRight = document.querySelectorAll(
      ".marquee-container-about-right"
    );

    marqueeContainersRight.forEach((container) => {
      const content = container.innerHTML;
      const duplicateContent = content.repeat(2);
      container.innerHTML = duplicateContent;

      let startPos = -container.scrollWidth / 2;
      const speed = 1;

      const animate = () => {
        startPos += speed;
        if (startPos >= 0) {
          startPos = -container.scrollWidth / 2;
        }
        container.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  useEffect(() => {
    // Mengatur animasi marquee kiri
    const marqueeContainerLeft = document.querySelector(
      ".marquee-container-about-left"
    );
    const content = marqueeContainerLeft.innerHTML;
    marqueeContainerLeft.innerHTML += content;

    let startPos = 0;
    const speed = 1;

    const animate = () => {
      startPos -= speed;
      if (startPos <= -marqueeContainerLeft.scrollWidth / 2) {
        startPos = 0;
      }
      marqueeContainerLeft.style.transform = `translateX(${startPos}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative bg-black text-black w-full py-16 px-6 flex flex-col items-center justify-center">
      {/* Background Marquee Text */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="marquee-container-about-right whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          GRAPHIC DESIGNER &nbsp; GRAPHIC DESIGNER &nbsp;
        </div>
        <div className="marquee-container-about-left whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          WEB DEVELOPER &nbsp; WEB DEVELOPER &nbsp;
        </div>
        <div className="marquee-container-about-right whitespace-nowrap text-[9rem] font-extrabold tracking-wide text-gray-200 opacity-10">
          UI/UX DEVELOPER &nbsp; UI/UX DEVELOPER &nbsp;
        </div>
      </div>

      <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-10">
        {/* Tilt Card */}
        <motion.div
          style={{
            transform: `translateX(${
              -100 + (scrollPosition / maxScrollHeight) * 100
            }px)`,
          }}
          className="w-[300px] h-[520px] mt-6 pt-4 rounded-lg mr-7 flex-shrink-0"
        >
          <TiltCard />
        </motion.div>

        {/* Content Section */}
        <motion.div
          style={{
            transform: `translateX(${
              100 - (scrollPosition / maxScrollHeight) * 100
            }px)`,
          }}
          className="text-center ml-5 lg:text-left lg:max-w-lg"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed">
            {words.map((word, index) => {
              const opacity =
                scrollPosition >= (index / words.length) * maxScrollHeight
                  ? 1
                  : 0;
              return (
                <motion.span
                  key={index}
                  style={{ opacity }}
                  className="inline-block transition-opacity duration-300"
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </p>
          <button
            className="rounded-md border-2 border-slate-300 py-2 px-4 text-centertext-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-orange-500 hover:border-slate-800 "
            type="button"
          >
            <span className="text-orange-500 font-bold hover:text-white">
              {" "}
              Donwload CV
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-300 to-orange-500"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-xl overflow-hidden"
      >
        <img
          src="/nanta2.png"
          alt="Nanta"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default AboutSection;
