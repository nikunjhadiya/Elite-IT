import React from "react";
import { useNavigate } from "react-router-dom";
import teamworkImg from "../assets/teamwork.png";

// Main Hero Section Component
const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <section className="home">
      {/* Text Content */}
      <div className="text">
        <h1 className="title">
          Great <b className="highlight">Product</b> is
          <br />
          <strong>
            built by great <span className="highlight">teams</span>
          </strong>
        </h1>
        <p className="subtext">
          We help build and manage a team of world-class developers <br />
          to bring your vision to life.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="buttons">
          <button className="btn" onClick={handleAboutClick}>
            Get in Touch
          </button>
          <button className="btn" onClick={handleServicesClick}>
            View Services
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="image">
        <img src={teamworkImg} alt="Teamwork" />
      </div>
    </section>
  );
};

export default Home;
