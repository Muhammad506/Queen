"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // State to track active link

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set active link on click
  };

  return (
    <main>
      {/* Desktop Navbar */}
      <header
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-stone-800 bg-opacity-90 text-white"
            : "bg-transparent text-white"
        } hidden md:flex items-center justify-between px-8 lg:px-12 py-4`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={() => handleLinkClick("home")}>
            <Image
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex space-x-6 lg:space-x-10 font-medium text-lg">
          {["Home", "About", "Program", "Admission"].map((item, index) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={index}
              onClick={() => handleLinkClick(item.toLowerCase())}
            >
              <button
                className={`transition-colors duration-200 ${
                  activeLink === item.toLowerCase()
                    ? "underline text-yellow-300"
                    : "hover:text-gray-300"
                }`}
              >
                {item}
              </button>
            </Link>
          ))}
          <button
            onClick={() => {
              handleScrollTo("footer");
              handleLinkClick("footer"); // Set active link
            }}
            className={`transition-colors duration-200 ${
              activeLink === "footer"
                ? "underline text-yellow-300"
                : "hover:text-gray-300"
            }`}
          >
            Footer
          </button>
        </nav>

        {/* Call to Action Button */}
        <Link href="/contactus" onClick={() => handleLinkClick("contactus")}>
          <button className="px-6 font-semibold py-3 bg-white text-black rounded-full hover:bg-gray-300 transition text-lg  duration-300">
            Contact us
          </button>
        </Link>
      </header>

      {/* Mobile Navbar */}
      <header
        className={`fixed w-full z-50 transition-colors duration-300 md:hidden ${
          isScrolled
            ? "bg-stone-800 bg-opacity-90 text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={() => handleLinkClick("home")}>
              <Image
                src="/logo.png"
                alt="logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleMenu} className="z-50">
            <svg
              className="w-8 h-8 text-white"
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

        {/* Mobile Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-br from-[#4e342e] via-[#5d4037] to-[#3e2723] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <ul className="flex flex-col items-center pt-20 space-y-8 text-white">
            {["Home", "About", "Program", "Admission"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => handleLinkClick(item.toLowerCase())}
                >
                  <button
                    className={`transition duration-200 ${
                      activeLink === item.toLowerCase()
                        ? "underline text-yellow-300"
                        : "hover:text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  handleScrollTo("footer");
                  handleLinkClick("footer"); // Set active link
                }}
                className={`transition duration-200 ${
                  activeLink === "footer"
                    ? "underline text-yellow-300"
                    : "hover:text-gray-300"
                }`}
              >
                Footer
              </button>
            </li>
            <li>
              <Link
                href="/contactus"
                onClick={() => handleLinkClick("contactus")}
              >
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300">
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
