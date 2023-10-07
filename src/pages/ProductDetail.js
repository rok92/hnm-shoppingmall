import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])
  return (
    <Container>
      <Row>
        <Col className='img_container'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='product_letter'>{product?.title}</div>
          <div className='product_letter'>₩{product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          <div className='dropdown_p'>{product?.choice ? "Conciuos Choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Select Size
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 && product.size.map((item) => (<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="danger">Add</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail