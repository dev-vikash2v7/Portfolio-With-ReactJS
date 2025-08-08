import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgSoftwareDownload, CgWebsite, CgYoutube } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img" 
        className="card-img-top"
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Card.Text>
          {props.description}
        </Card.Text>

        {props.skills && (
          <div className="skills-container">
            {props.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="project-buttons">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank" 
            className="icon_button"
          >
            <BsGithub /> 
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="icon_button"
            >
              <CgWebsite className="icon" /> 
            </Button>
          )}

          {props.downloadLink && (
            <Button
              variant="primary"
              href={props.downloadLink}
              target="_blank"
              className="icon_button"
            >
              <CgSoftwareDownload className="icon"/> 
            </Button>
          )}

          {props.youtubeLink && (
            <Button
              variant="primary"
              href={props.youtubeLink}
              target="_blank"
              className="icon_button"
            >
              <CgYoutube className="icon" /> 
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
