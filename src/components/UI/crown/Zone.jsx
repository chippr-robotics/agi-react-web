import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

import { Calm } from "./zone/Calm";
import { Focus } from "./zone/Focus"; 


export function Zone({neurosity}) { 
    return (
        <Entity
        position="3 0.25 -3"
        rotation="0 -15 0">
            <Calm  neurosity={neurosity} />
            <Focus neurosity={neurosity} />

            <Entity
            primitive="a-plane"
            height="1"
            width=".15"
            position="-0.225 0.55 0" 
            transparent="true"
            opacity=".2"
            />
        </Entity>
            
    )};


