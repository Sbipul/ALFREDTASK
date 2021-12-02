import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import BlockA from '../BlockA/BlockA';
import Profile from '../Profile/Profile';
import Socials from '../Socials/Socials';

const Places = () => {
    const {places,setPlaces} = useAuth()
    const [hide,setHide] = useState(false)
    const [searchText,setSearchText] = useState('')
    const [showPlaceBySearch,setShowPlaceBySearch] = useState([])

    const delPlace = name => {
        const confirm = window.confirm('Are you sure wanna delete this place from your list?')
        if (confirm) {
            const remPlace = places.filter(place => place !== name)
        setPlaces(remPlace)
        }
        
    }

    const resetPlace = () => {
        alert('Successfully your place has beem reset')
        setPlaces([])
    }

    const hidePlace = e => {
        document.getElementById('hidenBlock').style.display = 'none'
        setHide(true)
    }
    const unHidePlace = e => {
        document.getElementById('hidenBlock').style.display = 'block'
        setHide(false)
    }

    const searchedPlace = e => {
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        setShowPlaceBySearch(places.filter(bor => bor.toLowerCase().includes(searchText.toLowerCase())))
    },[searchText])

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
                        <input onChange={searchedPlace} className="w-3/6 mx-auto px-6 py-4 my-3" type="text" placeholder="search your added places"/>
                        {
                            places.length && <div><div id="hidenBlock"><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
                            {
                                showPlaceBySearch.map(a => <div class="py-4 text-white border border-gray-100">
                                    
                                    <h1 className="text-5xl text-indigo-600 font-black">{a}</h1>
                                    <Link to={`/edit/${a}`}><button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-green-500" type="button" >Edit place</button></Link>
                                    <button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-red-500" type="button" onClick={()=>delPlace(a)}>Delete</button>
                                    
                                </div>)
                            }
                            </div>
                            </div>
                            <button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-red-500" type="button" onClick={resetPlace}>Reset places</button>
                            {
                                !hide ? <button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-blue-500" type="button" onClick={hidePlace}>Hide places</button> : <button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-green-500" type="button" onClick={unHidePlace}>Un Hide places</button>
                            }
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Places;