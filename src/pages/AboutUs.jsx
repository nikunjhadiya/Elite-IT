import React from "react";
import {
  FaAward,
  FaGlobeAmericas,
  FaUsersCog,
  FaLaptopCode,
  FaRegClock,
  FaRocket,
} from "react-icons/fa";
import leader1 from "../assets/Ridofranz CEO.jpg";
import leader2 from "../assets/cyano CTO.jpg";
import leader3 from "../assets/Liubomyr COO.jpg";
import logo from "../assets/company_logo.png";

// Main AboutUs Component
const AboutUs = () => {
  // Team Members Data
  const teamMembers = [
    { name: "Ridofranz", role: "CEO", image: leader1 },
    { name: "Cyano", role: "CTO", image: leader2 },
    { name: "Liubomyr", role: "COO", image: leader3 },
  ];

  // Certifications List
  const certifications = [
    "ISO 27001 Certified",
    "Microsoft Partner",
    "AWS Certified Team",
    "Google Cloud Partner",
    "Clutch Top B2B 2024",
  ];

  // Reasons to Choose Us
  const reasons = [
    { title: "10+ Years Experience", icon: <FaAward /> },
    { title: "Global Clients", icon: <FaGlobeAmericas /> },
    { title: "Agile Methodology", icon: <FaUsersCog /> },
    { title: "Dedicated Team", icon: <FaLaptopCode /> },
    { title: "24/7 Support", icon: <FaRegClock /> },
    { title: "100+ Successful Projects", icon: <FaRocket /> },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero fade-in">
        <h1>
          About <span>Elite IT</span>
        </h1>
        <p>
          We build digital solutions that empower businesses to grow globally through innovation, excellence, and integrity.
        </p>
        <div className="company-logo-wrapper">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-team fade-in">
        <h2>Meet Our Leadership</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-member" key={idx}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision fade-in">
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            To be a global leader in innovative digital solutions, transforming businesses through technology and empowering them to thrive in a connected world.
          </p>
        </div>
        <div className="info-card">
          <h2>Our Vision</h2>
          <p>
            To deliver cutting-edge IT services and solutions that drive growth, efficiency, and excellence for our clients, while fostering innovation, collaboration, and integrity in everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us fade-in">
        <h2>Why Choose Us</h2>
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div className="reason-card" key={idx}>
              <div className="icon">{reason.icon}</div>
              <p>{reason.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications fade-in">
        <h2>Certifications & Achievements</h2>
        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div key={idx}>{cert}</div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
