import React, { useEffect, useRef } from 'react'
import L from 'leaflet'

const style = {
    width: "75vw",
    height: "50vh"
}

export const Map = ({markerPosition, bounds}) => {


    const mapRef = useRef(null);
    useEffect(()=>{
        console.log(bounds)
        mapRef.current = L.map('map', {
            bounds: [],
            center: [38.948293,-77.367410],
            zoom: 14,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        })
    }, [])

    const markerRef = useRef(null);
    useEffect(
        ()=>{
            if(markerRef.current){
                markerRef.current.setLatLng(markerPosition)
            }else{
                markerRef.current = L.marker(markerPosition).addTo(mapRef.current)
            }
        },
        [markerPosition]
    )


    return(
        <div>
            <div id="map" style={style}>

            </div>
        </div>
        )
}