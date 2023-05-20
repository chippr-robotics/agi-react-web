import "annyang"
import "aframe-speech-command-component";
import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

export default function Menu() {              
    return (                           
        <Entity
            >          
           <Entity
           id = "annyang"
           annyang-speech-recognition />
           <Entity 
                id="menu"
                primitive="a-box" 
                depth="4" 
                height="4" 
                width="4" 
                position={{ x: 0.0, y: 4, z: -10.0 }} 
                animation__rotate={{ 
                       property: "rotation", 
                       dur: 20000, 
                       easing: "linear", 
                       loop: true, 
                       to: { x: 360, y: 360, z: 0 }, 
                }} 
                speech-command__show="command: show menu; type: attribute; attribute: visible; value: true;"
                speech-command__hide="command: hide menu; type: attribute; attribute: visible; value: false;"
            />
        </Entity>   
    )
}