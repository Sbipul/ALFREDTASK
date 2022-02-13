import React from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlockA = () => {
    return (
        <div className="custom_bg griD text-white my-6 p-3" style={{overflow:'hidden',borderRadius:'5px'}}>
            <Link className="d-block my-2 text-decoration-none text-light" to="/home"><h5>Homeeeeeeeeeeeeeeeeeeeeeeeeeee</h5></Link> 
            <Link className="d-block my-2 text-decoration-none text-light" to="/dash"><h5>Search Place</h5></Link> 
            <Link className="d-block my-2 text-decoration-none text-light" to="/places"><h5>Your Places</h5></Link> 
        </div>
    );
};

export default BlockA;
