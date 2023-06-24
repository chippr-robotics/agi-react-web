import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { Probe } from "./Probe";



export function Haptics({neurosity}) { 
    return (
    <Entity
    rotation="15 0 0">
        <Probe 
            value="P7" 
            textColor="black" 
            probeColor="white"
            position= "-.25 -.4 .2" 
            />
         
        <Probe 
            value="P8" 
            textColor="black" 
            probeColor="white"
            position=".25 -.4 .2" 
            />
    </Entity>
    )};
