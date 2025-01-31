import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const linkRefs = useRef([]);
  const buttonRef = useRef(null);
  const xButtonRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true); // Set animating flag saat animasi mulai
      requestAnimationFrame(() => {
        gsap.fromTo(
          menuRef.current,
          { x: "100%", opacity: 1, borderRadius: "50%" },
          {
            x: "0%",
            opacity: 1,
            borderRadius: "0%",
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false), // Reset animating flag setelah animasi selesai
          }
        );

        linkRefs.current.forEach((link, index) => {
          gsap.fromTo(
            link,
            { opacity: 1, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.2 + index * 0.1,
            }
          );
        });
      });
    } else if (!isOpen && isVisible) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 1,
        borderRadius: "50%",
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          setIsAnimating(false); // Reset animating flag setelah animasi selesai
        },
      });
    }
  }, [isOpen, isVisible]); // Tambahkan isVisible ke dalam array dependency

  const handleHover = (ref, isHover) => {
    gsap.to(ref, {
      scale: isHover ? 1.1 : 1,
      color: isHover ? " #4A5568" : "#9ca3af",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleButtonHover = (isHover) => {
    gsap.to(buttonRef.current, {
      scale: isHover ? 1.2 : 1,
      backgroundColor: isHover ? "#ff6600" : "#ff7f32",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    if (!isAnimating) {
      // Cek apakah animasi selesai sebelum bisa klik lagi
      setIsOpen(!isOpen);
    }
  };

  const handleXHover = () => {
    gsap.to(xButtonRef.current, {
      rotation: 45, // Rotasi X 45 derajat
      scale: 1.2, // Perbesar tombol X
      backgroundColor: "#ff5733", // Ubah warna latar belakang tombol X
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleXMouseLeave = () => {
    gsap.to(xButtonRef.current, {
      rotation: 0, // Kembali ke posisi semula
      scale: 1, // Kembalikan ukuran
      backgroundColor: "transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="relative overflow-hidden z-50">
      {/* Button to open */}
      <button
        ref={buttonRef}
        onClick={handleToggleMenu} // Panggil handleToggleMenu untuk menambahkan kontrol animasi
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
        className="p-3 bg-orange-500 text-black rounded-full shadow-lg fixed top-5 right-5 flex items-center justify-center w-16 h-16 z-50 border border-gray-700"
      >
        <img src="/YN.png" alt="Menu" className="w-8 h-8" />
      </button>

      {isVisible && (
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-80 bg-gray-50 text-white p-6 shadow-lg flex flex-col z-50 border-l border-gray-800`}
        >
          <button
            ref={xButtonRef}
            onClick={() => setIsOpen(false)}
            onMouseEnter={handleXHover}
            onMouseLeave={handleXMouseLeave}
            className="absolute top-4 right-4 p-2 bg-transparent rounded-full border-2 border-gray-500 flex items-center justify-center"
          >
            <X size={32} className="text-gray-700" />
          </button>

          <h2 className="text-lg text-gray-700 font-semibold mt-11 mb-4 border-b border-gray-700 pb-2">
            Navigation
          </h2>
          <ul className="space-y-4 text-6xl">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  ref={(el) => (linkRefs.current[index] = el)}
                  onClick={() => handleScrollTo(item.id)}
                  onMouseEnter={() =>
                    handleHover(linkRefs.current[index], true)
                  }
                  onMouseLeave={() =>
                    handleHover(linkRefs.current[index], false)
                  }
                  className="block text-gray-500 text-left w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Menambahkan bagian Links di bawah Navigation dengan Flex */}
          <h2 className="text-lg  text-gray-700 font-semibold mt-11 mb-4 border-b border-gray-700 pb-2">
            Links
          </h2>
          <div className="flex gap-4">
            {[
              { label: "Github", url: "https://github.com/yawwnann" },
              { label: "Linkedin", url: "https://www.linkedin.com/yuwananta" },
              { label: "Instagram", url: "https://www.instagram.com/yawwnan" },
              { label: "Tiktok", url: "https://www.tiktok.com/yawwnan" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
