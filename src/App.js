import React, {useState, useEffect} from 'react';
import './App.css';
import { Map } from './components/Map'
import { TimelineContainer } from './containers/TimelineContainer';

function App() {
  const [page, setPage] = useState(1)
  const [markerPosition, setMarkerPosition] = useState({
    lat: 38.948293,
    lng: -77.367410
  })
  const { lat, lng } = markerPosition
  const [quakeData, setQuakeData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      const parsed_data = await response.json()
      await setQuakeData(parsed_data.features)
    }
    fetchData()
  }, [])
  
  const quakeSlicer = () => {

    return quakeData.slice(page, page+100)
  }
  return (
    <div className="App">
      <TimelineContainer quakes={quakeData}></TimelineContainer>
      <Map markerPosition={markerPosition} ></Map>
    </div>
  );
}

export default App;
