import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShopCategory.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Soft = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://naina-toys-server.vercel.app/soft`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='soft-container'>
            {
                items.slice(0, 2).map(item =>

                    <Container fluid='md'>
                        <Row>
                            <Col xs={6} md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.picture} rounded height={300} />
                                    <Card.Body>
                                        <Card.Title className='fs-2'>{item.toy_name}</Card.Title>
                                        <Card.Text>
                                            <h4>Prices: {item.price}</h4>
                                            <h5>
                                                <div className="d-flex align-items-center">
                                                    <span>Rating: {item.rating}</span>
                                                    <Rating style={{ maxWidth: 100 }}
                                                        value={Math.round(item.rating)} readOnly />
                                                </div>
                                            </h5>

                                        </Card.Text>
                                        <Link to={`/toy/${item._id}`}>

                                            <Button variant="primary">View Details</Button>

                                        </Link>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>






                )
            }
        </div>
    );
};

export default Soft;