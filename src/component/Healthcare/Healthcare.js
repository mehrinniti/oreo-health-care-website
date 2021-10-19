import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Healthcare = () => {

    const { serviceId } = useParams();
    // // const services = useData();
    // const singleService = [];

    // // for (const service of services) {
    // //     if (service.id === serviceId) {
    // //         singleService.push(service);
    // //     }
    // // }

    return (
        /*  <>
             <Container fluid className="single-service-banner">
                 <div className="container">
                     <p>
                         <Link to="/"> Services/ </Link> <Link to="/services"> Services/ </Link>{" "}
                         <small>{ }singleService[0]?.name</small>
                     </p>
                 </div>
             </Container>
         </> */
        <div>
            <h3>this isbdfcdsv : {serviceId}</h3>

        </div>
    );
};

export default Healthcare;