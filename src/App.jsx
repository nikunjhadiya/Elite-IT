import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// Page Components
import HomePage from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Bloggs from "./pages/Bloggs";
import CaseStudies from "./pages/CaseStudies";
import Hire from "./pages/Hire";
import HireForm from "./pages/HireForm";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./pages/ScrollToTop";
import logo from "./assets/company_logo.png";

import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbarcontainer">
          <NavLink to="/" className="logolink">
            <img src={logo} alt="Company Logo" className="navbarlogo" />
          </NavLink>

          <ul className="navlinks">
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/case-studies">Case Studies</NavLink>
            </li>
            <li>
              <NavLink to="/bloggs">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/how-it-works">How it Works</NavLink>
            </li>
            <li>
              <NavLink to="/hire">Hire</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Routing */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/bloggs" element={<Bloggs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/hire-form" element={<HireForm />} />
      </Routes>
    </div>
  );
}

export default App;
