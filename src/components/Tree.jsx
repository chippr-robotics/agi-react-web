import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
const COLORS = ["tomato", "#D92B6A", "#9564F2", "#B4C1B3", "#4682B4"]; 
           
                   
export default function Tree() {              
       const [colorIndex, setColorIndex] = useState(0); 

       return (                                     
              <Entity 
                     primitive="a-box" 
                     color={COLORS[colorIndex]} 
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
                     class="raycasterable" 
                     events={{ 
                            click: () => {
                                   setColorIndex((colorIndex + 1) % COLORS.length); 
                            }
                     }}
              /> 
       ); 
}