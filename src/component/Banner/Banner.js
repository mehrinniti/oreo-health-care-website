import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 banner "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="text-start w-50 banner-text">
                            <h3><span className="text-info ps-3 border-info border-4 border-start">Welcome</span> Oreo Health Care</h3>
                            <h2>Your Most Trusted <br /> Health Partner</h2>
                            <p>Create a strong and lasting first impression on your potential clients with Mediplus, a one-page medical website template. Present all your services, doctors and other information on the web in the best possible light.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text2">
                            <h2 className="text-black fs-1 fw-bold">Best Features</h2><br />
                            <p className="text-black fs-5"><span><i class="fas fa-briefcase-medical medical-icon fs-4 "></i></span>  Personalized & specialized Care for patients</p>
                            <p className="text-black fs-5"><span><i class="fas fa-briefcase-medical medical-icon fs-4"></i></span>  Ultra modern technologies</p>
                            <p className="text-black fs-5"><span><i class="fas fa-briefcase-medical medical-icon fs-4"></i></span>  Quality Healthcare Services</p>
                            <p className="text-black fs-5"><span><i class="fas fa-briefcase-medical medical-icon fs-4"></i></span>  Plug Revenue Leakage</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="text-start w-50 banner-text">
                            <h3 className="facility py-3"><span><i class="fas fa-hospital text-black fs-2 pe-4"></i></span>    Hygienic Environment </h3>
                            <h3 className="facility py-3"><span><i class="fas fa-ambulance text-black fs-2 pe-4"></i></span>    24/7 Availability </h3>
                            <h3 className="facility py-3"><span><i class="fas fa-briefcase-medical text-black fs-2 pe-4"></i></span>    Good Support </h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col hospital-info">
                            <span className='icon '><i class="fas fa-medkit"></i></span>
                            <h3>Advanced Technology</h3>
                            <p>Modern societies reap great benefits from technological advancements. The healthcare sector is no different.</p>
                        </div>
                        <div className="col hospital-info">
                            <span className='icon'><i class="fas fa-user-md"></i></span>
                            <h3>Healthcare Solutions</h3>
                            <p>Healthcare Solutions and its subsidiaries, Cypress Care, Procura Management, ScripNet and Modern Medical, are part of Optum™ </p>
                        </div>
                        <div className="col hospital-info">
                            <span className='icon'><i class="fas fa-ambulance"></i></span>
                            <h3>24/7 Availability</h3>
                            <p>Challenges to wider scale implementation of 24/7 hospital solutions are broad and include costs, provider preferences, and availability</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;