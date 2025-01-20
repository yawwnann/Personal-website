import PropTypes from "prop-types";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection = ({ displayedText }) => (
  <div
    className="relative min-h-screen flex flex-col z-10 items-center justify-center"
    id="home"
  >
    <div className="text-center max-w-3xl" data-aos="fade-up">
      <span className="text-xl font-[Poppins] bg-transparency border-2 py-2 px-4 rounded-full transition-transform transform hover:scale-110 duration-500 ease-in-out">
        Hello Gaes
      </span>
      <h1 className="text-6xl mt-4 font-extrabold mb-4 font-[Poppins]">
        <span>I am </span>
        <span className="text-orange-500 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          Nanta
        </span>
        <br />
        <span className="text-6xl transition-transform transform hover:scale-110 duration-500 ease-in-out hover:cursor-default">
          {displayedText}
        </span>
        <span className="caret"></span>
      </h1>
      <p className="text-xl mb-6 font-[Press Start 2P]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="space-x-4 flex justify-center">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-4xl hover:text-orange-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-4xl hover:text-orange-500" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-white text-4xl hover:text-orange-500" />
        </a>
      </div>
    </div>
  </div>
);

// Validasi properti menggunakan PropTypes
HeroSection.propTypes = {
  displayedText: PropTypes.string.isRequired,
};

export default HeroSection;
