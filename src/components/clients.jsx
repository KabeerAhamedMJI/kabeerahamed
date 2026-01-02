import React from "react";

function Clients() {
  const clients = [
    {
      id: 1,
      src: "https://asateer-ksa.com/img/resources/logo.png",
      alt: "Asateer Logo",
    },
    {
      id: 2,
      src: "https://guideacademy.in/images/logo/logo.svg",
      alt: "Guide Academy Logo",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpofcj23a/image/upload/v1763482504/New_Project_14_vaicl5.png",
      alt: "Alfia Logo",
    },
    {
      id: 4,
      src: "https://water-theme-park-7ytj.vercel.app/images/logo.webp",
      alt: "Water Theme Park Logo",
    },
    {
      id: 5,
      src: "https://medicareclient-dun.vercel.app/assets/Logo-B7ztcG0y.png",
      alt: "Medicare Client Logo",
    },
      {
      id: 7,
      src: "https://hat.com.sa/wp-content/uploads/2025/05/Hat-white-logo.png",
      alt: "Hat Group Logo",
    },
   
  ];

  const scrollingLogos = [...clients, ...clients]; // Duplicate for smooth loop

  return (
    <section id="clients" className="py-20 bg-[#222428]">
      <div className=" max-w-[1550px] mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14 px-4">
          <p className="text-sm sm:text-base mb-4 text-[#e60b4d] tracking-[0.18em]">
            Creating Smiles Through Exceptional Service
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200">
            Happy Clients
          </h2>
        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-16 animate-scroll">
            {scrollingLogos.map((client, index) => (
              <img
                key={index}
                src={client.src}
                alt={client.alt}
                className="
                  h-10 sm:h-12 md:h-14 
                  object-contain opacity-60 
                  hover:opacity-100 
                  transition-all duration-300 
                  grayscale hover:grayscale-0
                "
              />
            ))}
          </div>
        </div>

      </div>

      {/* Animation Style */}
      <style>{`
        .animate-scroll {
          animation: scrollLeft 22s linear infinite;
          width: max-content;
        }
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Clients;
