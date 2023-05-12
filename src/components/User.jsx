import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
import Navbar from "./UI/NavBar";
                   
export default function User() {              
       return (                                     
              <Entity 
                     primitive="a-camera"
                     position="0 0 0" 
                     look-controls="enabled: false" 
                     cursor="fuse: false; rayOrigin: mouse;" 
                     raycaster="far: 10000; objects: .raycasterable"> 
                     
                     <Navbar />
                      
              </Entity> 
       ); 
}