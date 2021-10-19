import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
import DoctorsBanner from './DoctorsBanner';


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div>
            <DoctorsBanner></DoctorsBanner>
            <div className="doctors-container">
                <h2><span className="doctors-title">Meet </span>Our Team</h2>
                <p className="doctors-subtitle">OUR TECHNOLOGICAL SERVICES HAS BEEN IMPROVED VASTLY</p>

                <hr className=" border border-info border-3 rounded-pill w-75 mt-5 mb-5 mx-auto" />
                <Row xs={1} md={2} lg={3} className="g-4 doctor-cards">

                    {
                        doctors.map(doctor =>
                            <Col className="doctor-card">
                                <Doctor

                                    key={doctor.id}
                                    doctor={doctor}

                                ></Doctor>
                            </Col>
                        )
                    }

                </Row>
            </div>
        </div>
    );
};

export default Doctors;