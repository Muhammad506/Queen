"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <main>
      {/* Desktop Nav */}
      <header
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-stone-800 bg-opacity-90 text-white"
            : "bg-transparent text-white"
        } hidden md:flex items-center justify-between px-12 py-4`}
      >
        {/* Logo on the Left */}
        <div className="flex items-center space-x-4">
          <Link href="/home">
            <h2 className="text-2xl font-semibold cursor-pointer">LOGO</h2>
          </Link>
        </div>

        {/* Centered Links */}
        <nav className="flex space-x-8 font-medium">
          <Link href="/home">
            <button className="hover:text-gray-300">Home</button>
          </Link>
          <Link href="/exploremore">
            <button className="hover:text-gray-300">About</button>
          </Link>
          <Link href="/program">
            <button className="hover:text-gray-300">Program</button>
          </Link>

          <Link href="/admissions">
            <button className="hover:text-gray-300">Admission</button>
          </Link>
          <button
            onClick={() => handleScrollTo("footer")}
            className="hover:text-gray-300"
          >
            Footer
          </button>
        </nav>

        {/* Button on the Right */}
        <Link href="/contactus">
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300">
            Contact us
          </button>
        </Link>
      </header>

      {/* Mobile and Medium Screens */}
      <header
        className={`fixed w-full z-50 transition-colors duration-300 md:hidden ${
          isScrolled
            ? "bg-stone-800 bg-opacity-90 text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/home" passHref>
            <h2 className="text-2xl font-semibold cursor-pointer">LOGO</h2>
          </Link>

          {/* Hamburger Icon */}
          <div className="flex items-center z-50 md:hidden text-white ">
            <button onClick={toggleMenu} className=" focus:outline-none">
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-full bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <ul className="flex flex-col items-center py-16 space-y-8 text-white">
            <li>
              <Link href="/home" scroll={false}>
                <button className="hover:text-gray-300">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/exploremore">
                <button className="hover:text-gray-300">About</button>
              </Link>
            </li>
            <li>
              <Link href="/program">
                <button className="hover:text-gray-300">Program</button>
              </Link>
            </li>

            <li>
              <Link href="/admissions">
                <button className="hover:text-gray-300">Admission</button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("footer")}
                className="hover:text-gray-300"
              >
                Footer
              </button>
            </li>
            <li>
              <Link href="/contactus">
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300">
                  Contact us
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default NavBar;
