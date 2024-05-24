import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../../../providers/AuthProviders';
import useTitle from '../../../../hooks/useTitle';

const Login = () => {
useTitle('login')
    const { signIn,googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError(' ');
            navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.error(error.message);
                setError('wrong credential')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn() 
        .then(result => {
            const loggerInUser = result.user;
            console.log(loggerInUser);
            setError(' ');
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log('error', error.message);
        })
    }



    return (
        <Container className='w-50 my-5 mx-auto loginForm px-5 py-4 '>
            <h1 className='text-center text-primary '>Please Login</h1>
        <Form onSubmit={handleLogin} className='px-3 pt-3' >
           <Form.Group className="mb-3 " controlId="formBasicEmail">
               <Form.Label className='fw-bold fs-4'>Email address</Form.Label>
               <Form.Control type="email" name="email" placeholder="Enter email" />
           </Form.Group>

           <Form.Group className="mb-3 " controlId="formBasicPassword">
               <Form.Label className='fw-bold fs-4'>Password</Form.Label>
               <Form.Control type="password" name="password"placeholder="Password" />
           </Form.Group>
           
           <div className="d-grid mt-4">
            <Button className='mb-4' variant="primary" type="submit">
                Login
            </Button>
           </div>
           <br />
           <Form.Text  className="text-secondary fs-5">
           Don't Have an Account? <Link to="/register">Register</Link>
           </Form.Text >    

       </Form>
       <hr />
       
      <Button onClick={handleGoogleSignIn} className=' mb-2' size="lg" variant="outline-dark"><FaGoogle  /> Log in with Google</Button>

       <br />
       <Form.Text className="text-danger">
       {error}
       </Form.Text>
       
      
   </Container>
    );
};

export default Login;