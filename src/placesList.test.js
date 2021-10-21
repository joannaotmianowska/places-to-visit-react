import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react';
import PlacesList from './placesList';

const mockedPlaces = [
    {
        place: 'this is place name 1',
        description: 'this is place description 1',
        image: 'place img 1',
        imageAlt: 'this is img alt text 1',
        id: 'kasjsdjkdsfjsfal'
    },
    {
        place: 'this is place name 2',
        description: 'this is place description 2',
        image: 'place img 2',
        imageAlt: 'this is img alt text 2',
        id: 'skjdfhjsdfkhhsfd'
    }
];

const server = setupServer(
    rest.get('https://vanillajsacademy.com/api/places.json', (req, res, ctx) => {
        return res(ctx.json(mockedPlaces))
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('shows loader and places list', async () => {
    render(<PlacesList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('title'));

    expect(screen.getByTestId('title')).toBeInTheDocument();

    mockedPlaces.forEach((el) => {
        expect(screen.queryByText(el.place)).toBeInTheDocument();
        expect(screen.queryByText(el.description)).toBeInTheDocument();
    });
})
