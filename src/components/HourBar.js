import React, {useState, useEffect} from 'react'
import {  } from 'semantic-ui-react'

export const HourBar = ({quakes}) => {
    const quakeCount = () => {

        return quakes.length
    }
    return(
        <div className="hour">
            <span>
                {quakeCount()}
            </span>
        </div>
    )
}
