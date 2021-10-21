import React, {useState, useEffect, useCallback} from 'react';
import SinglePlace from './singlePlace';

const PlacesList = () => {
    const [places, setPlaces] = useState(null);

    const fetchAndSaveData = useCallback(async () => {
        const url = 'https://vanillajsacademy.com/api/places.json';
        const response = await fetch(url);
        const data = await response.json();
        setPlaces(data)
    }, [setPlaces]);

    useEffect(() => {
        fetchAndSaveData();
    }, [fetchAndSaveData]);

    if (!places) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2 data-testid='title'>Places to visit</h2>
            {
                places.map((place) => (
                    <SinglePlace key={place.id} {...place} />
                ))
            }
        </div>
    )

}

export default PlacesList;
