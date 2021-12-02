import React from 'react';
import './Banner.css'
import BlockA from './BlockA/BlockA';
import MainBanner from './MainBanner/MainBanner';
import Profile from './Profile/Profile';
import Socials from './Socials/Socials';
const Banner = () => {
    return (
        <div className="banner">
            <div className="p-3">
                <div className="flex flex-wrap Row">
                    <div className="w-full sm:w-2/2 md:w-1/4 p-2">
                        <Profile/>
                        <BlockA/>
                        <Socials/>
                    </div>
                    <div className="w-full sm:w-2/2 md:w-3/4 p-2">
                        <MainBanner/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;