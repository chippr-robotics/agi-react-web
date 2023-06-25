import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";



export function Probe({textColor, probeColor, value, position }) {     
    return (
    <Entity>
       <Entity 
            className="eeg" 
            primitive="a-circle"
            radius=".05"
            segments="6"
            position={position}
            color={probeColor}
            >
        <Entity
            primitive="a-text"
            position="0 0 .001"
            value={value}
            width=".5"
            align="center"
            color={textColor} />
        </Entity>
    </Entity>
    )};
