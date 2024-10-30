"use client";

export default function Process() {
  return (
    <div className="min-h-screen p-6 md:p-10 bg-[#F1F5F9]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        {/* Left Side - Admission Process Content */}
        <div className="md:w-[60%] lg:w-[60%] space-y-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-nowrap font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] transition-transform transform hover:scale-105">
            Admission Process
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us in a few easy steps! Follow the admission process to
            kickstart your journey:
          </p>
          <ul className="space-y-6">
            {[
              "Fill out the admission form online or visit the campus.",
              "Submit necessary documents and pay the registration fee.",
              "Appear for a brief interview or entrance test.",
              "Get admission confirmation and start your journey!",
            ].map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="text-green-500 text-3xl">&#10003;</span>
                <p className="text-lg text-gray-800">{step}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Admission Form */}
        <div className="md:w-[40%] lg:w-[30%] bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] shadow-xl rounded-xl p-8 space-y-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl lg:text-4xl text-nowrap  font-bold text-white text-center">
            Admission Form
          </h2>
          <form className="space-y-6">
            {[
              {
                label: "Full Name",
                type: "text",
                placeholder: "Enter your full name",
              },
              {
                label: "Email Address",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone Number",
                type: "tel",
                placeholder: "Enter your phone number",
              },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-md font-medium text-white mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-stone-500 outline-none border-gray-300 focus:border-transparent transition"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block text-md font-medium text-white mb-2">
                Select Course
              </label>
              <select className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-stone-500 outline-none border-gray-300 focus:border-transparent transition">
                <option>Select a course</option>
                <option>Bachelor`s Program</option>
                <option>Master`s Program</option>
                <option>PhD Program</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-600 hover:bg-stone-800 text-white font-bold py-3 border border-white rounded-lg transition-transform transform hover:scale-105"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
