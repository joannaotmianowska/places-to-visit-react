import React from 'react';

const SinglePlace = ({place, description, image, imageAlt}) => (
    <div data-testid='single-place'>
        <h2>{place}</h2>
        <p>{description}</p>
        <img src={image} alt={imageAlt}/>
    </div>
);

export default SinglePlace;
