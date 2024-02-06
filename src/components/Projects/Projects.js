import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import constant from './constant'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

{constant.projects.map(project =>(

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              skills={project.skills}
            />
          </Col>

))}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
