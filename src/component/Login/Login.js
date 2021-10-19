import React from 'react';
import './Login.css';
import image from '../../images/login-page-img.png';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import useAuth from './../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    // console.log(signInUsingGoogle);
    return (
        <div>
            <Container>

                <Row className="g-0 login ">


                    <Col md={4}>
                        <img className="login-img" src={image} alt="" />
                    </Col>


                    <Col className="login-conteinar" md={{ span: 4, offset: 4 }}>
                        <img className="w-75" src={logo} alt="" />
                        <h3>Sign Into Your Account</h3>

                        <Form className="my-5 login-form">

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="text-start" type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button className="w-100 btn-regular" variant="white" type="submit">
                                Sign in
                            </Button>


                        </Form>
                        <br /><br /><br />
                        <div>------------------Or Signin with-----------------</div>
                        <br /><br /><br />
                        <Button onClick={signInUsingGoogle} className="w-100 bg-primary btn-regular" variant="primary" type="submit">
                            <i class="fab fa-google-plus-g me-2"></i> Google
                        </Button>

                        <p className="account">Don't have an account? <a href="/register">Register here</a></p>
                    </Col>
                </Row>


            </Container>

        </div>
    );
};

export default Login;