import { h } from "preact"; 
import { useState } from "preact/hooks"; 
import { Entity, Scene } from "aframe-react"; 
import ImgGround from "./assets/js/img/floor.png"; 
import ImgSky from "./assets/js/img/sky.png"; 
        
const COLORS = ["tomato", "#D92B6A", "#9564F2", "#B4C1B3", "#4682B4"]; 
           
export default function App() { 
       const [colorIndex, setColorIndex] = useState(0); 
                 
       return ( 
              <Scene 
                   environment={{ 
                                         
                     preset: "starry", 
                     seed: 1, 
                                                          
                     lightPosition: { x: 200.0, y: 1.0, z: -50.0 }, 
                                                                   
                     fog: 0.8, 
                                                     
                     ground: "hills", 
                                      
                     groundYScale: 5.0, 
                                         
                     groundTexture: "none", 
                                            
                     groundColor: "#242444", 
                                          
                     grid: "1x1", 
                                         
              }} 
                                   
              effects="bloom, film, fxaa" 
                                   
              bloom="radius: 0.99" 
                                   
              film="sIntensity: 0.15; nIntensity: 0.15" 
                                 
              fxaa 
                             
              > 
                                    
                                    
                                                                                                                                                                
              <Entity light={{ type: "ambient", color: "#BBB" }} /> 
                                       
              <Entity 
                     light={{ type: "directional", color: "#EEE", intensity: "0.6" }} 
                     
                     position="0 -0.4 1" 
                     
                     /> 
                     
                     <Entity 
                            
                            light={{ type: "point", intensity: "0.4", distance: 40, decay: 2 }} 
                            
                            position="0 10 0" 
                            
                            /> 
                                                                                                                                                                                                                                  
                            <Entity primitive="a-camera"> 
                            <Entity 
                                cursor={{ fuseTimeout: 500 }} 
                                 
                                geometry={{ 
                                 
                                   primitive: "ring", 
                                  
                                   radiusInner: 0.006, 
                                   
                                   radiusOuter: 0.01, 
                                 
                            }} 
                               
                            material={{ color: "white", shader: "flat" }} 
                              
                            position="0 0 -1" 
                                
                            raycaster="objects: .raycasterable" 
                                 
                            animation__click={{ 
                                
                                   property: "scale", 
                                 
                                   startEvents: "click", 
                                  
                                   easing: "easeInCubic", 
                                                                                                                                                                                                                                                                                                                                                                                                                          dur: 200, 
                                  
                                                                                                                                                                                                                                                                                                                                                                                                                          from: "0.1 0.1 0.1", 
                                   
                                                                                                                                                                                                                                                                                                                                                                                                                          to: "1 1 1", 
                            
                                                                                                                                                                                                                                                                                                                                                                                                                      }} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ></Entity> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </Entity> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <Entity 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 primitive="a-box" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          color={COLORS[colorIndex]} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   depth="4" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            height="4" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     width="4" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              position={{ x: 0.0, y: 4, z: -10.0 }} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       animation__rotate={{ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  property: "rotation", 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             dur: 20000, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        easing: "linear", 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   loop: true, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              to: { x: 360, y: 360, z: 0 }, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       }} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                class="raycasterable" 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         events={{ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    click: () => { 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 setColorIndex((colorIndex + 1) % COLORS.length); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            /> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </Scene> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ); 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }