import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="container footer-body">
                <div className="row">
                    <div className="col">
                        <h4>About Health Care</h4>
                        <hr />
                        <br />
                        <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.</p>
                        <p>A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty hospital.</p>
                    </div>
                    <div className="col ">
                        <h4>Our Doctors</h4>
                        <hr />
                        <div>
                            <div className="container p-0 m-0">
                                <div className="row g-1 ">
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-03.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-06.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-07.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-01.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-02.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-04.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-08.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-03.png" alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='doctor img-fluid ' src="https://thememakker.com/templates/oreo/hospital/front/assets/images/team-member-05.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Contact Us</h4>
                        <hr />
                        <br />
                        <div className="text-start">
                            <p><i class="fas fa-map-marker-alt text-info pe-3"></i> Godnail, Narayanganj, Dhaka, BD</p>
                            <p><i class="fas fa-globe text-info pe-3"></i> www.oreo.healthcare.com</p>
                            <p><i class="far fa-envelope text-info pe-3"></i> oreo@healthcare.com</p>
                        </div>

                        <div className="navbar navbar-expand-lg navbar-light ">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success search-btn" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='footer d-flex justify-content-between '>
                <p> © 2021 || Oreo Healthcare designed by <span className="text-info">Sayma Sultana Niti</span></p>
                <div className='social-site '>
                    <a href="https://twitter.com/"><i class="fab fa-facebook"></i></a>
                    <a href="https://whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://discord.com/"><i class="fab fa-discord"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;