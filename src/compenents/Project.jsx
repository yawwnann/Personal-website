import { useState } from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsClosing(false);
    }, 500); // Durasi animasi keluar
  };

  // Fungsi untuk memotong deskripsi berdasarkan jumlah kata
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      {isExpanded && (
        <div
          className={`fixed inset-0 bg-zinc-900 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-500 ${
            isClosing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
          onClick={handleClose}
        >
          <div
            className={`relative w-11/12 max-w-md bg-zinc-800 text-gray-200 rounded-xl p-6 shadow-lg transform transition-transform duration-500 ${
              isClosing ? "animate-slideDown" : "animate-slideUp"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close di pojok kanan atas */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md hover:bg-orange-400 transition duration-300"
            >
              <span className="text-xl font-bold">&times;</span>
            </button>

            {/* Konten Modal */}
            <div
              className="w-full h-56 rounded-lg overflow-hidden mb-4 bg-cover bg-center shadow-sm"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <h2 className="text-2xl font-extrabold text-orange-500 mb-3 text-center">
              {title}
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4 text-center">
              {description}
            </p>
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Technologies Used:
            </h3>
            <ul className="grid grid-cols-2 gap-3 list-none pl-0">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-zinc-700 text-gray-300 text-center py-2 px-3 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center items-center gap-4">
              {/* Tombol GitHub */}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                  <div className="flex items-center">
                    <FaGithub className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-white">See on GitHub</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className="group flex flex-col justify-start items-start gap-2 w-96 h-56 border-2 border-orange-500 duration-500 relative rounded-lg p-4 bg-zinc-900 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-400 cursor-pointer"
        onClick={handleExpand}
      >
        <div
          className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-orange-500 hover:shadow-md hover:shadow-orange-400"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
          {/* Potong teks deskripsi */}
          <p className="text-gray-100">{truncateText(description, 10)}</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <button
            type="submit"
            className="flex justify-center  text-black gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
          >
            Details
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700  p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
          <FaGithub className="text-white text-4xl hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
};

const ProjectPage = () => {
  const projects = [
    {
      title: "Website Pemesanan Kue",
      description:
        "website pemesanan kue menggunakan php Native,Tailwind css, dan API Midtrans Payments Gateway",
      image: "/img/Project1/dashboard_user.png",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/yawwnann/website-pemesanan-kue",
    },
    {
      title: "Project 2",
      description:
        "Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.",
      image: "/img/project/project2.jpg",
      technologies: ["Vue", "Bootstrap", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description:
        "Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.",
      image: "/img/project/project2.jpg",
      technologies: ["Vue", "Bootstrap", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 4",
      description:
        "Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.",
      image: "/img/project/project2.jpg",
      technologies: ["Vue", "Bootstrap", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 5",
      description:
        "Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.",
      image: "/img/project/project2.jpg",
      technologies: ["Vue", "Bootstrap", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 6",
      description:
        "Duis id porta justo. Sed ac enim id justo tincidunt hendrerit id ac lectus.",
      image: "/img/project/project2.jpg",
      technologies: ["Vue", "Bootstrap", "Firebase"],
      githubLink: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <div className="relative font ">
      <div className="absolute inset-0 p-6 bg-zinc-950 min-h-screen z-100">
        {/* Animasi untuk judul utama */}
        <h1
          data-aos="fade-right"
          className="text-5xl font-bold text-center  mb-8"
        >
          <span className="text-white">My </span>
          <span className="text-orange-500">Projects</span>
        </h1>

        {/* Animasi untuk setiap ProjectCard */}
        <div
          data-aos="fade-left"
          className="flex flex-wrap justify-center gap-20"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
