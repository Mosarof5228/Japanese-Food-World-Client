import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login2 = () => {
    return (
        <Container>
            <div fluid className="d-flex align-items-center justify-content-center bg-primary" style={{ height: '100vh' }}>
                <div className="bg-white p-5 rounded-lg">
                    <h1 className="mb-4">Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login2;