import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
import Navbar from "./UI/NavBar";
import Toaster from "./toast/Toaster";
import { Status } from "./UI/Status";

export default function User({ neurosity }) {              
       
       return (         
                                          
              <Entity 
                     primitive="a-camera"
                     position="0 2 0" 
                     look-controls="enabled: true" 
                     cursor="fuse: false; rayOrigin: mouse;" 
                     raycaster="far: 10000; objects: .raycasterable">

              <Status neurosity={neurosity}  />
              </Entity> 
       ); 
}