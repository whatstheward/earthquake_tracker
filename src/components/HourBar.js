import React, {useEffect, useState} from 'react'

import styled from 'styled-components'

export const HourBar = ({quakes}) => {
    const quakeCount = quakes.length
    const GraphBar = styled.td`
        display: inline-block;
        height: ${quakeCount}%;
        background-color: red;
        margin: .5em;
        border-bottom: none;
        margin-bottom: 1em;
    `
    const TableHead = styled.th`
        z-index:2;
        margin: 0;
        padding: 0;
        text-align: center;
        bottom: -1.75em;
        vertical-align: top;
    `
    return(
            <>
            <TableHead scope="row">x</TableHead>
            <GraphBar>{quakeCount}</GraphBar>
            </>
    )
}
