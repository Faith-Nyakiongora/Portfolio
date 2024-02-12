import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cover_backg from "../Assets/canvabackg.png";
import background_cover from "../Assets/background.jpg";
import girl_ill from "../Assets/girlillustration.png";
import "../styles/Home.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <img
            src={background_cover}
            alt="background "
            className="canvas-background"
          />
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Faith Nyakiongora</strong>
              </h1>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={girl_ill}
                alt="girl illustration"
                className="girl-image"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Faith-Nyakiongora#hi--im-faith-nyakiongora"
                    target="_blank" //opens new browser tab on the link
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/faith-nyakiongora-806888112/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    // <div className="Home">
    //   <div className="col-md-5">
    //     <img src={girl_ill} alt="girl illustration" className="girl-image" />
    //   </div>

    //   <img
    //     src={background_cover}
    //     alt="background "
    //     className="canvas-background"
    //   />
    //   <div className="about">
    //     <h2>Hi, My Name is Faith</h2>
    //     <div className="prompt">
    //       <p>I am a Software Developer</p>
    //     </div>
    //   </div>
    //   <div className="skills"></div>
    // </div>
  );
}

export default Home;
