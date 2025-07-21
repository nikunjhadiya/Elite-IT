import React from "react";
import { Link } from "react-router-dom";
import caseImage1 from "../assets/Casestudy.png";
import caseImage2 from "../assets/Casestudy1.png";
import caseImage3 from "../assets/Casestudy2.png";

// Case study cards data
const data = [
  {
    id: 1,
    title: "Fitness App",
    problem: "Low engagement and high churn in existing health apps.",
    solution: "Built a gamified fitness app with streaks, goals, and community challenges.",
    results: "User retention improved by 42% and app downloads doubled in 3 months.",
    image: caseImage1,
    color: "#e8ebff",
  },
  {
    id: 2,
    title: "Goals App",
    problem: "Users struggled to track recurring tasks efficiently.",
    solution: "Developed a frequency-based task manager with visual goal tracking.",
    results: "70% of users reported improved task completion within the first month.",
    image: caseImage2,
    color: "#c3f4e3",
  },
  {
    id: 3,
    title: "Wellness App",
    problem: "Existing apps lacked engagement for beginner meditators.",
    solution: "Created a soft-tone app using gamified sessions and soothing UI.",
    results: "App retention increased by 34%, with higher daily active sessions.",
    image: caseImage3,
    color: "#f8d3eb",
  },
];

// Main component
const CaseStudies = () => {
  return (
    <section className="case">
      <h2 className="heading">Our Case Studies</h2>

      {data.map((item) => (
        <div key={item.id} className="card" style={{ backgroundColor: item.color }}>
          <img src={item.image} alt={item.title} className="image" />
          <div className="content">
            <h3>{item.title}</h3>
            <p><b>Problem:</b> {item.problem}</p>
            <p><b>Solution:</b> {item.solution}</p>
            <p><b>Results:</b> {item.results}</p>
            <Link to="/case-studies" className="button">Read Case Study →</Link>
          </div>
        </div>
      ))}

      <div className="footer">
        <Link to="/case-studies" className="viewall">View All Case Studies →</Link>
      </div>
    </section>
  );
};

export default CaseStudies;
