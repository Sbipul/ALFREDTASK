import { useState } from "react";

const useFirebase = () => {
    const [places,setPlaces] = useState([])

    const addPlace = place => {
        places.push(place)
    }

    return {
        addPlace,places,setPlaces
    }
};

export default useFirebase;