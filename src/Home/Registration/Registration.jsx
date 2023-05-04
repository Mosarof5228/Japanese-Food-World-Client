import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
// import { getAuth } from "firebase/auth";


// const auth = getAuth();
const Registration = () => {
    const { createUser, user } = useContext(AuthContext);
    console.log(user)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, url)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateImage(createdUser, name, url)

                console.log(createdUser);
            })
            .catch(error => {
                console.log(error)
            })

    }

    const updateImage = (user, name, url) => {
        updateProfile(user, {
            displayName: name, photoURL: url
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });



    }


    return (
        <Container className='w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3'>
            <h2>Please Register</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter Photo Url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
                <br></br>
                <Form.Text className="text-muted">
                    Already Have an account? Please <Link to='/login'>SignIn</Link>
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Registration;