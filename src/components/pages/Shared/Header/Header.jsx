import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';
 import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProviders';

const Header = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                            alt=""
                            src={logo}
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            />{' '}
                            <span className='fs-1'>Naina Toys</span>
                        </Navbar.Brand>
                    
                    
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                          
                                <ActiveLink to="/">Home </ActiveLink>
                                <ActiveLink to="/all-toys">All Toys</ActiveLink>
                                { user &&
                                    <>
                                    <ActiveLink to="/my-toys">My Toys</ActiveLink>
                                    <ActiveLink to="/add-toys">Add A Toy</ActiveLink>
                               
                                    </>
                                }
                                <ActiveLink to="/blog">Blog</ActiveLink>
                                
                            </Nav>
                            <Nav>
                            { user &&
                               
                                <Image src={user.photoURL} title={user.displayName} roundedCircle height={'50px'} className='me-2' /> 
                    } 
                
                                { user ?
                            <Button onClick={handleLogOut} variant="dark">Logout</Button>  :
                           <Link to='/login'>
                            <Button variant="dark">Login</Button>
                           </Link>
                         } 
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;