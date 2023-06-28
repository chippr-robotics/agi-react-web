import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";



export function Orientate() {     
    return (
       <Entity 
            className="pointer" 
            primitive="a-sphere"
            radius=".05"
            position="0 -.22 0"
            />

        
    )};
