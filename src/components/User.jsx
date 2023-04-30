import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
                   
export default function User() {              
       return (                                     
              <Entity primitive="a-camera"> 
                     <Entity 
                            cursor={{ fuseTimeout: 500 }} 
                                geometry={{ 
                                   primitive: "ring", 
                                   radiusInner: 0.006, 
                                   radiusOuter: 0.01, 
                            }} 
                            material={{ color: "white", shader: "flat" }} 
                            position="0 0 -1" 
                            raycaster="objects: .raycasterable" 
                            animation__click={{ 
                                   property: "scale", 
                                   startEvents: "click", 
                                   easing: "easeInCubic", 
                                   dur: 200, 
                                   from: "0.1 0.1 0.1", 
                                   to: "1 1 1", 
                                   }} 
                     ></Entity> 
              </Entity> 
       ); 
}