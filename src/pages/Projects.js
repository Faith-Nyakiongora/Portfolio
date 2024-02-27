import React from "react";
import { Card, Button } from "react-bootstrap";
import portfolio_image from "../Assets/portfolioimage.png";

function Projects() {
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-lg-4">
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={portfolio_image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          {/* <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={portfolio_image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
