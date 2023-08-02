import { h } from "preact"; 
import { Entity} from "aframe-react"; 
                   
export default function Boids() {              
       let prompt = 'true'; 
       

       return (                                     
              <Entity > 
                     <Entity
                            primitive="a-text"
                            value="say 'next'"
                            position="0 .5 -1" 
                            visible={prompt}
                            />    
              </Entity> 
       ); 
}