import React from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";

import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/" ? null : (
    <>
      <footer>
        <div>
          <div className="first_menu">Menu</div>
          <a href="#">Veg Pizza</a>
          <a href="#">Chicken Pizza</a>
          <a href="#">Pasta</a>
          <a href="#">Pizza Crust</a>
          <a href="#">Beverages</a>
          <a href="#">Pizza Mania</a>
          <a href="#">Burger Pizza</a>
        </div>
        <div>
          <div className="first_menu">Company</div>
          <a href="#">Blog</a>
          <a href="#">Investor</a>
          <a href="#">Feedback</a>
          <a href="#">Ads</a>
        </div>
        <div>
          <div className="first_menu">Pizza Restaurants</div>
          <a href="#">Restaurants near me</a>
          <a href="#">Pizza near me</a>
          <a href="#">Food near me</a>
          <a href="#">Food Delivery Crust</a>
          <a href="#">Italian Food</a>
          <a href="#">Order Food Online</a>
        </div>
        <div>
          <div className="first_menu">About</div>
          <a href="#">GIft card</a>
          <a href="#">Card balance enquiry</a>
          <a href="#">FAQ</a>
          <a href="#">Virtual Pizza Party</a>
          <a href="#">E-Gift Vouchers</a>
        </div>
        <div>
          <div className="first_menu">Legal</div>
          <a href="#">Disclaimer</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <div className="first_menu">Social Media</div>
          <a href="https://www.instagram.com/" target="_blank">
            <SlSocialInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <SlSocialFacebook />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <SlSocialYoutube />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <TiSocialTwitter />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
