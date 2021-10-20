import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div className="header-container ">

            <>
                <Navbar bg="white" className="fixed-top" >
                    <Container>

                        <Navbar.Brand to="/services" >
                            <img
                                src={logo}
                                width="100%"
                                height="100"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <div className="menu">
                            <Nav className="me-auto">
                                <NavLink className="px-4" as={Link} to="/services">SERVICES</NavLink>
                                <NavLink className="px-4" as={Link} to="/doctors">DOCTORS</NavLink>
                                <Nav.Link className="px-4" as={Link} to="/appointment">APPOINTMENT</Nav.Link>

                            </Nav>
                        </div>


                        <Navbar.Text>
                            <a className="text-secondary text-decoration-none fw-bolder fs-6" href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                        {
                            !user?.email &&
                            <Link to="/login"><Button className="btn-regular" variant="white">
                                Sign in
                                <span ><i className="fas fa-sign-in-alt fs-5 ps-2"></i></span>
                            </Button>{' '}</Link>

                        }
                        {
                            user?.email &&
                            <span ><Button onClick={logOut} className="btn-regular" variant="white">
                                Sign out
                                <span ><i class="fas fa-sign-out-alt fs-5 ps-2"></i></span>
                            </Button>{' '}</span>
                        }
                        <Link to="/signup"><Button className="btn-regular" variant="white">
                            Sign up
                            <span ><i className="fas fa-user-plus fs-6 ps-2"></i></span>
                        </Button>{' '}</Link>


                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Header;