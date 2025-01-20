import { useState, useEffect } from "react";
import { scroller } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState("home");

  const buttonWidth = 100; // Menentukan lebar tombol
  const gap = 15; // Jarak antar tombol
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  // Memperbarui posisi latar belakang ketika active berubah
  useEffect(() => {
    const navOrder = [
      "home",
      "about",
      "skills",
      "resume",
      "project",
      "contact",
    ];
    const activeIndex = navOrder.findIndex((item) => item === active);
    setBackgroundPosition(activeIndex * (buttonWidth + gap));
  }, [active]);

  // Mengupdate state aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", offset: document.getElementById("home")?.offsetTop },
        { id: "about", offset: document.getElementById("about")?.offsetTop },
        { id: "skills", offset: document.getElementById("skills")?.offsetTop },
        { id: "resume", offset: document.getElementById("resume")?.offsetTop },
        {
          id: "project",
          offset: document.getElementById("project")?.offsetTop,
        },
        {
          id: "contact",
          offset: document.getElementById("contact")?.offsetTop,
        },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setActive(item);
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
          className="absolute top-0 left-4 h-10 bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${buttonWidth}px`, // Menyesuaikan lebar latar belakang dengan tombol
            transform: `translateX(${backgroundPosition}px)`, // Memindahkan latar belakang sesuai dengan tombol aktif
          }}
        ></div>

        {/* Tombol Header */}
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("home")}
            className={`text-white px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "home" ? "font-semibold" : ""
            }`}
          >
            Home
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("about")}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "about" ? "font-semibold" : ""
            }`}
          >
            About
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("skills")}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "skills" ? "font-semibold" : ""
            }`}
          >
            Skills
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("resume")}
            className={`text-white px-4 py-2 ml-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "resume" ? "font-semibold" : ""
            }`}
          >
            Resume
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("project")}
            className={`text-white px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "project" ? "font-semibold" : ""
            }`}
          >
            Project
          </button>
        </li>
        <li className="relative z-10">
          <button
            onClick={() => handleItemClick("contact")}
            className={`text-white px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none ${
              active === "contact" ? "font-semibold" : ""
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
