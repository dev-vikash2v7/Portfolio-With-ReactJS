import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiExpress,
  
} from "react-icons/si";

import { TbBrandReactNative , TbApi } from "react-icons/tb";

import { RiTailwindCssFill } from "react-icons/ri";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiHtml5 />
          <p className="tech-name">HTML5</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiCss3 />
          <p className="tech-name">CSS3</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiJavascript1 />
          <p className="tech-name">JavaScript</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiPython />
          <p className="tech-name">Python</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiReact />
          <p className="tech-name">React JS</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <TbBrandReactNative />
          <p className="tech-name">React Native</p>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiNodejs />
          <p className="tech-name">Node.js</p>
        </div>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiMongodb />
          <p className="tech-name">MongoDB</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiExpress />
          <p className="tech-name">Express</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <DiGit />
          <p className="tech-name">Git</p>
        </div>
      </Col>
     
  
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <SiMysql />
          <p className="tech-name">MySQL</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <TbApi />
          <p className="tech-name">REST API's</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-item">
          <RiTailwindCssFill />
          <p className="tech-name">Tailwind CSS</p>
        </div>
      </Col>
     
    </Row>
  );
}

export default Techstack;
