import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import github_icon from "../Assets/githubicon.png";
import linkedin_icon from "../Assets/linkedin.png";
import { MdOutlineMail } from "react-icons/md";
import "../styles/Navbar.css";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Fn.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/experience">Experience</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/Faith-Nyakiongora#hi--im-faith-nyakiongora">
              <img src={github_icon} alt="github icon" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/faith-nyakiongora-806888112/">
              <img src={linkedin_icon} alt="linkedin icon" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:faithnyakiongora@gmail.com">
              <MdOutlineMail size={28} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
