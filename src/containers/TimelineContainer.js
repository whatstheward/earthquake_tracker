import React, { useState, useEffect } from 'react'
import {HoursTimeline} from './HoursTimeline'

export const TimelineContainer = ({quakes}) => {
    
    const [unit, setUnit] = useState("hrs")


    return(
        <div id="timelineContainer">
            <HoursTimeline quakes={quakes}></HoursTimeline>

        </div>
    )
}
