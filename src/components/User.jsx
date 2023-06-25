import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

import  Crown  from "./UI/CrownUI";

export default function User({ neurosity }) {              
       
       return (         
                                          
              <Entity 
                     primitive="a-camera"
                     position="0 2 0" 
                     look-controls="enabled: true" 
                     cursor="fuse: false; rayOrigin: mouse;" 
                     raycaster="far: 10000; objects: .raycasterable">
              <Crown class="overlay" neurosity={neurosity}  />
              </Entity> 
       ); 
}