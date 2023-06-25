import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

export function Toptext({ textValue }) {
    return (
        <Entity 
            className="TopText" 
            primitive="a-text" 
            position="0 2 -3"
            align="center" 
            value={textValue} />
    )};