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

const CategoryNav = ({ categories, onCategoryClick }) => {
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "react native projects":
        return <FaMobile className="category-icon" />;
      case "mern stack projects":
        return <FaCode className="category-icon" />;
      case "reactjs projects":
        return <FaReact className="category-icon" />;
      case "nodejs projects":
        return <FaNodeJs className="category-icon" />;
      case "python projects":
        return <FaPython className="category-icon" />;
      case "django projects":
        return <FaDatabase className="category-icon" />;
      case "nextjs project":
        return <RiNextjsFill className="category-icon" />;
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
                  {getCategoryIcon(category.category)}
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
