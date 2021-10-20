import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, dept, img } = doctor;
    return (

        <Card className="shadow ">
            <Card.Img className="doc-img" variant="top" src={img} />
            <Card.Body>
                <Card.Title><h4 className="fw-bolder">{name}</h4></Card.Title>
                <Card.Text className="dept">
                    {dept}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Doctor;