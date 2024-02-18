import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgSoftwareDownload, CgWebsite, CgYoutube } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ width: '100%', height: 'auto' }}/>

      <Card.Body>

        <Card.Title style={{fontWeight:'bold'}}> {props.title}</Card.Title>
        
        <Card.Text style={{ textAlign: "justify"  , fontWeight:'200' , marginTop:'10px' }}>
          {props.description}
        </Card.Text>

    <div style={{
      display:'flex',
      justifyContent:"space-around",
      position:'relative',
      bottom:0
    }}>
        <Button variant="primary" href={props.ghLink} target="_blank" className="icon_button">
          <BsGithub /> 
          {/* {props.isBlog ? "Blog" : "GitHub"} */}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        { props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            className="icon_button"
          >
            <CgWebsite className="icon" /> 
            {/* {"Demo"} */}
          </Button>
        )}

        { props.downloadLink && (
          <Button
            variant="primary"
            href={props.downloadLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            className="icon_button"
          >
            <CgSoftwareDownload className="icon"/> 
            {/* {"Download"} */}
          </Button>
        )}

        { props.youtubeLink && (
          <Button
            variant="primary"
            href={props.youtubeLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            className="icon_button"
          >
            <CgYoutube className="icon" size={20}/> 
            {/* {"Youtube"} */}
          </Button>
        )}
</div>



      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
