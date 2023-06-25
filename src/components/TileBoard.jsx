import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

import {ContextCounter} from '../index';

function clickHandler() {
    console.log("click");
}


export default function TileBoard() {              
    const { slideIndex, titleIndex } = useContext(ContextCounter);
    
    
    return(
        <Entity 
            position='0, 0, 0'
                primitive="a-sphere"
                radius="1"
                color="yellow" 
                >
                
            <Entity 
                primitive="a-cylinder" 
                height=".005" 
                radius=".025" 
                segments-radial="6"
                position="0 -.05 -.25" 
                rotation="90 0 0"
                opacity=".5" 
                transparent="true"
                class="raycasterable" 
                events={{ 
                    click: clickHandler
                }}
                >
                <Entity 
                primitive="a-circle"
                color="red"
                radius='.025'
                rotation="-90 0 0"
                position="0 0 0"
                segments="6"
                /> 
            
                </Entity>

        </Entity>
    );
}