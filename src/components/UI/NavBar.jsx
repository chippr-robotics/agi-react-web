import { h } from "preact"; 
import { useContext, useState } from "preact/hooks"; 
import { Entity } from "aframe-react"; 
import { NavButton } from "../buttons/navButton";

import {ContextCounter} from '../../index';

export default function Navbar() {            
       const { increment, decrement, home } = useContext(ContextCounter);
       let [ menuState, setMenuState ] = useState('true');
       
       function menuToggle(){
              console.log(menuState)
              if (menuState == 'true') {
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
                     position='0,0,1'
                     radius=".1"
                     primitive="a-sphere"  
                     src="https://i.imgur.com/mYmmbrp.jpg"
                     visible="true" 
                     color="blue"
                     class="raycasterable" 
                     events={{ 
                            click: menuToggle
                     }}
                     />
                     
                     <NavButton 
                     position='-.5, 0, 0'
                     src="./dist/assets/lib/swipe.png"
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
                     position='.5, 0, 0'
                     visible={menuState}
                     events={{ 
                         click: increment
                     }} />
              </Entity>
       );
}