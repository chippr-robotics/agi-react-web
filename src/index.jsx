import { h, render,createContext} from "preact"; 
import { useState , useMemo} from "preact/hooks"; 
import "preact/devtools"; 
import "./styles/index.css"; 
import "aframe"; 
import { Entity, Scene } from "aframe-react";
import "aframe-event-set-component" 
import "./assets/js/aframe-environment"; 
import "./assets/af_components/ar-components"
//import "./assets/lib"
import {Environment} from "./styles/environment";

//Custom components

import User from "./components/User";
import ARTarget from "./components/AR";
import NavButtons from "./components/navButtons";

export const ContextCounter = createContext(null);
var titleSlides = [1, 4, 11, 19, 25];

function App() {
   const [titleIndex, setTitleIndex] = useState(1); 
   const [slideIndex, setSlideIndex] = useState(2);
      
   function increment() {
      if(titleSlides.includes(slideIndex)){
          setTitleIndex(slideIndex);
          setSlideIndex((slideIndex + 1) % 20);
      } else {
          setSlideIndex((slideIndex + 1) % 20);
      };        
   }
   
   function decrement() {
      if(titleSlides.includes(slideIndex)){
          setTitleIndex(slideIndex);
          setSlideIndex((slideIndex - 1) % 20);
      } else {
          setSlideIndex((slideIndex - 1) % 20);
      };        
   }
   
   function home(){
      setTitleIndex(1);
      setSlideIndex(2);
   }
   
   const counter = useMemo(() => {
      return { titleIndex, slideIndex, increment, decrement, home};
   }, [slideIndex, titleIndex]);
      
   return (
      <Scene >
         <ContextCounter.Provider value={counter}>
            <NavButtons />
            <ARTarget />
            <User />
            <Entity light={{ type: "ambient", color: "#BBB" }} /> 
            <a-sky color="#ECFFEC" ></a-sky>
         </ContextCounter.Provider>
      </Scene> 
   );
};
render(<App />, document.getElementById("root"));