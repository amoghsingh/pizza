import React from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/" ? null : (
    <>
      <footer>
        <div>
          <div className="first_menu">Menu</div>
          <p>Veg Pizza</p>
          <p>Chicken Pizza</p>
          <p>Pasta</p>
          <p>Pizza Crust</p>
          <p>Beverages</p>
          <p>Pizza Mania</p>
          <p>Burger Pizza</p>
        </div>
        <div>
          <div className="first_menu">Company</div>
          <p>Blog</p>
          <p>Investor</p>
          <p>Feedback</p>
          <p>Ads</p>
        </div>
        <div>
          <div className="first_menu">Pizza Restaurants</div>
          <p>Restaurants near me</p>
          <p>Pizza near me</p>
          <p>Food near me</p>
          <p>Food Delivery Crust</p>
          <p>Italian Food</p>
          <p>Order Food Online</p>
        </div>
        <div>
          <div className="first_menu">About</div>
          <p>GIft card</p>
          <p>Card balance enquiry</p>
          <p>FAQ</p>
          <p>Virtual Pizza Party</p>
          <p>E-Gift Vouchers</p>
        </div>
        <div>
          <div className="first_menu">Legal</div>
          <p>Disclaimer</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="first_menu">Social Media</div>
      </footer>
    </>
  );
};

export default Footer;
