import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  const location = useLocation();

  return location.pathname === "/" ? null : (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
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
    </header>
  );
};

export default Header;
