import React from "react";
import { Nav,Navbar, Container } from "react-bootstrap";

const ToggleNav = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className= "navbar-brand">TF</Navbar.Brand>
        <Nav>
        <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#Skills">Skills</Nav.Link>
      <Nav.Link href="#Projects">Portfolio</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default ToggleNav;
