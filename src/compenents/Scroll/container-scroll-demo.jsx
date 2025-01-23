"use client";
import { ContainerScroll } from "./container-scroll-animation";

const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {/* Menambahkan gambar GitHub */}
        <div className="relative flex items-center justify-center h-full">
          <img
            src="/img/github.png"
            alt="GitHub Logo"
            className="w-full h-full"
            draggable={false}
            style={{}}
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default HeroScrollDemo;
