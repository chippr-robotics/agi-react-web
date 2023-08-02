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
   return (
      <Scene >
         <ContextCounter.Provider value={counter}>
          <Environment />
          <User />
         </ContextCounter.Provider>
      </Scene> 
   );
};
render(<App />, document.body);