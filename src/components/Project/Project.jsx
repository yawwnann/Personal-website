import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Website Pemesanan Kue",
    description:
      "Website pemesanan kue menggunakan PHP Native, Tailwind CSS, dan API Midtrans Payments Gateway",
    image: "./img/Project1/dashboard_user.png",
    link: "https://github.com/yawwnann/Website-Pemesanan-Kue",
    github: "https://github.com/yawwnann/Website-Pemesanan-Kue",
  },
  {
    title: "Website Profil Tim PKM-PM 2024",
    description:
      "Website ini bertujuan untuk mendukung program Pengabdian Masyarakat",
    image: "./img/Project2/pkm.png",
    link: "https://soothe-game.com",
    github: "https://github.com/yawwnann/Website-Pkm-pm/tree/main",
  },
  {
    title: "Toko Sepatu",
    description:
      "Proyek ini adalah sebuah website E-Commerce yang dibuat untuk memudahkan pengguna ",
    image: "./img/Project3/Nayshop.png",
    link: "https://github.com/yawwnann/Nayhsop/tree/main",
    github: "https://github.com/yawwnann/Nayhsop/tree/main",
  },
  {
    title: "Personal Website",
    description:
      "Website ini merupakan sebuah website yang berisikan portofolio dari project yang telah saya kerjakan",
    image: "./img/Project4/personal-web.png",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
  {
    title: "Website Perpustakaan",
    description:
      "Website ini dibuat untuk mengelola perpustakaan secara online",
    image: "./img/Project5/dashboard_perpus.png",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
  {
    title: "Pradiwa - Kelola Sampah",
    description:
      "Website ini dibuat untuk melakukan pengelolaan sampah yang disetor",
    image: "./img/project6/pradiwa_dashboard.png",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
  {
    title: "Coming Soon",
    description: "Coming soon",
    image: "./img/comingsoon.png",
    alt: "Coming soon",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
];

const ThreeDCardDemo = () => {
  const [resetAnimation, setResetAnimation] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out-quad",
    });
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setResetAnimation((prev) => prev + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      key={resetAnimation}
      className="max-w-7xl mx-auto px-4 sm:px-6 bg-gray-900 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Header Responsive */}
        <div
          className="col-span-full text-center mb-8 md:mb-12"
          data-aos="fade-up"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-reguler text-white">
            Unleash the power of <br />
            <span className="text-5xl sm:text-4xl md:text-6xl lg:text-[5rem] text-white font-bold mt-1 leading-tight">
              My <span className="text-orange-500 italic">Project</span>
            </span>
          </h1>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay={index * 50}
          >
            <CardContainer className="inter-var w-full h-auto bg-gray-900 overflow-hidden z-100">
              <CardBody className="bg-gray-900 relative group/card hover:shadow-xl hover:shadow-orange-500/30 dark:bg-gray-900 dark:border-white/20 border-white/30 h-full min-h-[500px] w-full rounded-xl p-4 sm:p-6 border-2 sm:border-4 transition-all duration-300 flex flex-col">
                {/* Content Area */}
                <div className="flex-1">
                  <CardItem
                    translateZ="50"
                    className="text-xl md:text-2xl font-bold text-white mb-2"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm md:text-base mb-4"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem
                    translateZ="150"
                    className="w-full h-48 sm:h-56 md:h-64"
                  >
                    <div className="relative w-full h-full rounded-xl ">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 rounded-xl group-hover/card:scale-105"
                      />
                    </div>
                  </CardItem>
                </div>

                {/* Button Container */}
                <div className="mt-auto md:mt-0 sm:mt-0 pt-4">
                  <div className="flex justify-between items-center gap-2">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.link}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-orange-500/80 hover:bg-orange-500 text-white text-sm md:text-base flex-1 text-center transition-all duration-200"
                    >
                      View Project →
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-white text-sm md:text-base flex-1 text-center transition-all duration-200 flex items-center justify-center"
                    >
                      <FaGithub className="text-xl mr-2" />
                      GitHub
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCardDemo;
