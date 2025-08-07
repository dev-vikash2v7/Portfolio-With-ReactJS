import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaWhatsapp,
  FaStripe,
  
} from "react-icons/fa";
import { SiMongodb, SiFigma , SiFirebase } from "react-icons/si";

const Experience = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  const experiences = [
    {
      id: 1,
      title: "Application Developer",
      company: "ContractFlo Technologies Pvt. Ltd.",
      duration: "February 2025 – May 2025",
      period: "4 months",
      location: "Remote",
      projectUrl: "https://reallist.ai/",
      projectName: "Realist Real Estate SaaS",
      description: "Developed core components of the Realist real estate SaaS application using React Native and ReactJS along with Node.js and MongoDB.",
      achievements: [
        "Built cloud-based REST APIs for modules like property listings, user management, and transactions",
        "Collaborated with design teams to translate Figma designs into responsive and user-friendly interfaces",
        "Integrated WhatsApp Business API for real-time communication between client and owner"
      ],
      technologies: [
        { name: "React Native", icon: <FaMobile />, color: "#61DAFB" },
        { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "WhatsApp API", icon: <FaWhatsapp />, color: "#25D366" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" }
      ],
      type: "Contract"
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "RenoApp Pvt. Ltd.",
      duration: "March 2024 – June 2024",
      period: "3 months",
      location: "Remote",
      description: "Developed a Restaurant-centric cross-platform mobile app using React Native and Firebase.",
      achievements: [
        "Implemented Firebase for backend services like real-time database, user authentication, and push notifications"
      ],
      technologies: [
        { name: "React Native", icon: <FaMobile />, color: "#61DAFB" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
      ],
      type: "Internship"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CloudLumos Technology Pvt. Ltd.",
      duration: "October 2023 – January 2024",
      period: "4 months",
      location: "Remote",
      description: "Developed an e-commerce website using the MERN stack.",
      achievements: [
        "Integrated Stripe for secure online payments and user authentication"
      ],
      technologies: [
        { name: "ReactJS", icon: <FaReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Stripe", icon: <FaStripe />, color: "#6772E5" }
      ],
      type: "Internship"
    }
  ];

  useEffect(() => {
    // Animate cards on mount
    const timer = setTimeout(() => {
      setVisibleCards(experiences.map((_, index) => index));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}>
          My professional journey in software development
        </p>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`experience-card ${activeCard === index ? 'active' : ''} ${
                    visibleCards.includes(index) ? 'visible' : ''
                  }`}
                  onClick={() => handleCardClick(index)}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-line"></div>
                  </div>
                  
                  <Card className="experience-card-content">
                    <Card.Body>
                      <div className="experience-header">
                        <div className="experience-title-section">
                          <h3 className="experience-title">{exp.title}</h3>
                          <div className="company-info">
                            <FaBuilding className="company-icon" />
                            <span className="company-name">{exp.company}</span>
                          </div>
                        </div>
                        
                        <div className="experience-meta">
                          <Badge className="experience-type">{exp.type}</Badge>
                          <div className="duration-info">
                            <FaCalendarAlt className="duration-icon" />
                            <span>{exp.duration}</span>
                            <span className="period">({exp.period})</span>
                          </div>
                          <div className="location-info">
                            <FaMapMarkerAlt className="location-icon" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="experience-content">
                        <p className="experience-description">{exp.description}</p>
                        
                        {exp.projectUrl && (
                          <div className="project-link">
                            <a 
                              href={exp.projectUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="project-url"
                            >
                              <FaExternalLinkAlt />
                              <span>{exp.projectName}</span>
                            </a>
                          </div>
                        )}

                        <div className="achievements-section">
                          <h5>Achievements:</h5>
                          <ul className="achievements-list">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="technologies-section">
                          <h5>Technologies Used:</h5>
                          <div className="tech-stack">
                            {exp.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                className="tech-badge"
                                style={{ '--tech-color': tech.color }}
                              >
                                {tech.icon}
                                <span>{tech.name}</span>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
