import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity } from "aframe-react"; 
import { NavButton } from "./buttons/navButton";

import {ContextCounter} from '../index';

export default function Navbar() {            
       const { increment, decrement } = useContext(ContextCounter);
       return ( 
              <Entity 
                     position='0, 0, -1.1'>
                     
                     <NavButton 
                     position='.5, 0, 0'
                     events={{ 
                         click: decrement
                     }} />

                     <NavButton 
                     position='0, 0, 0'
                      events={{ 
                         click: decrement
                     }} />
                     <NavButton 
                     position='-.5, 0, 0'
                     events={{ 
                         click: increment
                     }} />
              </Entity>
       );
}