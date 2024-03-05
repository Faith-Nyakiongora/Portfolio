import React from "react";
import "../styles/Projects.css";
import { Card, Button } from "react-bootstrap";
import portfolio_image from "../Assets/portfolioimage.png";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="heading">
        <h1>
          <strong>My Recent Works</strong>
        </h1>
        <p style={{ fontSize: "20px" }}>
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <div className="center-card">
        <div className="col-lg-4">
          <Card className="transparent">
            <a
              href="https://faith-nyakiongora-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              <Card.Img variant="top" src={portfolio_image} />
              <Card.Body className="text-format">
                <Card.Title>My Portfolio Website</Card.Title>
                <Card.Text>
                  This is my personal website portfolio built with React and
                  bootstrap CSS. It showcases my projects, skills, and
                  experience. Feel free to explore and get in touch!
                </Card.Text>

                <a
                  href="https://github.com/Faith-Nyakiongora/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="external-link"
                >
                  <Button className="transparent-btn">Github</Button>{" "}
                </a>
              </Card.Body>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
