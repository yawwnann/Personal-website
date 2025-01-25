import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => {
  // Variants untuk animasi hover
  const hoverVariants = {
    initial: { scale: 1, rotate: 0, opacity: 1 },
    hover: {
      scale: 1.3,
      rotate: 360,
      opacity: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex space-x-6 justify-center mt-6">
      {/* GitHub */}
      <motion.a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaGithub />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/yourusername/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaLinkedin />
      </motion.a>

      {/* TikTok */}
      <motion.a
        href="https://www.tiktok.com/@yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaTiktok />
      </motion.a>

      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/yourusername/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl"
        variants={hoverVariants}
        initial="initial"
        whileHover="hover"
      >
        <FaInstagram />
      </motion.a>
    </div>
  );
};

export default SocialMediaIcons;
