import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { handleEmailLogin } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { Name, Email, Password } = data;
        handleEmailLogin(Name, Email, Password);
    };
    console.log(errors);
    return (
        <div className="signup-container">
            <div className="Appointment">
                <h2 className="fw-bold">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="my-5 mx-auto signup-form">

                    <label className="mb-2">Your Name (required)</label>
                    <input className="mb-4 py-2 signup-field" type="text" {...register("Name", { required: true, maxLength: 100 })} />

                    <Form.Label className="mb-2">Your Email (required)</Form.Label>
                    <input className="mb-4 py-2 signup-field" type="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                    <Form.Label>Password  (required)</Form.Label>
                    <input className="mb-5 py-2 signup-field" type="password" {...register("Password", { required: true })} />

                    <input className="w-75  btn-submit" type="submit" />
                </form>

                <hr className="w-75 mx-auto" />

                <p className="account mb-5">Already have an account? <Link to="/login">Sign in</Link></p>

            </div>
        </div>
    );
};

export default SignUp;