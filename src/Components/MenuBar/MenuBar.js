import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/home">Sports Buzz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/news">News</Nav.Link>
          <Nav.Link as={Link} to="/cricket">Cricket</Nav.Link>
          <Nav.Link as={Link} to="/football">Football</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;