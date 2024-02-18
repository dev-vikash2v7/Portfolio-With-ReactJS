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

<div>


<h1 className="project_tech">ReactJS Projects</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{constant.projects["ReactJS"].map(project =>(

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

</div>

<div>


<h1 className="project_tech">React Native Projects</h1>

<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{constant.projects["React Native"].map(project =>(


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              downloadLink={project.downloadLink}
              youtubeLink={project.youtubeLink}
              skills={project.skills}

            />
          </Col>

))}



        </Row>
        </div>

      </Container>
    </Container>
  );
}

export default Projects;
