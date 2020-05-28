import React, {useState} from 'react'
import { HourBar } from '../components/HourBar'
export const HoursTimeline = ({quakes}) => {
    const [quakeHour, setQuakeHour] = useState({})
    const [localTime, setLocalTime] = useState(new Date().getHours())
    const sortQuakes = () => {
        quakes.forEach(quake=>{
            const hour = new Date(quake.properties.time).getHours()
            if(quakeHour[hour]){
                quakeHour[hour] = [...quakeHour[hour], quake]
            }else{
                quakeHour[hour] = [quake]
            }
        })
    }

    const buildQuakes = () => {
        sortQuakes()
        return Object.keys(quakeHour).map(qH => {
            return <HourBar quakes={quakeHour[qH]}></HourBar>
        })
    }
    return(
        <div id="hourTimeline">
            {buildQuakes()}
        </div>
    )
}