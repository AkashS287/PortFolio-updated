import React, { useState } from "react";
import CoderGif from "../assets/coder.gif";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll"; 

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between p-5 items-center bg-gradient-to-t from-slate-300 to-slate-400 relative">
      <img className="w-24 rounded-full" src={CoderGif} alt="Coder" />

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-7">
          <li className="font-medium hover:text-zinc-300">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <a href="Resume.pdf" download='Akash_Resume.pdf'>Resume</a>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="overview" smooth={true} duration={500}>Overview</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="font-medium hover:text-zinc-300">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="block md:hidden absolute top-20 right-0 z-10 w-48 bg-slate-400 shadow-lg rounded-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li className="font-medium hover:text-zinc-300">
              <Link to="about" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>About</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <a href="Resume.pdf" download='Akash_Resume.pdf' onClick={() => setToggleMenu(false)}>Resume</a>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="overview" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Overview</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="projects" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Projects</Link>
            </li>
            <li className="font-medium hover:text-zinc-300">
              <Link to="contact" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Toggle Button */}
      <button className="block md:hidden text-gray-800" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>
    </header>
  );
};

export default Header;