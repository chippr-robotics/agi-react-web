import { h, render } from "preact"; 
import "preact/devtools"; 
import "./styles/index.css"; 
import "aframe"; 
import { Scene } from "aframe-react";
import "aframe-event-set-component" 
import "./assets/js/aframe-environment"; 
//Custom components
import App from "./components/App"; 
import User from "./components/User";
import Tree from "./components/Tree";

render( 
   <div className="app"> 
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
         <Tree />
         <User />
         <App />
         <Entity light={{ type: "ambient", color: "#BBB" }} /> 
      </Scene> 
   </div>, 
   document.getElementById("root") 
);