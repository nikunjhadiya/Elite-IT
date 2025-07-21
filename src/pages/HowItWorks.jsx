import React, { useState } from "react";
import {
  FaRocket,
  FaCode,
  FaAward,
  FaShieldAlt,
  FaClipboardCheck,
  FaBug,
} from "react-icons/fa";

// Backend
import nodejs from "../assets/nodejs.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import java from "../assets/java.png";
import dotnet from "../assets/dotnet.png";
import python from "../assets/python.png";
import rails from "../assets/rails.png";
import mongodb from "../assets/mongodb.png";

// Frontend
import reactLogo from "../assets/react.png";
import angular from "../assets/angular.png";
import vue from "../assets/Vue.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import js from "../assets/javascript.png";

// Databases
import postgresql from "../assets/postgresql.png";
import firebase from "../assets/firebase.png";
import redis from "../assets/redis.png";

// CMS
import wordpress from "../assets/wordpress.png";
import strapi from "../assets/strapi.png";
import joomla from "../assets/joomla.png";

// Cloud and Testing
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import gcp from "../assets/gcp.png";
import cypress from "../assets/cypress.png";

// DevOps
import kubernetes from "../assets/kubernetes.png";
import jenkins from "../assets/jenkins.png";
import github from "../assets/github.png";

// Main Component
function ApproachAndTechStack() {
  const [activeTab, setActiveTab] = useState("Backend");

  const features = [
    {
      icon: <FaRocket />,
      title: "UX Driven Engineering",
      description: "Projects are driven by designers to help ensure design and experiences translate to code.",
      bg: "#fff8e1",
      color: "#000000",
    },
    {
      icon: <FaCode />,
      title: "Developing Shared Understanding",
      description: "Designers lead projects to ensure clear shared goals and understanding with developers.",
      bg: "#e6f3ff",
      color: "#000000",
    },
    {
      icon: <FaAward />,
      title: "Proven Experience and Expertise",
      description: "Our experienced teams deliver consistently across design, development, and testing.",
      bg: "#fff0f3",
      color: "#000000",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Intellectual Property (IP)",
      description: "Security and confidentiality are our top priorities throughout every stage.",
      bg: "#e8fff6",
      color: "#000000",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Code Reviews",
      description: "Every project goes through rigorous peer review and standards checking.",
      bg: "#fff8e1",
      color: "#000000",
    },
    {
      icon: <FaBug />,
      title: "Quality Assurance & Testing",
      description: "We test and validate continuously to ensure reliability and confidence in release.",
      bg: "#f5f0ff",
      color: "#000000",
    },
  ];

  const techTabs = ["Backend", "Frontend", "Databases", "CMS", "CloudTesting", "DevOps"];

  const techIcons = {
    Backend: [nodejs, php, mysql, java, dotnet, python, rails, mongodb],
    Frontend: [reactLogo, angular, vue, html5, css3, js],
    Databases: [mysql, postgresql, mongodb, firebase, redis],
    CMS: [wordpress, strapi, joomla],
    CloudTesting: [aws, azure, gcp, cypress],
    DevOps: [kubernetes, jenkins, github],
  };

  return (
    <div className="wrapper">
      {/* Section: Development Approach */}
      <div className="sectiontitle">
        <h1>development approach</h1>
      </div>
      <div className="featuresgrid">
        {features.map((item, index) => (
          <div
            className="featurebox"
            key={index}
            style={{ backgroundColor: item.bg, color: item.color }}
          >
            <div className="featureicon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Section: Tech Stack */}
      <div className="sectiontitle techsection">
        <h3>Our</h3>
        <h1>Tech Stack</h1>
      </div>
      <div className="tabs">
        {techTabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="iconsgrid">
        {techIcons[activeTab].map((icon, idx) => (
          <img src={icon} alt={`${activeTab}-${idx}`} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default ApproachAndTechStack;
