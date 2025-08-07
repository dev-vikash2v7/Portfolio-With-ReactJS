import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../components/Home/home-main.svg";
import Type from "../components/Home/Type";
import AboutCard from "../components/About/AboutCard";
import Github from "../components/Home/Github";
import Techstack from "../components/Home/Techstack";
import Toolstack from "../components/Home/Toolstack";

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
         <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VIKASH VERMA</strong>
              </h1>

            

              <Row style={{ justifyContent: "center" , paddingLeft:"20px"}}>
   <AboutCard/>
</Row>  

</Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <div style={{ padding: 10, textAlign: "left" }}>
                <Type />
              </div>

              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>

      <Container>
        
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>


        
      <Container className="github-stats-section">
        <Github />
        </Container>


  
      </Container>
    </Container>
  );
}
export default Home;
