import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  const buttonWidth = 100; // Tentukan lebar tombol
  const gap = 15; // Jarak antar tombol, sesuaikan jika perlu

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 py-3 px-6 rounded-full  shadow-lg">
      <ul className="relative flex justify-center space-x-8">
        {/* Background oranye animasi */}
        <div
          className="absolute top-0 left-0 h-10 bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${buttonWidth}px`, // Menyesuaikan lebar latar belakang dengan tombol
            transform: `translateX(${
              [
                "home",
                "about",
                "skills",
                "resume",
                "project",
                "contact",
              ].findIndex((item) => item === active) *
              (buttonWidth + gap) // Menghitung posisi berdasarkan tombol dan jarak
            }px)`,
          }}
        ></div>

        {/* Tombol Header (Home) */}
        <li className="relative z-10">
          <button
            className={`text-white  pr-2 py-2 ${
              active === "home" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("home")}
          >
            Home
          </button>
        </li>

        {/* Tombol Header (About) */}
        <li className="relative z-10">
          <button
            className={`text-white px-4 ml-4 py-2 ${
              active === "about" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("about")}
          >
            About
          </button>
        </li>

        {/* Tombol Header (Skills) */}
        <li className="relative z-10">
          <button
            className={`text-white px-4 ml-2 py-2 ${
              active === "skills" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("skills")}
          >
            Skills
          </button>
        </li>

        {/* Tombol Header (Resume) */}
        <li className="relative z-10">
          <button
            className={`text-white px-4 ml-2 py-2 ${
              active === "resume" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("resume")}
          >
            Resume
          </button>
        </li>

        {/* Tombol Header (Project) */}
        <li className="relative z-10">
          <button
            className={`text-white px-4 py-2 ${
              active === "project" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("project")}
          >
            Project
          </button>
        </li>

        {/* Tombol Header (Contact) */}
        <li className="relative z-10">
          <button
            className={`text-white px-4 py-2 ${
              active === "contact" ? "font-semibold" : ""
            }`}
            onClick={() => setActive("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
