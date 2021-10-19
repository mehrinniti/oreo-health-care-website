import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="Appointment">
            <h2 className="fw-bold">Sign Up</h2>
            {/* <Form className="my-5 mx-auto appointment-form">

                <label className="mb-2">Your First Name (required)</label>
                <Form.Control className="mb-4" type="text" required />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-2">Your Email (required)</Form.Label>
                    <Form.Control className="mb-4" type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-5" type="password" required />
                </Form.Group>


                <Button className="w-75 btn-appointment" variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" placeholder="Password" {...register("Password", { required: true })} />

                <input type="submit" />
            </form>


        </div>
    );
};

export default SignUp;