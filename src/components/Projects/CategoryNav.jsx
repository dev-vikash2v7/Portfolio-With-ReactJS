import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaMobile, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";


const CategoryNav = ({ categories }) => {
  const getCategoryIcon = (link) => {
    switch (link.toLowerCase()) {
      case "reactnative":
        return <FaMobile className="category-icon" />;
      case "mern":
        return <FaCode className="category-icon" />;
      case "reactjs":
        return <FaReact className="category-icon" />;
      case "nodejs":
        return <FaNodeJs className="category-icon" />;
      case "django":
        return <FaDatabase className="category-icon" />;
      case "nextjs":
        return <RiNextjsFill className="category-icon" />;
      
      case "ai":
        return <FaRobot className="category-icon" />;
      case "pythonfullstack":
        return <FaPython className="category-icon" />;
      default:
        return <FaCode className="category-icon" />;
    }
  };

  const scrollToCategory = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Container className="category-nav-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <div className="category-nav">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-item"
                onClick={() => scrollToCategory(category.link)}
              >
                <div className="category-icon-wrapper">
                  {getCategoryIcon(category.link)}
                </div>
                <span className="category-name">{category.category}</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryNav;
