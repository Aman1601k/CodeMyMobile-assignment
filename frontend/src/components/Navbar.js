import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/esm/Button';

const MainNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CodeMyMobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justifyContent-end">
          <Nav className="me-auto">
            <Link to="">
              <Button variant="primary">
                Cart <Badge bg="secondary">9</Badge>
                {/* <span className="visually-hidden">unread messages</span> */}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MainNavbar
