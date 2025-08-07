import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import CategoryNav from "../components/Projects/CategoryNav";
import constant from "../components/Projects/projects.json";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <CategoryNav categories={constant.allprojects} />

        <div className="projects-container">
          {constant.allprojects.map((topic, index) => (
            <div key={index} className="category-section">
              <h1 className="project_tech" id={topic.link}>{topic.category}</h1>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {topic.projects.map(project => (
                  <Col md={4} className="project-card" key={project.title}>
                    <ProjectCard
                      imgPath={project.imgPath}
                      title={project.title}
                      description={project.description}
                      ghLink={project.ghLink}
                      demoLink={project.demoLink}
                      skills={project.skills}
                      downloadLink={project.downloadLink}
                      youtubeLink={project.youtubeLink}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
