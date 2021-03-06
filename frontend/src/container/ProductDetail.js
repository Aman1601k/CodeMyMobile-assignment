import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image'
import MainNavbar from '../components/Navbar'
import Figure from 'react-bootstrap/Figure'
import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'

const ProductDetail = () => {
    const product = useSelector(state => state.product)
    return (
        <>
        <MainNavbar/>
        <Container className="d-flex justify-content-center">
            <Figure className="mt-5">
                <Figure.Image
                    width={800}
                    height={500}
                    alt="171x180"
                    src={product.singleProduct.image}
                />
                <h2 className="mt-3 text-center" >
                   {product.singleProduct.title}
                </h2>

                <p>
                    <h6>Description :</h6>    {product.singleProduct.description}
                </p>
                <h4 className="mt-3">
                    Price : <Badge bg="secondary">{product.singleProduct.price}</Badge>
                </h4>
            </Figure>
        </Container>
        </>
    )
}

export default ProductDetail
