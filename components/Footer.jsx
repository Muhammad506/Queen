"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
        className="container mx-auto"
      >
        {/* Logo Section */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-gray-300 pb-12">
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-200 leading-relaxed">
              Queens College is committed to empowering students through quality
              education.
            </p>
          </motion.div>

          <motion.div
            variants={variants}
            className="ml-0 md:ml-12 lg:ml-20 xl:ml-36"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Admissions", path: "/admission" },
                { name: "Programs", path: "/program" },
                { name: "About", path: "/about" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path} passHref>
                    <div className="text-gray-200 hover:text-white transition duration-300">
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200">
              123 University St, City, State, Zip <br />
              <a
                href="mailto:contact@queenscollege.edu"
                className="hover:text-white"
              >
                contact@queenscollege.edu
              </a>
              <br />
              Phone: (123) 456-7890
            </p>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <motion.div variants={variants}>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To inspire leadership through transformative education.
            </p>
          </motion.div>

          <motion.div
            variants={variants}
            className="ml-0 md:ml-8 lg:ml-12  xl:ml-28"
          >
            <h3 className="text-2xl font-semibold mb-4 text-nowrap">
              Upcoming Events
            </h3>
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

          <motion.div variants={variants} className="hidden lg:block">
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
          className="flex justify-center space-x-6 mt-16 ml-0 md:ml-12 xl:ml-16"
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <Icon />
              </a>
            )
          )}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-gray-300 mt-10 text-sm ml-0 md:ml-12 xl:ml-16"
        >
          © {new Date().getFullYear()} Queens College. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
