import React from 'react';
import { render, screen } from '@testing-library/react';
import SinglePlace from './singlePlace';

test('shows place details', () => {
    const placeDetails = {
        place: 'this is place name',
        description: 'this is place description',
        image: 'place img',
        imageAlt: 'this is img alt text'
    };

    render(<SinglePlace {...placeDetails}/>);

    expect(screen.queryByText(placeDetails.place)).toBeInTheDocument();
    expect(screen.queryByText(placeDetails.description)).toBeInTheDocument();

    const picture = screen.getByRole('img');
    expect(picture).toHaveAttribute('src', placeDetails.image);
    expect(picture).toHaveAttribute('alt', placeDetails.imageAlt);
});
