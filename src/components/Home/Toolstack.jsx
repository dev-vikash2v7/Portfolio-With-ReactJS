import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiFirebase />
          <p className="tech-name">Firebase</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <BiLogoVisualStudio />
          <p className="tech-name">VS Code</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiPostman />
          <p className="tech-name">Postman</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <FaAws />
          <p className="tech-name">AWS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiVercel />
          <p className="tech-name">Vercel</p>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
