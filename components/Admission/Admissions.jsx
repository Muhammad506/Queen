import React from "react";

const Admissions = () => {
  return (
    <main className="relative h-screen bg-[url('/Admission.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content with animation */}
      <h1
        className="relative text-white text-center font-extrabold 
          text-4xl md:text-5xl xl:text-6xl tracking-wider drop-shadow-lg
          animate-fadeIn"
      >
        ADMISSIONS
      </h1>
    </main>
  );
};

export default Admissions;
