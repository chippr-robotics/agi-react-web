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
import DisplayBoard from "./components/displayBoard";
import Menu from "./components/UI/speech";

export const ContextCounter = createContext(null);
var titleSlides = [1, 4, 11, 19, 25];

function App() {
   const [titleIndex, setTitleIndex] = useState(1); 
   const [slideIndex, setSlideIndex] = useState(2);
      
   function increment() {
      if(titleSlides.includes(slideIndex)){
          setTitleIndex(slideIndex);
          setSlideIndex((slideIndex + 1) );
      } else {
          setSlideIndex((slideIndex + 1) );
      };        
   }
   
   function decrement() {
      if(titleSlides.includes(slideIndex)){
          setTitleIndex(slideIndex);
          setSlideIndex((slideIndex - 1) );
      } else {
          setSlideIndex((slideIndex - 1) );
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
            <DisplayBoard />
            <Menu />
            <User />
            <Entity primitive="a-sky" color="grey" />
         </ContextCounter.Provider>
      </Scene> 
   );
};
render(<App />, document.body);