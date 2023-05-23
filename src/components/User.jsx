import { h } from "preact"; 
import { Entity} from "aframe-react"; 
                   
export default function User() {              
       let prompt = 'false'; 
       
       setInterval(()=>{
              prompt = 'true';
       }, 5000)
       
       function reset(){
              prompt = 'false';
       };

       return (                                     
              <Entity 
                     primitive="a-camera"
                     position="0 0 0" 
                     look-controls="enabled: true" 
                     cursor="fuse: false; rayOrigin: mouse;" 
                     raycaster="far: 10000; objects: .raycasterable"> 
                     <Entity
                            primitive="a-text"
                            value="say 'next'"
                            position="0 .5 -1" 
                            visible={prompt}
                            events={{
                                   'next' : reset
                            }}
                            />    
              </Entity> 
       ); 
}