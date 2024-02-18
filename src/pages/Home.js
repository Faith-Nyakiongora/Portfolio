import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import background_cover from "../Assets/background.jpg";
import girl_ill from "../Assets/girlillustration.png";
import "../styles/Home.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiJavascript, SiFlask } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";

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

          {/* Introduction Section........... */}
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏾
                </span>
              </h1>

              <h1 style={{ paddingBottom: 50 }} className="heading-name">
                I'M
                <strong className="main-name"> Faith Nyakiongora</strong>
              </h1>

              <h1 style={{ paddingLeft: 45 }} className="title">
                {" "}
                A Sofware Developer
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="girl-image">
              <img
                src={girl_ill}
                alt="girl illustration"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          {/* About Me Section */}
          <Row>
            <Col md={12} className="home-about" style={{ paddingTop: 100 }}>
              <h1>ABOUT ME</h1>
              <p>
                I am a passionate software developer learning to build web
                applications using modern technologies. I love learning new
                things and solving complex problems.
              </p>
              <p>
                Outside of coding, I enjoy art, music, travel, adventure and
                spending time with family and friends.
              </p>
            </Col>
          </Row>

          {/* Stacks Section ...................*/}
          <Row>
            <Col md={12} className="home-stacks">
              <h1>MY STACKS</h1>
              <p>Here are some of the technologies I work with:</p>
              <div className="stack-icons">
                <FaReact className="stack-icon" />
                <SiJavascript className="stack-icon" />
                <IoLogoHtml5 className="stack-icon" />
                <IoLogoCss3 className="stack-icon" />
                <IoLogoPython className="stack-icon" />
                <SiFlask className="stack-icon" />
              </div>
              <ul className="stack-list">
                <li>React</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Flask</li>
              </ul>
            </Col>
          </Row>

          {/* Find Me Section.................. */}
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
  );
}

export default Home;
