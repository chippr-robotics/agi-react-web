import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";


export function BatteryMarker({ charging, battery }) {
    return (
        <Entity
            position="3 2 -3"
            rotation="0 0 0">
        <Entity 
            className="StatText" 
            primitive="a-text" 
            position="-.50 0 0"
            align="center" 
            value={charging ? " Charging " : " Charged "} />
        <Entity 
            className="StatText" 
            primitive="a-text" 
            position=".25 0 0"
            align="center" 
            value={battery + "%"} />
        </Entity>
    )};