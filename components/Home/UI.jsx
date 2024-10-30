import Image from "next/image";
import React from "react";

const UI = () => {
  const images = [
    {
      src: "/img3.jpg",
      alt: "Adaptive AI Ecosystem",
      text: "Adaptive AI Ecosystem",
      width: 400, 
      height: 300, 
    },
    {
      src: "/img1.jpg",
      alt: "Generative AI with OpenAI",
      text: "Generative AI with OpenAI",
      width: 400, 
      height: 300, 
    },
    {
      src: "/img2.jpg",
      alt: "Spatial Analysis through GIS",
      text: "Spatial Analysis through GIS",
      width: 400,
      height: 300, 
    },
  ];

  return (
    <div className="container w-full md:h-screen h-full bg-gradient-to-r from-blue-50 via-white to-blue-50 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full justify-items-center self-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group transition-transform duration-300 bg-white shadow-lg hover:shadow-xl h-full"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width} 
              height={image.height} 
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 md:opacity-0 opacity-100 group-hover:opacity-100">
              <span className="text-white lg:text-xl md:text-base text-lg font-bold text-center transition-transform duration-300 transform scale-100 group-hover:scale-110">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UI;
