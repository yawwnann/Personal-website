import { useEffect } from "react";

const Marquee = () => {
  useEffect(() => {
    const marqueeContainer = document.querySelector(
      ".marquee-container-skills-left"
    );
    const content = marqueeContainer.innerHTML;
    marqueeContainer.innerHTML += content;

    let startPos = 0;
    const speed = 0.5;

    const animate = () => {
      startPos -= speed;
      if (startPos <= -marqueeContainer.scrollWidth / 2) {
        startPos = 0;
      }
      marqueeContainer.style.transform = `translateX(${startPos}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    // Mengatur animasi marquee kanan
    const marqueeContainersRight = document.querySelectorAll(
      ".marquee-container-skills-right"
    );

    marqueeContainersRight.forEach((container) => {
      const content = container.innerHTML;
      const duplicateContent = content.repeat(2);
      container.innerHTML = duplicateContent;

      let startPos = -container.scrollWidth / 2;
      const speed = 0.5;

      const animate = () => {
        startPos += speed;
        if (startPos >= 0) {
          startPos = -container.scrollWidth / 2;
        }
        container.style.transform = `translateX(${startPos}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);
  return (
    <div className="overflow-hidden border-2 border-white rotate-4 mt-8 hover:shadow-md hover:shadow-orange-500  ">
      {/* ini ke kiri */}
      <div className="marquee-container-skills-left  z-10 flex gap-8 whitespace-nowrap text-white">
        {/* Menampilkan logo aplikasi secara manual */}
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-vscode-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>VSCode</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-git-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Git</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-photoshop-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Photoshop</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-illustrator-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Illustrator</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-premierepro-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Premiere Pro</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-aftereffects-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>After Effects</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-canva-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Canva</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-figma-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Figma</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-jupyter-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Jupyter</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="bi bi-file-earmark-word-fill  text-2xl text-orange-500 sm:text-3xl lg:text-4xl"></i>
          <span>Word</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="bi bi-file-earmark-excel-fill text-2xl text-orange-500 sm:text-3xl lg:text-4xl"></i>
          <span>Excel</span>
        </div>
      </div>

      {/* ini ke kanan */}
      <div className="marquee-container-skills-right flex gap-8 whitespace-nowrap text-white">
        {/* Menampilkan logo aplikasi secara manual */}
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-vscode-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>VSCode</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-git-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Git</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-photoshop-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Photoshop</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-illustrator-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Illustrator</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-premierepro-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Premiere Pro</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-aftereffects-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>After Effects</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-canva-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Canva</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-figma-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Figma</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="devicon-jupyter-plain text-2xl text-orange-500 sm:text-3xl lg:text-4xl" />
          <span>Jupyter</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="bi bi-file-earmark-word-fill  text-2xl text-orange-500 sm:text-3xl lg:text-4xl"></i>
          <span>Word</span>
        </div>
        <div className="flex items-center py-3 px-2 space-x-2 font-poppins text-lg   hover-effect">
          <i className="bi bi-file-earmark-excel-fill text-2xl text-orange-500 sm:text-3xl lg:text-4xl"></i>
          <span>Excel</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
