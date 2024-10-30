import Link from "next/link";

const Hero = () => {
  return (
    <main className="bg-[url('/BG2.jpg')] bg-cover bg-center h-screen font-sans-serif">
      {/* Overlay for background dimming */}
      <div className="h-full bg-gradient-to-br from-black/80 via-black/50 to-black/20 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-start h-full pl-10 md:pl-16 lg:pl-24">
          <div className="xl:w-2/3 md:w-5/6 w-full px-2 md:px-0 xl:px-20 space-y-6">
            <h1 className="mt-20 text-2xl justify-center text-left md:text-4xl xl:text-5xl font-bold text-transparent gap-2 flex flex-col bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient mb-6">
              <span className="md:text-nowrap flex text-wrap">
                EDUCATION FOR ALL.
              </span>

              <div className="text-nowrap flex   ">
                <span className="text-white block lg:inline mr-2">
                  TOGETHER WE{" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
                  THRIVE
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-base md:text-lg lg:text-xl xl:text-lg leading-relaxed tracking-wide mb-8">
              Our cutting-edge curriculum empowers students with the knowledge,
              skills, and experiences needed to excel in the dynamic field of
              education.
            </p>

            {/* Button Section */}
            <Link href="/exploremore">
              <button className="px-6 py-3 mt-8 font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
