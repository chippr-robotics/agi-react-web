import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";



export function Probe({textColor, probeColor, value, position }) {     
    return (
    <Entity>
       <Entity 
            className="haptic p7" 
            primitive="a-circle"
            radius=".05"
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
