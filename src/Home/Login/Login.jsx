import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container className='w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3 px-5 py-5 '>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignIn
                </Button>
                <br></br>
                <Form.Text className="text-muted">
                    News in This website Please <Link to='/registration'>SignUp</Link>
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Login;