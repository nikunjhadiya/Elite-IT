import React from "react";
import logo from "../assets/company_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Main Hire Page
const Hire = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate("/hire-form");
  };

  return (
    <div className="hirewrapper">
      {/* Hero Section */}
      <section className="hirebanner">
        <div className="hiretext">
          <h2>Hire the best developers and designers around!</h2>
        </div>
        <button className="hirebutton" onClick={handleHireClick}>
          Hire Top Developers
        </button>
      </section>

      {/* Footer Section */}
      <footer className="hirefooter">
        <div className="footergrid">
          {/* Brand Info */}
          <div className="footerbrand">
            <img src={logo} alt="Brand Logo" className="footerlogo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footerlinks">
            <h4>Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/bloggs">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footercontact">
            <h4>Contact us</h4>
            <p>3008, 3rd Floor, Luxuria Business Hub, Surat - 395006</p>
            <p>+92 123 456 7890</p>
            <div className="socialcircle">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialicon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialicon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialicon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialicon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        <div className="footerbottom">
          <p>© 2025 Copyright by IT Developers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hire;
