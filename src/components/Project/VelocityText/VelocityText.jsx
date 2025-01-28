import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(scrollVelocity, [-1, 1], ["50deg", "-50deg"]);
  const skewX = useSpring(skewXRaw, { mass: 2, stiffness: 150, damping: 30 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useSpring(xRaw, { mass: 2, stiffness: 150, damping: 30 });

  return (
    <section ref={targetRef} className="bg-black text-white">
      <div className="sticky top-0 flex items-center overflow-hidden">
        {/* Marquee Container */}
        <div className="marquee-container relative flex overflow-hidden whitespace-nowrap">
          <motion.div
            className="marquee-track flex whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 100,
              repeat: Infinity, // Looping tak terbatas
              ease: "linear", // Pergerakan lancar
            }}
          >
            <motion.p
              style={{ skewX, x }}
              className="text-6xl font-bold uppercase md:text-9xl px-8"
            >
              Success is not final, failure is not fatal: it is the courage to
              continue that counts. Every step forward, no matter how small, is
              a step closer to your dreams.
            </motion.p>
            <motion.p
              style={{ skewX, x }}
              className="text-6xl font-bold uppercase md:text-9xl px-8"
            >
              Success is not final, failure is not fatal: it is the courage to
              continue that counts. Every step forward, no matter how small, is
              a step closer to your dreams.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VelocityText;
