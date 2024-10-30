"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LearnMore = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      title: "About Queens",
      description: "Want to know more about Queen's College?",
      imgSrc: "/AboutQueen.jpg",
      width: 320,
      height: 200,
    },
    {
      title: "Admissions",
      description: "Know more about enrollment and admissions?",
      imgSrc: "/img1.jpg",
      width: 320,
      height: 200,
    },
    {
      title: "Student Support",
      description: "Want to know what services we provide to our students?",
      imgSrc: "/StudentSupport.jpg",
      width: 320,
      height: 200,
    },
  ];

  return (
    <div id="about" className="w-full h-full mx-auto py-24 px-4 bg-slate-100">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-transparent pb-10 bg-clip-text bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] transition-transform transform hover:scale-105 text-center mb-6">
        Learn More
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center ">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-56 perspective"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative w-full h-full duration-300 transform-style preserve-3d"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="absolute w-full px-6 h-full rounded-lg overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-10">
                  <motion.h3 className="text-2xl text-white font-medium mb-2">
                    {item.title}
                  </motion.h3>
                </div>
              </motion.div>

              <motion.div
                className="absolute w-full h-full bg-gray-800 flex flex-col items-center justify-center text-white rounded-lg backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover rounded-lg opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-medium mb-2">
                    {item.description}
                  </h3>
                  <motion.button className="bg-[#3e2723] text-white px-4 py-2 rounded">
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
