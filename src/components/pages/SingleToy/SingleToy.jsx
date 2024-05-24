import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const SingleToy = () => {
    useTitle('Toydetails')
    const toyDetails = useLoaderData();
    const {picture, toy_name, seller_name, seller_email, price, rating, available_quantity, description} = toyDetails
    return (
        <Container className='my-5'>
            <h1 className='text-center'>Toy Details Page</h1>
            <Card style={{ width: '22rem' }} className='mx-auto mt-5'>
        <Card.Img variant="top" src={picture}  />
        <Card.Body>
            <Card.Title className='fs-2'>{toy_name}</Card.Title>
            <Card.Text>
            <h4>Seller: {seller_name}</h4>
            <h5>Email: {seller_email}</h5>
            <h4>Price : {price}</h4>
            <h5>Rating: {rating}</h5>
            <h5>Quantity: {available_quantity}</h5>
            <p><span className='fs-4'>Description:</span> {description}</p>
            </Card.Text>
            
        </Card.Body>
    </Card>
        </Container>
    );
};

export default SingleToy;