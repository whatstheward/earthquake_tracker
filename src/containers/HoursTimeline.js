import React, {useState} from 'react'

import { HourBar } from '../components/HourBar'
import styled from 'styled-components'

const TimelineGraph = styled.tbody`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 15em;
    `
    
const Table = styled.table`
    display: block;
    position: relative;
    justify-content: center;
    overflow-x: scroll;
    margin: 1.1em 0 0;
    background: transparent;
    `

const Header = styled.h1`
    margin-bottom: 0;
    position: relative;
    clear: both;
    `

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
    <>
        <Header>Earthquakes over the last 24 hours</Header>
        <Table>
            <TimelineGraph>
                {buildQuakes()}
            </TimelineGraph>
        </Table>
    </>
    )
}