import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from './components/Map'

function App() {

  const [markerPosition, setMarkerPosition] = React.useState({
    lat: 38.948293,
    lng: -77.367410
  })

  const { lat, lng } = markerPosition

  const moveMarker = () => setMarkerPosition({
      lat: lat + 0.0001,
      lng: lng + 0.0001
  })

  return (
    <div className="App">
      <Map markerPosition={markerPosition}></Map>
    </div>
  );
}

export default App;
