import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return <footer id="footer">
    <div className="footer-wrapper">
      <div className="footer-links">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Treatment</a></li>
          <li><a href="">Prices</a></li>
          <li><a href="">Our Story</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="footer-address">
        <p>Erasmustraat 888, 3000 FS Utrecht | (070) 456 789</p>
      </div>
      <div className="social-links">
        <a href="#" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="xl"/>
        </a>
        <a href="#" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} size="xl"/>
        </a>
        <a href="#" target="_blank">
        <FontAwesomeIcon icon={faTiktok} size="xl" />
        </a>
      </div>
    </div>
  </footer>;
};

export default Footer;
