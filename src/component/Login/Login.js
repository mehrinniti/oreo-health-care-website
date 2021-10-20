import React from 'react';
import './Login.css';
import image from '../../images/login-page-img.png';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';
import useAuth from './../../Hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const redeirect = location.state?.from || '/services'

    const { signInUsingGoogle, userLogin, setIsLoading } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { Email, Password } = data;
        handleEmailLogin(Email, Password);
    };
    console.log(errors);

    const handleEmailLogin = (Email, Password) => {
        userLogin(Email, Password)
            .then(result => {
                history.push(redeirect);
            })
    }

    const googleLogin = () => {
        signInUsingGoogle()
            .then((result) => {

                history.push(redeirect)

            })
            .finally(() => setIsLoading(false));

    }

    return (
        <div>
            <Container>

                <Row className="g-0 login ">


                    <Col md={4}>
                        <img className="login-img" src={image} alt="" />
                    </Col>


                    <Col className="login-conteinar gs-0" md={{ span: 4, offset: 4 }}>
                        <img className="w-75" src={logo} alt="" />
                        <h3>Sign Into Your Account</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="my-5 mx-auto signup-form">

                            <Form.Label className="mb-2">Your Email (required)</Form.Label>
                            <input className="mb-4 py-2 signup-field login-box" type="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                            <Form.Label>Password  (required)</Form.Label>
                            <input className="mb-5 py-2 signup-field" type="password" {...register("Password", { required: true })} />

                            <Button onClick={signInUsingGoogle} className="w-75 btn-login btn-regular" variant="primary" type="submit"> Sign in </Button>
                        </form>


                        <div>------------------Or Signin with-----------------</div>
                        <br />
                        <Button onClick={googleLogin} className="w-100 bg-primary btn-regular" variant="primary" type="submit">
                            <i class="fab fa-google-plus-g me-2"></i> Google
                        </Button>

                        <p className="account">Don't have an account? <Link to="/signup">Register here</Link></p>
                    </Col>
                </Row>


            </Container>

        </div>
    );
};

export default Login;