import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            I am from <span className="purple">Bhopal, Madhya Pradesh</span>.  I specialize in full-stack development, with hands-on experience during multiple internships .

            <br />
            <br />

            I have recently completed my Bachelor Of Technology (B.Tech) Degree in <span className="purple">Computer Science & Engineering</span> from the <span className="purple">Oriental Institute of Science and Technology (OIST)</span>, Bhopal, affiliated with RGPV University.

            <br />
            <br />

        
            I've contributed to real-world projects during my paid internships, where I worked on <span className="purple">Full Stack Web Application , React Native  mobile apps, REST APIs, Firebase  & Whatsapp integration, and DevOps & Version Control like AWS  , Git & Github, etc.</span>

            <br />
            <br />

       
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
