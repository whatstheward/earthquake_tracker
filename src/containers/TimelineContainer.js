import React, { useEffect, useState } from 'react'

import {HoursTimeline} from './HoursTimeline'

export const TimelineContainer = ({quakes}) => {
    return(
            <HoursTimeline quakes={quakes}></HoursTimeline>
    )
}
