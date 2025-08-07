import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row ,Col} from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Row>
          <Col lg={12} className="text-center mb-2">
            <h2 className="stats-section-title">
              <AiFillGithub className="stats-icon" />
              GitHub Activity
              <span className="stats-emoji">📊</span>
            </h2>
            <p className="stats-section-subtitle">
              My coding journey and contributions over time
            </p>
          </Col>
        </Row>



        <Row className="github-stats-grid">

        <Row style={{display: "flex", justifyContent: "center", alignItems: "center" }} >

          <Col lg={6} md={6} className="stats-card-wrapper">
            <div className="stats-card">
              <div className="stats-card-header">
                <h4>GitHub Statistics</h4>
                <p>Overall repository statistics and contributions</p>
              </div>
              <div className="stats-image-container">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=dev-vikash2v7&theme=radical&show_icons=true" 
                  alt="GitHub Statistics" 
                  className="stats-image"
                />
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} className="stats-card-wrapper">
            <div className="stats-card">
              <div className="stats-card-header">
                <h4>Streak Stats</h4>
                <p>GitHub contribution streak and activity</p>
              </div>
              <div className="stats-image-container">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=dev-vikash2v7&theme=tokyonight" 
                  alt="GitHub Streak" 
                  className="stats-image"
                />
              </div>
            </div>
          </Col>
        </Row>


<Row>
          <Col lg={6} md={5} className="stats-card-wrapper">
            <div className="stats-card">
              <div className="stats-card-header">
                <h4>Top Languages</h4>
                <p>Most used programming languages</p>
              </div>
              <div className="stats-image-container">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=dev-vikash2v7&theme=radical&layout=compact&hide=Jupyter%20Notebook" 
                  alt="Top Languages" 
                  className="stats-image"
                />
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} className="stats-card-wrapper">
            <div className="stats-card">
              <div className="stats-card-header">
                <h4>Language Stats</h4>
                <p>Detailed language usage statistics</p>
              </div>
              <div className="stats-image-container">
                <img 
                  src="https://github-readme-stats.vercel.app/api/wakatime?username=mindwrapper&custom_title=Language%20Stats&layout=compact&theme=tokyonight" 
                  alt="Language Statistics" 
                  className="stats-image"
                />
              </div>
            </div>
          </Col>
          </Row>

        </Row>
      

        <Row >
          <Col lg={12} md={12} className="stats-card-wrapper">
            <div className="stats-card productivity-card">
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Profile<strong className="purple"> Details</strong>
      </h1>

              <div className="stats-image-container">
                <img 
                  src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=dev-vikash2v7&theme=monokai" 
                  alt="Profile Details" 
                  className="stats-image"
                />
              </div>
            </div>
          </Col>
        </Row>

<Col lg={12} md={12} className="stats-card-wrapper" style={{backgroundColor:'#1b1429'  , padding:'20px'}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="stats-image-container">
      <GitHubCalendar
        username="dev-vikash2v7"
        blockSize={18}
        blockMargin={5}
        fontSize={16}
        />
        </div>
      </Col>

        
    </Row>
  );
}

export default Github;
