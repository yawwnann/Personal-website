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
    <div className="overflow-hidden border-2 border-white  mt-4 sm:mt-6 md:mt-8 hover:shadow-md hover:shadow-orange-500">
      {/* Marquee kiri */}
      <div className="marquee-container-skills-left z-10 flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap text-white">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center py-2 px-2 sm:py-3 sm:px-3 space-x-1 sm:space-x-2 font-poppins text-sm sm:text-base md:text-lg"
          >
            <i className="devicon-vscode-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>VSCode</span>

            <i className="devicon-git-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Git</span>

            <i className="devicon-photoshop-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Photoshop</span>

            <i className="devicon-illustrator-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Illustrator</span>

            <i className="devicon-premierepro-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Premiere Pro</span>

            <i className="devicon-aftereffects-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>After Effects</span>

            <i className="devicon-canva-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Canva</span>

            <i className="devicon-figma-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Figma</span>

            <i className="devicon-jupyter-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Jupyter</span>

            <i className="bi bi-file-earmark-word-fill text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Word</span>

            <i className="bi bi-file-earmark-excel-fill text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Excel</span>
          </div>
        ))}
      </div>

      <div className="marquee-container-skills-right z-10 flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap text-white">
        {[...Array(2)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center py-2 px-2 sm:py-3 sm:px-3 space-x-1 sm:space-x-2 font-poppins text-sm sm:text-base md:text-lg"
          >
            <i className="devicon-vscode-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>VSCode</span>

            <i className="devicon-git-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Git</span>

            <i className="devicon-photoshop-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Photoshop</span>

            <i className="devicon-illustrator-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Illustrator</span>

            <i className="devicon-premierepro-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Premiere Pro</span>

            <i className="devicon-aftereffects-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>After Effects</span>

            <i className="devicon-canva-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Canva</span>

            <i className="devicon-figma-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Figma</span>

            <i className="devicon-jupyter-plain text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Jupyter</span>

            <i className="bi bi-file-earmark-word-fill text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Word</span>

            <i className="bi bi-file-earmark-excel-fill text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-orange-500" />
            <span>Excel</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
