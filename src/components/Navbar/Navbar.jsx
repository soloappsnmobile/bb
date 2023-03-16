import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo-image mb-3" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active mt-3" : "nav-menu mt-2"}>
          <input type="text" placeholder="Search..." />
          <li className={color ? "nav-item nav-item-2" : "nav-item"}>
            <Link to="/" className="link" onClick={closeMenu}>
              <p>Home</p>
            </Link>
          </li>
          <li className={color ? "nav-item nav-item-2" : "nav-item"}>
            <Link to="/about" className="link" onClick={closeMenu}>
              <p>About</p>
            </Link>
          </li>

          <li className={color ? "nav-item nav-item-2" : "nav-item"}>
            <Link to="/contact-us" className="link" onClick={closeMenu}>
              <p>Contact</p>
            </Link>
          </li>
          <li className={color ? "nav-item nav-item-2" : "nav-item"}>
            <Link to="/blog" className="link" onClick={closeMenu}>
              <p>Blog</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
