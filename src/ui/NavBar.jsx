/* eslint-disable */

import { useState } from "react";
import Button from "./Button";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState();

  const toggleNav = () => {
    setNav(!Nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto bg-green-200 flex justify-between text-gray-200 text-xl items-center px-12 h-20">
        <a href="#">Refrain</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
