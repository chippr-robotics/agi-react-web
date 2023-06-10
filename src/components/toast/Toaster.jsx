import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
import {ContextCounter} from '../../index';

function clickHandler() {
    console.log("click");
}


export default function Toaster() {              
  
    
    return(
        <Entity
         position="0 0 -.1"
        >
                
            
            <Entity
                primitive='a-text'
                id='toast-head'
                value="NOTIFICATION"
                height=".1"
                width=".075"
                align="center"
                font="mozillavr"
                position="0 0.02 0" 
            />
            <Entity
                primitive='a-text'
                id='toast-body'
                value="blksadfjkjsdhrkjsdhflijk blksadfjkjsdhrkjsdhflijkblksadfjkjsdhrkjsdhflijkblksadfjkjsdhrkjsdhflijkblksadfjkjsdhrkjsdhflijk ODlsakdjnlsakdjlkjsadlkjsdfYtEXT"
                height=".05"
                width=".045"
                align="center"
                font="mozillavr"
                wrapCount="40"
            />
            <Entity 
                primitive="a-triangle" 
                height=".005" 
                radius=".025" 
                segments-radial="6"
                opacity=".5" 
                transparent="true"
                class="raycasterable" 
                rotation="0 90 90"
                events={{ 
                    click: clickHandler
                }}
            />
            <Entity 
                primitive="a-cylinder" 
                height=".005" 
                radius=".025" 
                segments-radial="6"
                opacity=".5" 
                transparent="true"
                class="raycasterable" 
                rotation="0 90 90"
              
                events={{ 
                    click: clickHandler
                }}
            />
        </Entity>
    );
}