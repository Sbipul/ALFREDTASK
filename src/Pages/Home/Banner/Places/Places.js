import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const Places = () => {
    const {places,setPlaces} = useAuth()

    const delPlace = name => {
        const confirm = window.confirm('Are you sure wanna delete this place from your list?')
        if (confirm) {
            const remPlace = places.filter(place => place !== name)
        setPlaces(remPlace)
        }
        
    }


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
                        {
                            places.length && <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
                            {
                                places.map(a => <div class="py-4 text-white border border-gray-100">
                                    
                                    <h1 className="text-5xl text-indigo-600 font-black">{a}</h1>
                                    <Link to={`/edit/${a}`}><button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-green-500" type="button" >Edit place</button></Link>
                                    <button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-red-500" type="button" onClick={()=>delPlace(a)}>Delete</button>
                                </div>)
                            }
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
{/* <div class="flex items-stretch ...">
  <div class="py-4">1</div>
  <div class="py-12">2</div>
  <div class="py-8">3</div>
</div> */}
export default Places;