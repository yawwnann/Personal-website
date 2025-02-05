import HeroParallax from "./hero_Parallax";

export function HeroParallaxDemo() {
  return (
    <div className="relative min-h-screen w-full ">
      {" "}
      {/* overflow-hidden di sini */}
      <div className="absolute inset-0">
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
export default HeroParallaxDemo;
export const products = [
  {
    title: "Brimo",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Brimo.png",
  },
  {
    title: "Nahotel",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Hotel.png",
  },
  {
    title: "Onitsuka Tiger",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Onitsuka-web.png",
  },
  {
    title: "Pasifik Sea",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Pasifiksea.png",
  },
  {
    title: "PT. Puja Perkasa",
    link: "#",
    thumbnail: "/img/uiux/Presentation-PujaPerkesa.png",
  },
  {
    title: "Translate",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Translate.png",
  },
  {
    title: "Via Pulsa",
    link: "#",
    thumbnail: "/img/uiux/Presentation-ViaPulsa.png",
  },
  {
    title: "Onitsuka Tiger App",
    link: "#",
    thumbnail: "/img/uiux/Presentation.png",
  },
  {
    title: "E-Paspor",
    link: "#",
    thumbnail: "/img/uiux/Presentations-epaspor.png",
  },
  {
    title: "Brimo",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Brimo.png",
  },
  {
    title: "Nahotel",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Hotel.png",
  },
  {
    title: "Onitsuka Tiger",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Onitsuka-web.png",
  },
  {
    title: "Pasifik Sea",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Pasifiksea.png",
  },
  {
    title: "PT. Puja Perkasa",
    link: "#",
    thumbnail: "/img/uiux/Presentation-PujaPerkesa.png",
  },
  {
    title: "Translate",
    link: "#",
    thumbnail: "/img/uiux/Presentation-Translate.png",
  },
  {
    title: "Via Pulsa",
    link: "#",
    thumbnail: "/img/uiux/Presentation-ViaPulsa.png",
  },
  {
    title: "Onitsuka Tiger App",
    link: "#",
    thumbnail: "/img/uiux/Presentation.png",
  },
  {
    title: "E-Paspor",
    link: "#",
    thumbnail: "/img/uiux/Presentations-epaspor.png",
  },
];
