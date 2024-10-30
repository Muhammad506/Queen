import Image from "next/image";
import { GiSoccerBall } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const ClubActivities = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 p-4 md:p-8">
      <div className="w-full lg:w-1/2 p-4 md:p-8 space-y-6">
     
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723]  transition-transform transform hover:scale-105">
          Club & Activities
        </h1>

        {/* Content Section */}
        <div className="space-y-6">
          {[
            {
              title: "Club Activities",
              content:
                "Participate in various clubs that focus on hobbies, sports, and interests. Whether you enjoy sports, arts, or community service, there’s a club for you to enhance your skills and make friends.",
              icon: (
                <GiSoccerBall className="text-[#3e2723] text-3xl inline-block mr-2" />
              ),
            },
            {
              title: "Book Activities",
              content:
                "Join book clubs that delve into different genres, share reviews, and foster a love for reading. Engage in discussions and discover new perspectives through literature.",
              icon: (
                <FaBook className="text-[#3e2723] text-3xl inline-block mr-2" />
              ),
            },
            {
              title: "IT Activities",
              content:
                "Explore the world of technology with IT clubs that focus on coding, software development, and innovation. Participate in workshops and projects to enhance your tech skills.",
              icon: (
                <FaLaptopCode className="text-[#3e2723] text-3xl inline-block mr-2" />
              ),
            },
          ].map((activity, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl font-bold text-[#3e2723] hover:text-[#271613] transition-colors duration-300 flex items-center">
                {activity.icon}
                {activity.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {activity.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="relative w-11/12 md:w-3/4 lg:w-96 h-80 md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src="/club.jpg"
            alt="Club Activities"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl transition-transform duration-300 ease-in-out"
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-0 transition-opacity duration-300"></div>
        </div>
      </div>
    </main>
  );
};

export default ClubActivities;
