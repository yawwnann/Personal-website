import { CardContainer, CardBody, CardItem } from "./3d-card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Website Pemesanan Kue",
    description:
      "website pemesanan kue menggunakan php Native,Tailwind css, dan API Midtrans Payments Gateway",
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
      "Proyek ini adalah sebuah website E-Commerce yang dibuat untuk memudahkan pengguna dalam membeli sepatu secara online",
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
    description: "This is the third project",
    image: "./img/Project5/dashboard_perpus.png",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
  {
    title: "Project 4",
    description: "This is the third project",
    image: "./img/Project1/dashboard_user.png",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
];

const ThreeDCardDemo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="col-span-full text-center mb-4">
          <h1 className="text-4xl font-semibold text-orange-500 ">
            Unleash the power of <br />
            <span className="text-4xl md:text-[6rem] text-white font-bold mt-1 leading-none">
              My Project
            </span>
          </h1>
        </div>
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var mb-3">
            <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-xl dark:hover:shadow-orange-500/[0.4] dark:bg-black dark:border-white/[0.2] border-white h-auto w-auto rounded-xl p-4 border-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  View Project →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.github}
                  target="_blank"
                  className="text-xs font-normal text-gray-600 dark:text-white flex items-center"
                >
                  <FaGithub className="text-lg mr-2" /> GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCardDemo;
