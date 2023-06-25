import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

export function SleepMarker() {
    return (
        <Entity 
            className="TopText" 
            primitive="a-text" 
            position="2.75 1 -3"
            rotation="0 -15 0"
            align="center" 
             />
    )};
