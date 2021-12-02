import React from 'react';
// import { FaFacebook,FaWhatsapp,FaLinkedin,FaSkype,FaTwitterSquare } from "react-icons/fa";
import './Socials.css'
const Socials = () => {
    return (
        <div>
            <div style={{borderRadius:'5px',overflow:'hidden'}} className="d-flex align-items-center justify-content-center">
                <div className="custom_bg text-white w-100 py-2">
                    <p className="text-white">CSS frameworks</p>
                    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gridRowGap:'30px',padding:'40px'}}>
                        <div style={{height:'70px',width:'70px',border:'5px solid aqua'}} className="dFlex roundeCircle">
                            <div>
                                <p style={{margin:'0px'}}>TW</p>
                                <p style={{margin:'0px'}}>100%</p>
                            </div>
                        </div>
                        <div  className="lang dFlex roundeCircle">
                            <div>
                                <p style={{margin:'0px'}}>Bts-5</p>
                                <p style={{margin:'0px'}}>0%</p>
                            </div>
                        </div>
                        <div  className="lang dFlex roundeCircle">
                            <div>
                                <p style={{margin:'0px'}}>Mui</p>
                                <p style={{margin:'0px'}}>0%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Socials;