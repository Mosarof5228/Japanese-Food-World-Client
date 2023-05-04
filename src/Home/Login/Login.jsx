import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Footer from '../../shared/Footer/Footer';
import './Login.css'
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleWithGoogle = () => {
        console.log('google sign in with coming')
    }
    return (
        <Container className='login-section'>
            <div className='w-50  mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3 '>
                <Form onSubmit={handleLogin} className="mt-0">
                    <h2>Please Login</h2>
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
                    <br /><br />
                    <div className='d-flex flex-column align-items-center gap-2 justify-content-center'>
                        <Button onClick={handleWithGoogle} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Sign in With Google</Button>
                        <Button variant="outline-primary"> <FaGithubSquare></FaGithubSquare> Sign in With Github</Button>
                    </div>
                </Form>

            </div>
            <Footer></Footer>
        </Container>
    );
};

export default Login;