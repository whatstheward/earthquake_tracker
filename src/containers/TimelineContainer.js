import React, { useState, useEffect } from 'react'
import {Button} from 'semantic-ui-react'
import {HoursTimeline} from './HoursTimeline'

export const TimelineContainer = ({quakes}) => {
    
    const [unit, setUnit] = useState("hrs")


    return(
        <div id="timelineContainer">
            <HoursTimeline quakes={quakes}></HoursTimeline>
            <Button></Button>
            <Button></Button>
        </div>
    )
}
