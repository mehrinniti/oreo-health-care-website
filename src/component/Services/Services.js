import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="services-container">
                <h2><span className="services-title">Our</span> focus is on the patient</h2>
                <p className="services-subtitle">SERVICES WE PROVIDE</p>

                <hr className=" border border-info border-3 rounded-pill w-75 mt-5 mb-5 mx-auto" />

                <div className="services-card">
                    {
                        services.map(service => <Service

                            key={service.id}
                            service={service}

                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;