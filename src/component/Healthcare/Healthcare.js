import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Healthcare.css';

const Healthcare = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    const singleService = [];

    for (const service of services) {
        // console.log(service.id)
        if (service.id == serviceId) {
            singleService.push(service);
        }
    }



    useEffect(() => {
        fetch('https://mehrinniti.github.io/services-json/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services)

    return (
        <div className="healthcare-container">
            <div className="healthcare shadow" >

                <img src={singleService[0]?.image} alt="" />

                <h2>{singleService[0]?.name}</h2>
                <p>{singleService[0]?.description2}</p>

                <Link to={`/services`}><Button className="back-btn" variant="white"> Back </Button>{' '}</Link>

            </div >
        </div>
    );
};

export default Healthcare;