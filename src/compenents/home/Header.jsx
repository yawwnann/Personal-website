import { useState, useEffect, useRef, useCallback } from "react";
import { scroller } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState("home");

  const buttonWidth = 100; // Menentukan lebar tombol
  const gap = 15; // Jarak antar tombol

  const navHome = "home";
  const navAbout = "about";
  const navSkills = "skills";
  const navProject = "project";
  const navContact = "contact";

  const navOrder = [navHome, navAbout, navSkills, navProject, navContact];

  const backgroundRef = useRef(null);

  const calculateBackgroundPosition = (item) => {
    const activeIndex = navOrder.findIndex((navItem) => navItem === item);
    return activeIndex * (buttonWidth + gap);
  };

  // Mengupdate posisi latar belakang secara langsung
  const updateBackgroundPosition = useCallback(
    (item) => {
      const newPosition = calculateBackgroundPosition(item);
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateX(${newPosition}px)`;
      }
    },
    [navOrder]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navOrder.map((id) => ({
        id,
        offset: document.getElementById(id)?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActive(sections[i].id);
          updateBackgroundPosition(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navOrder, updateBackgroundPosition]);

  const handleItemClick = (item) => {
    setActive(item);
    updateBackgroundPosition(item); // Memperbarui posisi latar belakang
    scroller.scrollTo(item, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800/70 backdrop-blur-sm py-3 px-6 rounded-full shadow-lg z-[999]">
      <ul className="relative flex justify-center space-x-8">
        {/* Background oranye animasi untuk tombol aktif */}
        <div
          ref={backgroundRef}
          className="absolute top-0 left-4 h-10 bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${buttonWidth}px`,
          }}
        ></div>

        {/* Tombol Header */}
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick(navHome)}
            className={`text-white px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === navHome ? "font-semibold" : ""
            }`}
          >
            Home
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick(navAbout)}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === navAbout ? "font-semibold" : ""
            }`}
          >
            About
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick(navSkills)}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === navSkills ? "font-semibold" : ""
            }`}
          >
            Skills
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick(navProject)}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === navProject ? "font-semibold" : ""
            }`}
          >
            Project
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick(navContact)}
            className={`text-white px-4 py-2  transition-transform transform hover:scale-105 focus:outline-none ${
              active === navContact ? "font-semibold" : ""
            }`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
