import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="Appointment page">
            <h3>Appointment Form</h3>
            <Form className="my-5 mx-auto appointment-form">

                <label className="mb-2">Select a Department</label>
                <Form.Select className=" mb-4" aria-label="Default select example">
                    <option>Gynacelogy</option>
                    <option value="1">Blood Bank</option>
                    <option value="2">Ophthalmology</option>
                    <option value="3">Oncology</option>
                </Form.Select>


                <Row className="g-3 mb-4">
                    <Col md>
                        <label className="mb-2">Your First Name (required)</label>
                        <Form.Control type="text" required />
                    </Col>
                    <Col md>
                        <label className="mb-2">Your Last Name (required)</label>
                        <Form.Control type="text" required />
                    </Col>

                </Row>

                <Row className="g-3 mb-4">
                    <Col md>
                        <label className="mb-2" >Date of Birth (required)</label><br />
                        <input className="date-of-birth" type="date" name="" id="" required />
                    </Col>
                    <Col md>
                        <label className="mb-2">Sex (required)</label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    required
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    required
                                />
                                <Form.Check
                                    inline
                                    label="Child"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    required
                                />
                            </div>
                        ))}
                    </Col>
                </Row>

                <Row className="g-3 mb-4">
                    <Col md>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="mb-2">Your Email (required)</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                    </Col>
                    <Col md>
                        <label className="mb-2">Phone (required)</label>
                        <Form.Control type="text" required />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col md>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mb-2">Your Message </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button className="w-75 btn-appointment" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Appointment;