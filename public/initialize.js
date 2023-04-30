/** 
* This file imports all our required packages. 
* It also includes 3rd party A-Frame components. 
*/ 
           
import 'aframe' 
import 'aframe-animation-component' 
import 'aframe-event-set-component' 
import 'aframe-particle-system-component' 
//import './components/aframe-custom' 
import './js/aframe-environment' 
//import './components/aframe-effects' 
                    
import { h, render } from 'preact' 
import Main from './main' 
                        
document.addEventListener('DOMContentLoaded', () => { 
   
    console.log("trying to load");
    render(<div>help!</div>, document.querySelector('#Main')) 
})