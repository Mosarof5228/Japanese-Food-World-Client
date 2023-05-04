import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar }
    from 'react-bootstrap';
import './TopNav.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../Home/ActiveLink/ActiveLink';

const TopNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container className=' py-3 px-4 rounded topNav' >
                <Navbar.Brand href="#home" className='fw-bold'>Chinese Food World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-decoration-none">
                        <Link to='/'>Home</Link>
                        <Link to="/blog" className='ms-4'>Blog</Link>
                    </Nav>
                    <Nav>

                        {
                            user ? <div>
                                <img className='rounded-circle' style={{ height: "45px", width: "45px" }} title={user.displayName} src={user.photoURL} alt="" />
                                <Button className='ms-2' onClick={handleLogout}>Logout</Button>
                            </div> :
                                <Link to='/login'>Login</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;