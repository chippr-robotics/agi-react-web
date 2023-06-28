import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

import { Calm } from "./zone/Calm";
import { Focus } from "./zone/Focus"; 


export function Zone({neurosity}) { 
    return (
        <Entity
        position="4.25 2 -5" 
        scale=".5 .5 .5"
        rotation="0 0 0 "
        >

            <Calm  neurosity={neurosity} />
            <Focus neurosity={neurosity} />

        </Entity>
            
    )};


