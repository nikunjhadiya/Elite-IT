import React, { useState } from "react";

const HireForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    domains: [],
    skills: "",
    message: "",
    resume: null,
  });

  const domainOptions = [
    "Development",
    "Backend Development",
    "Database Management",
    "Cloud & DevOps",
    "Software Testing",
    "UI/UX Design",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDomainChange = (domain) => {
    const updatedDomains = formData.domains.includes(domain)
      ? formData.domains.filter((d) => d !== domain)
      : [...formData.domains, domain];
    setFormData({ ...formData, domains: updatedDomains });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("position", formData.position);
    form.append("skills", formData.skills);
    form.append("message", formData.message);
    form.append("resume", formData.resume);

    // If backend expects JSON-parsable array, stringify
    form.append("domains", JSON.stringify(formData.domains));

    try {
      const res = await fetch("http://localhost:5000/api/hire", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Application submitted successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          domains: [],
          skills: "",
          message: "",
          resume: null,
        });

        // Reset file input manually
        document.getElementById("resumeInput").value = "";
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="hireformpage">
      <h2 className="formtitle">Hire Top Developers</h2>
      <p className="formsubtitle">Tell us what you’re looking for</p>

      <form className="hireform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position Applying For"
          value={formData.position}
          onChange={handleChange}
          required
        />

        {/* Domains */}
        <div className="skillssection">
          <label className="skillslabel">Development Domains:</label>
          <div className="skillslist">
            {domainOptions.map((domain) => (
              <label key={domain} className="skillcheckbox">
                <input
                  type="checkbox"
                  checked={formData.domains.includes(domain)}
                  onChange={() => handleDomainChange(domain)}
                />
                {domain}
              </label>
            ))}
          </div>
        </div>

        <input
          type="text"
          name="skills"
          placeholder="Specific Skills (e.g. React, Node.js, AWS)"
          value={formData.skills}
          onChange={handleChange}
          required
        />

        {/* Resume Upload */}
        <div className="fileupload">
          <label className="uploadlabel">Upload Resume (PDF/DOCX):</label>
          <input
            id="resumeInput"
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Cover Letter / Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default HireForm;
