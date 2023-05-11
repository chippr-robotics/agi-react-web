import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

import {ContextCounter} from '../index';

export default function NavButtons() {              
    const { slideIndex, titleIndex, increment } = useContext(ContextCounter);

    
    return(
        <Entity 
            position='0, 0, -2'>
            <Entity 
                primitive="a-box" 
                id="titleBox"
                src= {"./dist/assets/lib/" + titleIndex + ".png"}
                depth=".05" 
                height=".85" 
                width="1.05" 
                position="-1.2 .5 .25" 
                rotation=" 0 0 30 "
                animation="property: rotation; to: 0 10 -30; dur: 15000; dir:alternate; loop: true"
            />
        
            <Entity 
                primitive="a-box"
                id="msgBox"
                src= {"./dist/assets/lib/" + slideIndex + ".png"}  
                depth=".05" 
                height="1" 
                width="1.5"
                animation="property: position; to: .01 .05 .05; dur: 10000; dir:alternate; loop: true"
            />

        <Entity 
            primitive="a-box"  
            id="forward"
            visible="true" 
            depth=".05" 
            height=".15" 
            width=".15" 
            position=".2 -.55 0" 
            color="grey"
            src="./dist/assets/lib/swipe.png"
            animation="property: position; to: .21 -.56 0; dur: 1500;dir:alternate;loop: true"
            class="raycasterable" 
            events={{ 
                click: increment
            }}
        />
        </Entity>
    );
}