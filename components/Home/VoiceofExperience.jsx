import Image from "next/image";

const VoicesOfExperience = () => {
  const voices = [
    {
      name: "John Doe",
      testimonial:
        "I completed the Computer Networking & Security diploma at Queen's College. The supportive staff, especially Professor Gaurav, and unique teaching methods made it a great experience.",
      image: "/testimonials1.jpg",
      width: 96,
      height: 96,
    },
    {
      name: "Sarah",
      testimonial:
        "I studied Computer Networking and Security at Queen's College. This course enriched my knowledge and provided a profound skill set used to strive in the job market. Thank you, Queen's College staff and instructors.",
      image: "/testimonials2.jpg",
      width: 96,
      height: 96,
    },
    {
      name: "Mike Johnson",
      testimonial:
        "I joined the Business Analyst Program here at Queen's College. The staff is awesome; professors and instructors are knowledgeable and friendly. This diploma helped me learn the skills required to excel in my career.",
      image: "/testimonial3.jpg",
      width: 96,
      height: 96,
    },
  ];

  return (
    <main className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 p-4 md:p-8 py-14">
      <div className="w-full p-0 md:p-8 space-y-6">
        <h2 className="text-3xl md:text-4xl xl:text-5xl pb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] transition-transform transform hover:scale-105 text-center mb-6">
          Voices of Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-4 xl:gap-0">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="border border-[#3e2723] bg-white rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md max-w-xs mx-auto hover:bg-gray-100"
            >
              <Image
                src={voice.image}
                alt={`Image of ${voice.name}`}
                width={voice.width}
                height={voice.height}
                className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-[#4a302b]"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-[#3e2723]">
                {voice.name}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4 text-center">
                {voice.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VoicesOfExperience;
