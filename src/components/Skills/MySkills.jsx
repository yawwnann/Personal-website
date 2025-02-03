import PropTypes from "prop-types";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaCss3,
  FaFigma,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaDatabase,
  FaCss3Alt,
  FaLaravel,
} from "react-icons/fa";
import { useAnimate } from "framer-motion";
import Tools from "./Tools";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, BOTTOM_RIGHT_CLIP],
};

const MySkills = () => {
  return (
    <div className="px-4 py-12" data-aos="fade-up">
      <div className="mx-auto max-w-7xl text-center mb-8" data-aos="fade-up">
        <h1 className="text-6xl font-bold text-white font-poppins">
          <span className="text-orange-500 ">My </span>
          <span>Skills</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2 font-poppins">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div
        className="flex align-center justify-center gap-4 mb-4"
        data-aos="fade-up"
      >
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3RyYml5bDNtNWI2YW1iNHBoYThwaWQ0Ymw3Z2xxaDEydnJoMWk1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xdgisqRDFyO9G/giphy.gif"
          className="h-[200px] w-[400px] rounded-md border-2 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-115"
          alt="gif"
        />
      </div>
      <div className="mx-auto max-w-7xl" data-aos="fade-up">
        <ClipPathLinks />
      </div>
      <div
        className="mt-8 text-center font-poppins text-4xl"
        data-aos="fade-up"
      >
        <h2 className="font-bold">
          <span className="text-orange-500 ">Development & Productivity</span>
          <br />
          <span>Tools I Use</span>
        </h2>
        <Tools />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div
      className="divide-y divide-white border border-white"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-3 divide-x divide-white">
        <LinkBox Icon={FaReact} name="React" />
        <LinkBox Icon={FaNodeJs} name="Node.js" />
        <LinkBox
          Icon={() => (
            <i className="devicon-cplusplus-plain text-4xl text-white" />
          )}
          name="C++"
        />
      </div>
      <div className="grid grid-cols-3 divide-x divide-white">
        <LinkBox Icon={FaPython} name="Python" />
        <LinkBox Icon={FaGitAlt} name="Git" />
        <LinkBox Icon={FaPhp} name="PHP" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-white">
        <LinkBox Icon={FaFigma} name="Figma" />
        <LinkBox Icon={FaCss3Alt} name="CSS" />
        <LinkBox Icon={FaLaravel} name="Laravel" />
        <LinkBox Icon={FaDatabase} name="Mysql" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-white">
        <LinkBox Icon={FaJs} name="JavaScript" />
        <LinkBox Icon={FaBootstrap} name="Bootstrap" />
        <LinkBox Icon={FaCss3} name="Tailwind" />
      </div>
    </div>
  );
};

const LinkBox = ({ Icon, name, href }) => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES.left,
    });
  };

  const handleMouseLeave = () => {
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES.left,
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <div className="flex items-center text-white space-x-2 font-poppins">
        <Icon className="text-xl sm:text-3xl lg:text-4xl" />
        <span className="text-sm sm:text-lg lg:text-xl font-medium">
          {name}
        </span>
      </div>

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-orange-500 text-black font-poppins"
      >
        <div className="flex items-center space-x-2">
          <Icon className="text-xl sm:text-3xl md:text-4xl " />
          <span className="text-sm sm:text-lg md:text-xl font-bold ">
            {name}
          </span>
        </div>
      </div>
    </a>
  );
};

LinkBox.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MySkills;
