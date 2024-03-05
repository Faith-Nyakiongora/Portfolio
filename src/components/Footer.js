import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";
// import github_icon from "../Assets/githubicon.png";
// import linkedin_icon from "../Assets/linkedin.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="copywrite">
          <p>Copyright © {year} Faith Nyakiongora. </p>
        </Col>
        <Col>
          <p>Developed by yours truly</p>
        </Col>
      </Row>
    </Container>
    // <div className="footer">
    //   <div>
    //     <a href="https://github.com/Faith-Nyakiongora#hi--im-faith-nyakiongora">
    //       <img src={github_icon} alt="github icon" />
    //     </a>
    //     <a href="https://www.linkedin.com/in/faith-nyakiongora-806888112/">
    //       <img src={linkedin_icon} alt="linkedin icon" />
    //     </a>
    //   </div>
    //   <p> &copy; https://faith-nyakiongora-portfolio.netlify.app/</p>
    // </div>
  );
}

export default Footer;
