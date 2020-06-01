import React, {useState, useEffect} from 'react';
import './App.css';
import { Map } from './components/Map'
import { TimelineContainer } from './containers/TimelineContainer';

function App() {

  const [quakeData, setQuakeData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      const parsed_data = await response.json()
      await setQuakeData(parsed_data.features)
    }
    fetchData()
  }, [])
  

  return (
    <div className="App">
      <TimelineContainer quakes={quakeData}></TimelineContainer>
      <Map quakes={quakeData} ></Map>
    </div>
  );
}

export default App;
