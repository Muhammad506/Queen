"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <main className="bg-[url('/contact-us.jpg')] bg-cover bg-center font-sans-serif min-h-screen w-full">
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-black/70 via-black/50 to-transparent flex flex-col justify-center items-start px-8 md:px-20 lg:px-32">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white drop-shadow-md mb-4">
            CONTACT US ANYTIME
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed tracking-wide max-w-2xl">
            Our cutting-edge curriculum empowers students with the knowledge to
            thrive. Reach out to us for inquiries, support, or feedback using
            our easy-to-use form.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="flex flex-col items-center justify-center py-16 px-6 bg-[#F1F5F9]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-md md:max-w-2xl lg:w-1/2 bg-white shadow-2xl rounded-2xl p-10 space-y-6 border border-gray-200"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#4e342e] text-center">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-base md:text-lg text-center">
            We’d love to hear from you! Please fill out the form below, and
            we’ll respond soon.
          </p>

          <form className="space-y-5">
            {/* Name Field */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#4e342e] placeholder:text-gray-400"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#4e342e] placeholder:text-gray-400"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div whileHover={{ scale: 1.03 }}>
              <textarea
                placeholder="Your Message"
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#4e342e] placeholder:text-gray-400"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] text-white font-semibold rounded-lg shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUs;
