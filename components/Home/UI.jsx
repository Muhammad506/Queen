import Image from "next/image";
import React from "react";

const UI = () => {
  const images = [
    {
      src: "/img3.jpg",
      alt: "Adaptive AI Ecosystem",
      text: "Adaptive AI Ecosystem",
    },
    {
      src: "/img1.jpg",
      alt: "Generative AI with OpenAI",
      text: "Generative AI with OpenAI",
    },
    {
      src: "/img2.jpg",
      alt: "Spatial Analysis through GIS",
      text: "Spatial Analysis through GIS",
    },
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full ">
        {" "}
      
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group transition-transform duration-300 bg-white shadow-lg hover:shadow-2xl  "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
              <span className="text-white text-xl font-semibold text-center transform scale-100 transition-transform duration-300 group-hover:scale-110">
          
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
