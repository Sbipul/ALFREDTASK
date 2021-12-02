import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const DashBoard = () => {
    const {addPlace} = useAuth()
    const [data,setData] = useState({})
    const [weather,setWeather] = useState([])


    const clickMe = e => {
        let formData = {}
        e.preventDefault()
        formData.city = e.target.city.value;
        formData.state = e.target.state.value;
        formData.country = e.target.country.value;
        setData(formData)
    }

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data?.city},${data?.state},${data?.country}&appid=c6c0b19e51f77236f93662e84f2846ce`)
        .then(res => res.json())
        .then(data => setWeather(data))
    },[data?.city])

    const addYourPlace = place => {
        addPlace(place)
        alert('Added your place')
    }
    
    const temp = Math.round(weather?.main?.temp-273)
    // http://openweathermap.org/img/w/" + iconcode + ".png
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
                        <h1 className="text-blue-400 text-5xl">Search place to know weather</h1>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="items-center flex">
                                <form className="w-full my-12" onSubmit={clickMe}>
                                    <input className="w-full mx-auto my-5 py-3 text-red-600 px-4 text-center" type="text" placeholder="City name" name="city" id="" /><br />
                                    <input className="w-full mx-auto my-5 px-4 py-3 text-center" type="text" placeholder="State of city" name="state" id="" /><br />
                                    <input className="w-full mx-auto my-5 px-4 py-3 text-center" type="text" placeholder="Country of city" name="country" id="" /><br />
                                    <button className="bg-green-500 border border-green-600 text-white px-7 py-2" type="submit">Click</button>
                                </form>
                            </div>
                            {
                                weather?.name && <div className="my-12 p-5">
                                <h1 className="text-blue-400 text-5xl">{weather?.name}</h1>
                                <h1 className="text-blue-400 text-5xl">{temp}d C</h1>
                                {/* <img style={{height:'60px',width:'60px'}} src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt="" /> */}
                                <button onClick={()=>addYourPlace(weather?.name)} className="my-5 border border-green-600 text-white px-4 py-2 bg-green-500" type="button">Add place</button>
                            </div>
                            }
                        </div>
                        
                        
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default DashBoard;