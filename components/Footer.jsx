"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const rect = footer.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] text-white py-16 px-8 lg:px-20"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        className="container mx-auto text-center"
      >
        {/* Logo Section */}
        <motion.h2
          variants={variants}
          className=" text-3xl md:text-4xl xl:text-5xl text-nowrap font-extrabold tracking-wider mb-10"
        >
          Queens College
        </motion.h2>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 border-b border-gray-100 pb-12">
          {/* About Us */}
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200 leading-relaxed">
              Queens College is committed to empowering students through quality
              education.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Admissions", "Programs", "Campus Life", "Alumni"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-200 hover:text-white transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200 leading-relaxed">
              123 University St, City, State, Zip <br />
              Email:{" "}
              <a
                href="mailto:contact@queenscollege.edu"
                className="hover:text-white transition"
              >
                contact@queenscollege.edu
              </a>
              <br />
              Phone: (123) 456-7890
            </p>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed">
              To inspire leadership through transformative education.
            </p>
          </motion.div>

          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
            <ul className="space-y-3">
              {[
                "Open House - Jan 15",
                "Career Fair - Feb 20",
                "Graduation - May 10",
              ].map((event, index) => (
                <li key={index}>
                  <a
                    href={`#event${index + 1}`}
                    className="hover:text-white transition"
                  >
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Library", "Student Services", "Counseling"].map(
                (resource, index) => (
                  <li key={index}>
                    <a
                      href={`#${resource.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-white transition"
                    >
                      {resource}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center space-x-8 mt-10"
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition-transform transform hover:scale-110 hover:shadow-lg"
              >
                <Icon />
              </a>
            )
          )}
        </motion.div>

        {/* Copyright Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-gray-300 mt-12 text-sm text-nowrap"
        >
          © {new Date().getFullYear()} Queens College. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
