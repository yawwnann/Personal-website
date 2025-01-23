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
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const MySkills = () => {
  return (
    <div className="bg-neutral-900 px-4 py-12">
      <div className="mx-auto max-w-7xl text-center mb-8">
        <h1
          className="text-5xl font-semibold text-white font-poppins"
          data-aos="fade-down"
        >
          <span className="text-orange-500">My </span>
          <span>Skills</span>
        </h1>
        <p
          className="text-lg text-gray-300 mt-2 font-poppins"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex align-center justify-center gap-4 mb-4">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=yawwnann&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
          className="h-[200px] w-auto transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-115"
          alt="languages graph"
          data-aos="fade-right"
        />
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3RyYml5bDNtNWI2YW1iNHBoYThwaWQ0Ymw3Z2xxaDEydnJoMWk1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xdgisqRDFyO9G/giphy.gif"
          className="h-[200px] w-[400px] rounded-md border-2 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-115"
          alt="gif"
          data-aos="fade-left"
        />
      </div>
      <div className="mx-auto max-w-7xl" data-aos="zoom-in">
        <ClipPathLinks />
      </div>
      <div className="mt-8 text-center font-poppins text-4xl  ">
        <h2 className="font-bold" data-aos="fade-up">
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
    <div className="divide-y divide-white border border-white">
      <div className="grid grid-cols-2 divide-x divide-white">
        <LinkBox Icon={FaReact} name="React" href="#" />
        <LinkBox Icon={FaNodeJs} name="Node.js" href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-white">
        <LinkBox Icon={FaPython} name="Python" href="#" />
        <LinkBox Icon={FaGitAlt} name="Git" href="#" />
        <LinkBox Icon={FaBootstrap} name="Bootstrap" href="#" />
        <LinkBox Icon={FaPhp} name="PHP" href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-white">
        <LinkBox Icon={FaFigma} name="Figma" href="#" />
        <LinkBox Icon={FaCss3Alt} name="CSS" href="#" />
        <LinkBox Icon={FaLaravel} name="Laravel" href="#" />
        <LinkBox Icon={FaDatabase} name="Mysql" href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-white">
        <LinkBox Icon={FaJs} name="JavaScript" href="#" />
        <LinkBox Icon={FaCss3} name="Tailwind" href="#" />
      </div>
    </div>
  );
};

const LinkBox = ({ Icon, name, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
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
