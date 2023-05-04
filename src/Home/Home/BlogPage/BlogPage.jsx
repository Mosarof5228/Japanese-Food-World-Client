import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../../shared/Footer/Footer';
import './BlogPage.css'
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const BlogPage = () => {
    const ref = React.createRef();

    return (

        <div  >
            <div className='text-center mb-2'>
                <h4>Click pdf button for download</h4>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <Container ref={ref} className='blog-page p-4 rouded '>

                <h5>1. Differences between controlled and uncontrolled components are:</h5>
                <p>
                    A. Data flow: Controlled components rely on the state of the component to control the value of the input. Uncontrolled components rely on the DOM to handle the input value.
                </p>
                <p>
                    B. Change handling: With controlled components, any changes to the value of the input must go through a change event handler. With uncontrolled components, changes are handled directly by the DOM
                </p>
                <p>
                    C. Data access: With controlled components, the value of the input can be accessed directly from the component's state. With uncontrolled components, the value must be accessed using a ref on the input element.
                </p>
                <h5>
                    2. How to validate React props using PropTypes?
                </h5>
                <p>React PropTypes is a library that allows you to define the expected types for the props of a React component. PropTypes helps you catch errors caused by incorrect data types or missing required props at runtime, making it easier to debug your application.</p>

                <h5>3. Tell us the difference between nodejs and express js.?</h5>
                <p>

                    Node.js is an open-source server-side platform that allows developers to build scalable and high-performance network applications using JavaScript. Express.js, on the other hand, is a web framework for Node.js that provides a set of tools and features for building web applications and APIs.
                </p>

                <h5>4. What is a custom hook, and why will you create a custom hook?</h5>
                <p>
                    A custom hook is a reusable function in React that encapsulates a specific behavior or logic that can be shared across multiple components. Custom hooks allow you to abstract away complex logic and provide a cleaner and more reusable codebase.

                    In React, hooks are functions that allow you to use state and lifecycle methods in functional components. Custom hooks are just functions that use hooks internally and return a stateful value or a set of values.</p>
                <Footer></Footer>
            </Container>
        </div>

    );
};

export default BlogPage;