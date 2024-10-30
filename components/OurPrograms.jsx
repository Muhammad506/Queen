import React from "react";
import {
  FaBookOpen,
  FaBriefcase,
  FaBrain,
  FaLeaf,
  FaHistory,
  FaCalculator,
  FaPencilAlt,
  FaGlobe,
  FaPalette,
} from "react-icons/fa";

const programsData = [
  {
    id: 1,
    title: "Computer Science",
    description:
      "Our Computer Science program prepares students for careers in software development, data analysis, and more.",
    icon: <FaBookOpen className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 2,
    title: "Business Administration",
    description:
      "The Business Administration program offers a comprehensive education in management, finance, and marketing.",
    icon: <FaBriefcase className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 3,
    title: "Psychology",
    description:
      "The Psychology program explores human behavior and mental processes, preparing students for various careers in mental health.",
    icon: <FaBrain className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 4,
    title: "Biology",
    description:
      "The Biology program provides a deep understanding of living organisms, preparing students for careers in research, healthcare, and environmental science.",
    icon: <FaLeaf className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 5,
    title: "History",
    description:
      "Our History program allows students to explore past events, societies, and cultures, equipping them with critical thinking and analytical skills.",
    icon: <FaHistory className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 6,
    title: "Mathematics",
    description:
      "The Mathematics program emphasizes problem-solving and analytical skills, preparing students for careers in engineering, finance, and education.",
    icon: <FaCalculator className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 7,
    title: "English Literature",
    description:
      "The English Literature program focuses on the study of literary works, fostering critical analysis and appreciation of diverse cultures.",
    icon: <FaPencilAlt className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 8,
    title: "Environmental Studies",
    description:
      "The Environmental Studies program examines the relationship between humans and the environment, preparing students for careers in sustainability and conservation.",
    icon: <FaGlobe className="text-3xl mb-2 text-[#4e342e]" />,
  },
  {
    id: 9,
    title: "Art and Design",
    description:
      "Our Art and Design program encourages creativity and innovation, preparing students for careers in various artistic fields.",
    icon: <FaPalette className="text-3xl mb-2 text-[#4e342e]" />,
  },
];

const OurPrograms = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div
        className="bg-[url('/bgProgram.jpg')] bg-cover bg-center p-10 w-full flex items-center justify-center relative"
        style={{ height: "400px" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-white relative z-10">
          Our Programs
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10 max-w-5xl w-full px-4">
        {programsData.map((program) => (
          <article
            key={program.id}
            className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:transition-transform duration-300 ease-in-out border-x-4 border-[#4e342e]"
          >
            {program.icon}
            <h3 className="text-xl font-semibold mb-2 text-center text-[#4e342e]">
              {program.title}
            </h3>
            <p className="text-center text-gray-700">{program.description}</p>
            <a
              href="#"
              className="mt-4 text-[#4e342e] hover:underline font-bold"
            >
              Learn More
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
