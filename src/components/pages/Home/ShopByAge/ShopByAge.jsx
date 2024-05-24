import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const ShopByAge = () => {
    return (
        <Container fluid="md" className='fw-bold fs-3 my-5 text-center'>
            <Row>
                <Col>
                        <Card className="bg-light text-dark p-4">
                            <Card.Text>
                                    0-3 years
                            </Card.Text>
                        </Card>
                        
                </Col>
                <Col>
                        <Card className="bg-danger text-white p-4">
                            <Card.Text>
                            4-5 years
                            </Card.Text>
                        </Card>
                </Col>
                <Col>
                <Card className="bg-primary text-white p-4">
                            <Card.Text>
                            6-7 years
                            </Card.Text>
                        </Card>
                </Col>
                <Col>
                <Card className="bg-warning text-white p-4">
                            <Card.Text>
                            8-9 years
                            </Card.Text>
                        </Card>
                </Col>
                <Col>
                <Card className="bg-success text-white p-4">
                            <Card.Text>
                            10-11 years
                            </Card.Text>
                        </Card>
                </Col>
                <Col>
                <Card className="bg-info text-dark p-4">
                            <Card.Text>
                            12+ years
                            </Card.Text>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopByAge;