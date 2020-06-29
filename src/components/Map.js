import React, { useEffect, useRef, useState } from 'react'

import L from 'leaflet'

const style = {
    width: "100vw",
    height: "50vh"
}

export const Map = ({quakes}) => {
    const [position, setPosition] = useState({ latitude: 39.694571, longitude: -77.358465 })
    const [error, setError] = useState(null)
  
    const mapRef = useRef(null);

    useEffect(()=>{
        mapRef.current = L.map('map', {
            bounds: [],
            center: [position.latitude, position.longitude],
            zoom: 7,
            minZoom: 3,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        })
    }, [])

    const layerRef = useRef(null)
        useEffect(()=> {
            layerRef.current = L.layerGroup().addTo(mapRef.current)
        }, [])

    useEffect(()=>{
        layerRef.current.clearLayers();
        quakes.forEach(quake=>{
            const latLng = [quake.geometry.coordinates[1], quake.geometry.coordinates[0]]
            const popupContent = `  <ul>
                                        <li>Place: ${quake.properties.place} </li>
                                        <li>Time: ${new Date(quake.properties.time).toLocaleString()}</li>
                                        <li>Magnitude: ${quake.properties.mag}</li>
                                        <li><a href=${quake.properties.url} target="blank">Learn More</a></li>
                                    </ul>`
            const icon =    L.icon({iconUrl: require('../images/icons/marker_red.png'),
                                    iconSize:[30, 30]})
            L.marker(latLng, {icon: icon }).bindPopup(popupContent).openPopup().addTo(layerRef.current)

        })
    }, [quakes])



    return(
        <div>
            <div id="map" style={style}>

            </div>
        </div>
        )
}