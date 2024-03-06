import React, { useState, useEffect, useRef } from "react";
import { truncateStr } from "./utils/truncateStr";
import { Link } from "react-router-dom";

const Navbar = ({ }) => {
  const [toggleValue, setToggle] = useState(false);

  const navRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggleValue);
  };

  const closeNavOnScroll = () => {
    if (toggleValue) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", closeNavOnScroll);
    return () => {
      window.removeEventListener("scroll", closeNavOnScroll);
    };
  }, [toggleValue]);

  return (
    <nav className="navbar ">
      <div className="nav__header">
        <div
          onClick={handleToggle}
          className={
            (toggleValue && "nav__burger nav__burger--close") || "nav__burger"
          }
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar__logo " href="/"><Link to="/" className="text-5xl ">

          <span className="text-white">d</span><span className="text-[#b95ce0] text-5xl">Vote</span>
        </Link>
        </div>
      </div>
      <ul
        ref={navRef}
        className={
          (toggleValue && "nav__links nav__links--expanded") || "nav__links"
        }
      >
        <div className="max-md:flex-col max-md:justify-center max-md:items-center max-md:px-2 ">
        <Link to="/" className="text-lg font-semibold transition-transform duration-450 hover:transform hover:scale-105">Home</Link>
        <Link to="create-contest " className="text-lg font-semibold transition-transform duration-450 hover:transform hover:scale-105">Create Contest</Link>
        <Link to="contests" className="text-lg font-semibold transition-transform duration-450 hover:transform hover:scale-105">Contests</Link>
       
    
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
