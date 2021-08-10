import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  const products = [{id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'},
              {id: '12112121' , name: 'AMan' , price:"1212" , description:'sfjbdjfsdjfhddf'}]
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CodeMyMobile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="">Home</Link>
            <Link to="">Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container style={{display: 'flex',margin:'0 10px' , flexWrap: 'wrap'}}>
    {
      products.map((product) => {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=6&m=184276818&s=612x612&w=0&h=Fm2-2w98ahP4jUkj3UjgPa-dIqEHlRrsTxdA_a-Cclk=" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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