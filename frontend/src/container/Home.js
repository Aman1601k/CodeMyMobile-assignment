import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { getallproducts } from '../actions'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallproducts())
  }, [])
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CodeMyMobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justifyContent-end">
          <Nav className="me-auto">
            <Link to="">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container style={{display: 'flex', flexWrap: 'wrap'}}>
    {
      product?.products?.map((product) => {
        return (
            <Card style={{ width: '18rem' , margin: '10px'}}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
          )
        }
        )
      }
    </Container>
    </>
  )
}

export default Home