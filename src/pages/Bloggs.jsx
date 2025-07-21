import React from "react";
import rectangleImg17 from "../assets/Rectangle 17.png";
import rectangleImg18 from "../assets/Rectangle 18.png";
import rectangleImg19 from "../assets/Rectangle 19.png";

// Main blog component
function Bloggs() {
  // Blog item data
  const blogItems = [
    {
      title: "Build the right team to scale",
      content:
        "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
      quote:
        "“Software is quick to identify larger problem with the software so we decided to expand our scope to build new modules”",
      author: "Joana Markaron",
      role: "CEO",
      image: rectangleImg17,
    },
    {
      title: "Scale Your Business with Technology",
      content:
        "We believe technology should be your growth partner. From MVP to enterprise-level platforms, our solutions are designed to adapt to your changing business needs, helping you scale efficiently and cost-effectively.",
      quote:
        "“Partnering with them allowed us to automate critical processes and focus more on expanding our customer base.”",
      author: "Michael Torres",
      role: "CEO",
      image: rectangleImg18,
    },
    {
      title: "Build Solutions that Last",
      content:
        "Creating sustainable software isn’t just about delivering fast—it’s about ensuring your product can evolve with your business. We help you architect solutions that grow with your goals, while maintaining performance and quality at every stage.",
      quote:
        "“They understood our long-term goals and built a platform that supports both current and future needs without unnecessary complexity.”",
      author: "Joana Markaron",
      role: "CEO",
      image: rectangleImg19,
    },
  ];

  return (
    <div className="bloggsContainer">
      {/* Main Page Header */}
      <div className="pageHeader">
        <h1>Great Software</h1>
      </div>

      {/* Blog Item Loop */}
      {blogItems.map((item, index) => (
        <div
          className={`blogSection ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="blogText">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p className="quote">{item.quote}</p>
            <p className="author">
              {item.author} <span className="role">— {item.role}</span>
            </p>
          </div>

          <div className="spacer"></div>

          <div className="blogImage">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bloggs;
