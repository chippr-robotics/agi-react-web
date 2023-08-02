import "aframe-environment-component";

import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

export default function Environment() {    
    return(
        <Entity           
    environment= {{ 
        preset: "japan", 
        seed: 1, 
        lightPosition: { x: 200.0, y: 1.0, z: -50.0 }, 
        fog: 0.8, 
        ground: "hills", 
        groundTexture: "none", 
        groundColor: "#242444", 
        grid: "1x1", 
    }}
    />
    )
} 