import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

import {ContextCounter} from '../index';

                   
export default function ARTarget() {
    const { slideIndex, titleIndex, increment } = useContext(ContextCounter);
        return (    
            <Entity
            primitive="a-text"
            text={"value: "+titleIndex+";"}
            position="0 1 -1.9"
            />           
       ); 
}