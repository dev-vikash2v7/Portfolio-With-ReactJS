import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          Greetings! I'm <span className="purple">Vikash Verma </span>
          hailing from the lake city of <span className="purple"> Bhopal, India.</span>
            <br />
            <br />

            I am currently in my third year, passionately pursuing a Bachelor's Degree in <span className="purple"> Computer Science & Engineering</span> at the esteemed <span className="purple">Oriental Institute of Science and Technology</span> (OIST), Bhopal, affiliated with RGPV University.

            <br />
            <br />

            I am actively seeking a challenging role as a <span className="purple">Full Stack Web Developer</span>, proficient in MERN stack, or as an <span className="purple">Android Developer</span> adept in React Native. 
            <br />
            
            My goal is to leverage and enhance my skills in crafting efficient and user-friendly applications.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
