import { CardContainer, CardBody, CardItem } from "./3d-card";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Website Pemesanan Kue",
    description: "This is the first project",
    image: "./img/Project1/dashboard_user.png",
    link: "https://example.com/project1",
    github: "https://github.com/yawwnann",
  },
  {
    title: "Project 2",
    description: "This is the second project",
    image: "./img/Project1/dashboard_user.png",
    link: "https://example.com/project2",
    github: "https://github.com/example/project2",
  },
  {
    title: "Project 3",
    description: "This is the third project",
    image: "./img/Project1/dashboard_user.png",
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
  {
    title: "Project 4",
    description: "This is the third project",
    image: "./img/Project1/dashboard_user.png",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full text-center">
          <h1 className="text-4xl font-semibold text-orange-500 ">
            Unleash the power of <br />
            <span className="text-4xl md:text-[6rem] text-white font-bold mt-1 leading-none">
              My Project
            </span>
          </h1>
        </div>
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-500 relative group/card dark:hover:shadow-xl dark:hover:shadow-orange-500/[0.4] dark:bg-black dark:border-white/[0.2] border-white  w-auto rounded-xl p-6 border-4">
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
              <div className="flex justify-between items-center mt-12">
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
