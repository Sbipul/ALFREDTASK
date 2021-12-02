import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const EditPlace = () => {
    const [updatedName,setUpdatedName] = useState('')
    const {places} = useAuth()
    const {id} = useParams()

    const updatedCityName = e => {
        setUpdatedName(e.target.value)
    }
    const updateCity = () => {
        const indexNo = places.indexOf(id)
        places[indexNo] = updatedName
        alert('updated your city name')
    }
    return (
        <div>
            <form className="w-6/12 mx-auto my-12">
                <input onChange={updatedCityName} defaultValue={id} className="w-full mx-auto my-5 py-3 text-red-600 px-4 text-center" type="text" placeholder="City name" name="city" id="" />
                <button onClick={updateCity} className="bg-green-500 border border-green-600 text-white px-7 py-2" type="button">Update</button>
                <Link to="/places"><button className="my-5 mx-5 border border-green-600 text-white px-4 py-2 bg-green-500" type="button" >Back to previous page</button></Link>
            </form>
        </div>
    );
};

export default EditPlace;