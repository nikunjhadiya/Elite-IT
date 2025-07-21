import React from "react";
import { Link } from "react-router-dom";

// Main Services List Data
const servicesData = [
  {
    title: "Mobile App Development",
    description: "Extend your business with powerful and engaging mobile apps.",
    icon: "📱",
    slug: "mobile-app-development",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that offer outstanding user experiences.",
    icon: "🎨",
    slug: "ui-ux-design",
  },
  {
    title: "Web Development",
    description: "Responsive, modern, and SEO-friendly websites tailored to your brand.",
    icon: "💻",
    slug: "web-development",
  },
  {
    title: "Software Testing",
    description: "Ensuring quality and reliability with rigorous testing practices.",
    icon: "🧪",
    slug: "software-testing",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructures customized to your needs.",
    icon: "☁️",
    slug: "cloud-solutions",
  },
  {
    title: "DevOps Consulting",
    description: "Automate, monitor, and streamline development pipelines with DevOps.",
    icon: "⚙️",
    slug: "devops-consulting",
  },
  {
    title: "AI/ML Development",
    description: "Intelligent systems using Artificial Intelligence and Machine Learning.",
    icon: "🤖",
    slug: "ai-ml-development",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced cybersecurity solutions.",
    icon: "🛡️",
    slug: "cybersecurity",
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance and expert solutions for IT modernization.",
    icon: "💡",
    slug: "it-consulting",
  },
];

// Main Services Component
const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, i) => (
          <div
            className="service-card fade-in"
            key={i}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`/services/${service.slug}`} className="service-cta">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
export { servicesData };
