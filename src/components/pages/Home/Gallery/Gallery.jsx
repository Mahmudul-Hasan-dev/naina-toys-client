import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css'


const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://naina-toys-server.vercel.app/toys`)
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, [])
  return (

    <div className='gallery-container'>

      {
        photos.map(photo =>

          <Container className='py-5'>

            <Row >

              <Col key={photo._id}>
                <Card>
                  <Card.Img variant="top" src={photo.picture} />
                  <Card.Body>
                    <Card.Title>{photo.toy_name}</Card.Title>

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

export default Gallery;