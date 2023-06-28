import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { useState } from "preact/hooks"; 


export function BarGraph({valueArray, name, location}) {
    const [maxValue, setMaxValue] = useState(0);
    const [maxPos, setMaxPos] = useState(0);

    function setNewMax(){
        setMaxValue(dialValue);
        let rot = 90 + (dialValue / 100 *270)
        setMaxPos(rot);
    }

    function getTheta(){
        //start angle is 0
        //finish angle is 270
        if (dialValue > maxValue) setNewMax();
        let theta = dialValue / 100 * 270 
        return theta;
    }
    return (
        <Entity
        position={location}
        scale="1"
        rotation="0 0 0"
        >
            <Entity
            id="dataLabel"
            primitive="a-text"
            value={value}
            position="0 -1.5 0"
            width="5"
            />
        <Entity
            id="singlebar"
            position="0 0 0"
            >
        <Entity
            id="graphPlane"
            primitive="a-plane"
            position="0 -0.25 0"
            rotation="-90 0 0"
            height="1"
            width="1"
            color="white"
            />
        <Entity 
            id="valueBar"
            primitive="a-box"
            depth=".95" 
            height=".5" 
            width=".95"
            color="green"
        />
        </Entity>
        </Entity>
    )};
