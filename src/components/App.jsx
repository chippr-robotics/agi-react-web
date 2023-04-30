import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity } from "aframe-react"; 
   
export default function App() {            
       return ( 
              <Entity 
                     light={{ type: "directional", color: "#EEE", intensity: "0.6" }} 
                     position="0 -0.4 1" 
                     />
       );
}