import React from 'react';
import { render } from "react-dom";
import PlacesList from './placesList';

const App = () => (
  <PlacesList />
);

render(<App />, document.getElementById('root'));
