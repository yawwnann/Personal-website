"use client";
import { ContainerScroll } from "./container-scroll-animation";

const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col mt-[1200px]   ">
      <ContainerScroll
        titleComponent={
          <>
            <span className="text-md md:text-[3rem] font-reguler text-black dark:text-white">
              Changing Perspectives Through Bold Design.
            </span>
            <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Graphic Design
            </h1>
          </>
        }
      >
        <div className="relative flex items-center justify-center h-full">
          <img
            src="/img/Desain.png"
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
