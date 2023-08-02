import { h, render,createContext} from "preact"; 
import { useState , useMemo} from "preact/hooks"; 
import "preact/devtools"; 
import "./styles/index.css"; 
import "aframe"; 
import { Entity, Scene } from "aframe-react";
import "aframe-event-set-component" 
import "./assets/af_components/voice-nav";

//Custom components

import User from "./components/User";
import Environment from "./styles/environment";


export const ContextCounter = createContext(null);


function App() {
   const [playSound, setPlaySound] = useState(false); 
   const [boxColor, setBoxColor] = useState("red"); 
   const colors = ["red","blue", "green", "orange"];
   function handleClick(){
      let newColor = (colors.indexOf(boxColor) + 1) % colors.length
      setBoxColor(colors[newColor]);
      let audio = document.querySelector("#whale");
      audio.click();   
   }
   let counter ={};
   return (
      <Scene >
         <ContextCounter.Provider value={counter}>
          <Environment />
          <Entity 
            primitive="a-box" 
            position="1 1 1"
            color= {boxColor}
            class="raycasterable" 
            events = {{
               click: handleClick
            }}
            animation__click="startEvents: click; property: position; to: 30 0 0; dir:alternate; loop: false; dur: 10000" >
            <Entity 
            id="whale"
            primitive="a-sound"
            src= "url(./dist/assets/sound/whale.mp3)" 
            autoplay= "false" 
            loop="false"
            on="click"
            />
          </Entity>
            
          <User />
         </ContextCounter.Provider>
      </Scene> 
   );
};
render(<App />, document.body);