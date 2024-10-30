import React from "react";
import Image from "next/image";

const ExploreMore = () => {
  return (
    <main className="bg-[url('/Explorebg.jpg')] bg-cover bg-center font-sans-serif min-h-screen ">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-black/60 via-black/40 to-transparent flex flex-col justify-center items-start pl-6 md:pl-16 lg:pl-24">
        <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0 xl:px-20 space-y-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-6">
            Explore Queen's College
          </h1>

          <p className="text-white text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed tracking-wide mb-8">
            Explore a realm of academic excellence, where vibrant campus life
            and transformative experiences await you. Delve into our diverse
            programs, cutting-edge research opportunities, and comprehensive
            student resources, all tailored to empower you to thrive and achieve
            your aspirations.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col  items-center justify-center gap-10 p-8 py-20 md:p-32 bg-gradient-to-r from-blue-50 via-white to-blue-50 ">
        {/* Left Side */}
        <div className="flex flex-col justify-center h-full w-full lg:w-4/5  md:pr-10">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-[#4e342e]  font-bold mb-4">
            Our Mission
          </h1>
          <p className="mb-2">
            Since our establishment in 1986, our mission has been to empower
            individuals, strengthen communities, and foster personal growth.
          </p>
          <p className="mb-2">
            We offer high-quality, career-focused programs taught by industry
            professionals. Designed to be concise, you will quickly gain skills
            and qualifications needed to pursue in-demand careers.
          </p>
          <p className="mb-2">
            Our small class sizes ensure a personalized and hands-on learning
            experience for our students.
          </p>
          <p className="mb-2">
            Join our multi-cultural community that will enrich your educational
            experience. We want you to succeed and will support you every step
            of the way.
          </p>
          <p className="mb-2">
            Our team helps you find the perfect space with personalized
            recommendations and support.
          </p>

          <p className="mb-2 font-bold text-[#4e342e] ">
            Education For All. Together We Thrive.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative md:w-3/4 lg:2/3 transition-transform duration-500 hover:scale-105 flex justify-center">
          <Image
            src="/explore2.png"
            alt="Your Image Description"
            width={400}
            height={300}
            className="object-cover relative z-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
};

export default ExploreMore;
