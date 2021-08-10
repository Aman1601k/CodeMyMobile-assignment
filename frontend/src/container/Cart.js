import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import MainNavbar from '../components/Navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/esm/Badge';

const Cart = () => {
    const cart = useSelector(state => state.cart)

    return (
        <>
        <MainNavbar/>
        <Container style={{display: 'flex', flexWrap: 'wrap'}}>
            {
            cart?.cartDetails?.map((product) => {
                return (
                    <Card style={{ width: '18rem' , margin: '10px'}}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <h4 className="mt-3">
                        Price : <Badge bg="secondary">{product.price}</Badge>
                    </h4>
                    <Button variant="primary">Deliever</Button>
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

export default Cart
