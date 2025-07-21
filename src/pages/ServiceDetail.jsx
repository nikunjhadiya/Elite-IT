import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "./Services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="service-detail-page">
        <h2>Service not found</h2>
        <Link to="/services" className="back-link">← Back to Services</Link>
      </div>
    );
  }

  // Main Topic: Custom descriptions for each service
  const customCaptions = {
    "mobile-app-development": `📱 We craft powerful, scalable mobile apps tailored for both Android and iOS platforms.
Our apps are performance-optimized, secure, and user-friendly.
From MVP to enterprise-level systems, we deliver end-to-end solutions.
We focus on intuitive interfaces, responsive design, and fast load times.
Integration with cloud, databases, and third-party APIs is seamless.
Our agile approach ensures rapid deployment and continuous improvement.
We use technologies like Flutter, React Native, and Swift.
Real-time testing guarantees a bug-free experience.
Apps are published to app stores with full support.
We also provide post-launch updates and analytics.
From startups to enterprises, we handle it all.
E-commerce, healthcare, logistics, and more—our apps fit all sectors.
User engagement and retention is our priority.
Security is built in, not bolted on.
Let us bring your app idea to life.`,

    "ui-ux-design": `🎨 We design intuitive, beautiful, and user-centered interfaces.
Our UX process starts with research and user personas.
Wireframes and prototypes ensure clarity and flow.
We focus on simplicity, accessibility, and usability.
Our designs adapt perfectly across all screen sizes.
We build emotion-driven user journeys.
Collaboration with development teams is seamless.
We use tools like Figma, Adobe XD, and Sketch.
Each element is crafted to reflect your brand.
We ensure fast load times through optimized assets.
Designs are tested for real-user feedback.
A/B testing helps refine the final output.
We focus on reducing drop-off and increasing engagement.
Pixel-perfect execution is our standard.
We design experiences that convert.`,

    "web-development": `💻 We build fast, secure, and scalable web applications.
Our stack includes React, Angular, Node.js, .NET, and PHP.
From landing pages to complex dashboards, we do it all.
We follow responsive and mobile-first design principles.
All sites are SEO-friendly and optimized for performance.
We ensure clean, modular code with best practices.
CMS and custom admin panels are built on request.
Third-party integrations are smooth and reliable.
We offer full-cycle development, from concept to launch.
Our codebase is maintainable and future-ready.
Security measures protect data and user privacy.
We support cloud hosting and continuous deployment.
We test across all modern browsers.
Our goal is speed, usability, and results.
We bring your ideas to life on the web.`,

    "software-testing": `🧪 Our QA team ensures your software is bug-free and reliable.
We offer manual and automated testing services.
Each feature is tested for usability and performance.
We detect edge cases and unexpected behavior early.
Regression testing ensures nothing breaks post-deployment.
Test cases are documented and version-controlled.
We support Selenium, Cypress, JMeter, and Postman.
Security, load, and compatibility testing are included.
CI/CD pipelines integrate with automated test scripts.
We test across devices, OS, and browsers.
Bugs are reported in detailed, actionable formats.
We work in sync with dev teams for fast fixes.
Testing is done continuously and iteratively.
We ensure your users enjoy a smooth experience.
Reliable software starts with strong QA.`,

    "cloud-solutions": `☁️ We help businesses migrate, manage, and optimize cloud infrastructure.
Our expertise spans AWS, Azure, and Google Cloud.
We design scalable cloud architectures for modern workloads.
Cost-efficiency and high availability are built-in.
We support serverless, containers, and microservices.
Cloud backups and disaster recovery are automated.
We monitor usage, performance, and security in real-time.
DevOps tools streamline CI/CD on cloud.
Identity and access management is enforced strictly.
Our team reduces downtime and cloud waste.
Hybrid and multi-cloud deployments are supported.
We build compliance-ready cloud environments.
From setup to management—we handle everything.
Cloud-native apps are our specialty.
Scale your business with the power of cloud.`,

    "devops-consulting": `⚙️ We bridge the gap between development and operations.
Our DevOps pipelines automate build, test, and deployment.
CI/CD best practices ensure rapid and safe releases.
Infrastructure as Code (IaC) ensures consistency.
Monitoring and logging enable fast incident response.
We help you adopt Kubernetes, Docker, and Terraform.
Security is integrated from day one (DevSecOps).
Version control and branching strategies are streamlined.
Environments are configured and deployed automatically.
Collaboration is improved with feedback loops.
We reduce manual effort through automation.
We train your teams on DevOps culture.
Cloud-native DevOps is our forte.
Faster time-to-market is our promise.
Achieve stability, speed, and agility with DevOps.`,

    "ai-ml-development": `🤖 We build intelligent systems powered by machine learning.
From predictive models to natural language processing, we do it all.
We train models using real-world, high-quality datasets.
AI solutions are tailored for your business needs.
We use TensorFlow, PyTorch, Scikit-learn, and OpenAI tools.
Data preprocessing ensures accurate outputs.
AI is integrated into web, mobile, and backend systems.
Chatbots, recommendation engines, and automation are common use cases.
We deploy models using scalable cloud services.
APIs are secured and optimized for performance.
We help visualize insights through dashboards.
Privacy and fairness are built into our models.
We work with structured and unstructured data.
Post-deployment support keeps models sharp.
We turn your data into actionable intelligence.`,

    "cybersecurity": `🛡️ We protect your systems from threats and breaches.
Our services include vulnerability assessment and penetration testing.
We implement firewalls, encryption, and secure protocols.
Data is protected with access control and monitoring.
We secure web apps, APIs, and cloud platforms.
Incident response plans are ready for emergencies.
Employee awareness training is also available.
Zero-trust architecture and MFA are enforced.
Security audits meet global standards (ISO, GDPR).
Code is scanned for security vulnerabilities.
We monitor real-time threats with advanced tools.
Backup and recovery plans ensure resilience.
We assist with compliance and governance.
Your business stays safe in the digital age.
Trust is built on strong cybersecurity.`,

    "it-consulting": `💡 We guide you in using tech to grow your business.
Our experts assess your current systems and challenges.
We create custom IT strategies aligned with your goals.
Digital transformation is at the core of our consulting.
We offer vendor-neutral, objective advice.
Our approach improves efficiency and reduces costs.
Cloud, security, DevOps, and AI are covered.
We help you select and implement the right tools.
Legacy modernization and system upgrades are included.
Change management is part of our roadmap.
We also support compliance and risk management.
You get tech plans that evolve with your business.
Workshops and training keep your team aligned.
Our goal: smart, future-ready IT.
Partner with us to stay ahead.`,
  };

  const customCaption = customCaptions[slug] || service.description;

  return (
    <div className="service-detail-page">
      <div className="hero-card">
        <div className="icon-large">{service.icon}</div>
        <h1>{service.title}</h1>
        <p className="caption" style={{ whiteSpace: "pre-line" }}>{customCaption}</p>
      </div>

      <Link to="/services" className="back-link">← Back to Services</Link>
    </div>
  );
};

export default ServiceDetail;
