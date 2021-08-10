import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/esm/Button';
import { useSelector } from 'react-redux';

const MainNavbar = () => {
  let history = useHistory();

  const GotoCart = () => {
    history.push(`/cart`);
  }

  const signOut = () => {
    localStorage.clear();
  }

  const cart = useSelector(state => state.cart)
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CodeMyMobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justifyContent-end">
          <Nav className="me-auto">
            <Link to="">
              <Button variant="primary" onClick={() => GotoCart()}>
                Cart <Badge bg="secondary">{cart?.cart?.length}</Badge>
              </Button>
              <Button variant="secondary" onClick={() => signOut()}>
                Sign Out
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MainNavbar
