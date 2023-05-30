import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return location.pathname === "/" ? null : (
    <header>
      <img src={logo} alt="logo" className="logo" />
      {isPopupOpen === true ? (
        <div className="menu-popup">
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/stores"}>Stores</Link>
            </li>
            <li>
              <Link to={"/gift-card"}>Gift Card</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <nav className="nav-menu">
            <span>
              <Link to={"/home"}>Home</Link>
            </span>
            <span>
              <Link to={"/stores"}>Stores</Link>
            </span>
            <span>
              <Link to={"/gift-card"}>Gift Card</Link>
            </span>
            <span>
              <Link to={"/contact-us"}>Contact Us</Link>
            </span>
          </nav>
        </>
      )}

      <div className="ham-menu">
        {isPopupOpen === true ? (
          <IoIosClose size={30} onClick={() => toggleMenu()} />
        ) : (
          <RxHamburgerMenu size={30} onClick={() => toggleMenu()} />
        )}
      </div>
    </header>
  );
};

export default Header;
