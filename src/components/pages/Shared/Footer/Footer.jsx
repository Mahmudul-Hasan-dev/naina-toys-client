import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import logo from '../../../../assets/logo.png'
import { FaLocationDot, FaPhone,FaEnvelope, FaFacebook, FaInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-light '>
           
           <Container className='fluid'>
           
                <Row>
                <Col>
                    <img src={logo}  width="200" height="200"/> 
                   
                </Col>
                    <Col className='pt-5 fs-5'>
                        <p><FaLocationDot /> 10, Dhaka, Bangladesh</p>
                        <p> <FaPhone /> +8801210987456</p>
                        <p> <FaEnvelope /> contact@naina-toys.com</p>
                    </Col>
                    <Col className='pt-5 fs-1'>
                        <h3>Follow us </h3>
                    <FaFacebook /> <FaInstagram /> <FaSquareXTwitter /> <FaSquareYoutube />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5 className='text-center '>Naina Toys &copy; 2024 All rights reserved.</h5></Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Footer;