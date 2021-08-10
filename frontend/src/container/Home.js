import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
import { addToCart, getallproducts, getSingleproduct } from '../actions'
import {useDispatch, useSelector} from 'react-redux'
import MainNavbar from '../components/Navbar'
import { useHistory } from "react-router-dom";

const Home = () => {
  const product = useSelector(state => state.product)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSingleProduct = (id) => {
    dispatch(getSingleproduct(id))
    history.push(`/product/:${id}`);
  }

  const AddToCart = (id) => {
    dispatch(addToCart(id,auth.user._id))
  }

  useEffect(() => {
    dispatch(getallproducts())
  }, [])

  return (
    <>
    <MainNavbar/>
    <Container style={{display: 'flex', flexWrap: 'wrap'}}>
    {
      product?.products?.map((product) => {
        return (
            <Card style={{ width: '18rem' , margin: '10px'}}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button onClick={() => handleSingleProduct(product._id)} variant="primary">View</Button>
              <Button style={{marginLeft:"5px"}} onClick={() => AddToCart(product._id)} variant="secondary">Add to Cart</Button>
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