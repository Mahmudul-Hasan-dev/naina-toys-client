import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import gif1 from '../../../../assets/gif/1.gif'
import gif3 from '../../../../assets/gif/3.gif'
import gif2 from '../../../../assets/gif/2.gif'

import about from '../../../../assets/about.jpg'


const About = () => {
    return (
        <div style={{backgroundColor:'aliceblue'}}>
           
            <Container className='py-5'>
                <Row>
                    <Col><img src={about} alt=""  width={300}/></Col>
                    <Col xs={8}>
                        
                        <h2>Animal Toys For Kids Of All Ages</h2>
                        <p className='mx-auto'>Suspendisse dignissim, velit sed mattis ultricies, urna sem auctor velit, convallis facilisis libero elit pellentesque metus. Curabitur porta dui sit amet ligula ullamcorper posuere. Pellentesque rutrum nulla vel tempus ullamcorper. Pellentesque lectus augue, pharetra vitae erat a, faucibus fermentum ex.</p>
                        <Button>All Toys</Button>
                    </Col>
                
                </Row>
      
            </Container>
            <CardGroup >
                <Card className='bg-info'>
                    <Card.Img variant="top" src={gif1} />
                    <Card.Body>
                    <Card.Title>
                        <span className='fs-1  fw-bold'>467+</span> <br />
                        Worldwide Stores
                    </Card.Title>
                    
                    </Card.Body>
                </Card>
                <Card className='bg-light'>
                    <Card.Img variant="top" src={gif3} />
                    <Card.Body>
                         <Card.Title>
                            <span className='fs-1  fw-bold'>367k</span> <br />
                            Clients Served
                        </Card.Title>
                    
                    </Card.Body>
                </Card>
                <Card className='bg-info'>
                    <Card.Img variant="top" src={gif2} />
                    <Card.Body>
                    <Card.Title>
                        <span className='fs-1  fw-bold'> 5/5</span> <br />
                        Product Ratings
                    </Card.Title>
                    
                    </Card.Body>
                </Card>
                <Card className='bg-light'>
                    <Card.Img variant="top" src={gif3} />
                    <Card.Body>
                    <Card.Title>
                        <span className='fs-1  fw-bold'>10K</span> <br />
                        Employees
                    </Card.Title>
                    
                    </Card.Body>
                </Card>
                <Card className='bg-info'>
                    <Card.Img variant="top" src={gif1}/>
                    <Card.Body>
                    <Card.Title>
                        <span className='fs-1  fw-bold'>88M</span> <br />
                        Products Sold
                    </Card.Title>
                    
                    </Card.Body>
                </Card>
      
            </CardGroup>
        </div>
    );
};

export default About;