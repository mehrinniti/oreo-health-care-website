import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, image, description1, description2 } = service;

    return (
        <div className="service shadow  bg-body rounded">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{description1}</p>
            <Link to={`/healthcare/${id}`}><Button className="details-btn" variant="white"> View More </Button>{' '}</Link>
        </div>
    );
};

export default Service;