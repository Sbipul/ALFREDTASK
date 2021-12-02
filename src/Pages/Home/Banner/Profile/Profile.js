import React from 'react';

const Profile = () => {
    return (
        <div>
            <div style={{borderRadius:'5px',overflow:'hidden'}} className="dFlex">
                <div className="custom_bg text-white w-full py-2">
                <div className="mx-auto" style={{height:'70px',width:'70px',borderRadius:'100%',overflow:'hidden'}}>
                    <img className="w-full h-full" src="https://i.ibb.co/HDsbgcx/po.jpg" alt="" />
                </div>
                <h5>Bipul Chandro Roy</h5>
                <p className="mb-0">Junior Frontend Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;