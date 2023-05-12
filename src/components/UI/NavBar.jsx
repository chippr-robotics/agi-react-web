import { h } from "preact"; 
import { useContext, useState } from "preact/hooks"; 
import { Entity } from "aframe-react"; 
import { NavButton } from "../buttons/navButton";

import {ContextCounter} from '../../index';

export default function Navbar() {            
       const { increment, decrement, home } = useContext(ContextCounter);
       let [ menuState, setMenuState ] = useState('false');
       
       function menuToggle(){
              console.log(menuState)
              if (menuState == 'true') {
                     //the nav buttons are being displayed
                     setMenuState('false'); 
               } else {
                     setMenuState('true');
               };
       };

       return ( 
              <Entity 
                     position='0, -.5, -1.1'
                     rotation='-45,0,0'>
                     
                     <Entity 
                     position='0, -.2, 0'
                     radius=".1"
                     primitive="a-sphere"  
                     visible='true'
                     class="raycasterable" 
                     animation__mouseenter="property: radius; to: .11; dur: 500; dir:to; startEvents: mouseenter"
                     animation__mouseleave="property: radius; to: .1; dur: 500; dir:to; startEvents: mouseleave"
                     events={{ 
                            click: menuToggle
                     }}
                     />

                    
                     <NavButton 
                     position='-.25, 0, 0'
                     visible={menuState}
                     events={{ 
                         click: decrement
                     }} />

                     <NavButton 
                     position='0, 0, 0'
                     visible={menuState}
                      events={{ 
                         click: home
                     }} />
                     <NavButton 
                     position='.25, 0, 0'
                     visible={menuState}
                     events={{ 
                         click: increment
                     }} />
              </Entity>
       );
}