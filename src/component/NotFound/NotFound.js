import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFound.css';
import error from '../../images/404-with-doctor.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={error} alt="" />
            <br />
            <Link to="/"><Button className="details-btn" variant="white"><i class="fas fa-chevron-left back-icon"></i> Go Back Home </Button>{' '}</Link>
        </div>
    );
};

export default NotFound;