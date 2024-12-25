import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          SwapSkill
        </NavLink>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about_us" className="nav__link">
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/#why-skill-swap" className="nav__link">
                Why SwapSkill
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/discover" className="nav__link">
                Discover
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/login" className="nav__link">
                Login/Register
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                Get Started
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
