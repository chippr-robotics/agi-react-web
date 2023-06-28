//import preact
import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks";
import { navigate } from "@reach/router";

//import for aframe-react
import "aframe"; 
import { Entity, Scene } from "aframe-react";

//Custom components
import User from "../components/User";
import Menu from "../components/UI/speech";
import "aframe-event-set-component" 
import "../assets/js/aframe-environment"; 
import "../assets/af_components/ar-components";
import "../assets/af_components/voice-nav";
import {Lamp} from "../components/props/lamp"
import { BarGraph } from "../components/UI/metrics/BarGraph";



export function Dojo({ user, neurosity }) {
    const [calm, setCalm] = useState(0);
    
    let myArray= [];
    function setItem (array, item, length) {
      array.unshift(item) > length ?  array.pop() : null
    }
    useEffect(() => {
      if (!user || !neurosity) {
        return;
      }
      
      const subscription = neurosity.focus().subscribe((calm) => {
        setItem(myArray, Number(calm.probability.toFixed(2)), 100);
        let sum = 0
        myArray.forEach((number) => {
          sum += number;
        });
        let avg = sum / myArray.length;
        setCalm(avg);
      
      });
  
      return () => {
        subscription.unsubscribe();
      };
    }, [user, neurosity]);
    
    

   function handleClick(){
     navigate("/logout")
    }
    const ballTracker = '0 '+ calm*5 +' -2';
    return (
      <Scene 
        webxr="requiredFeatures: hit-test,local-floor;
        optionalFeatures: dom-overlay,unbounded;
        overlayElement: #overlay;">
      <Entity>
          <Entity
          primitive="a-sphere"
          position={ballTracker}
          radius=".05"
          color="blue"
          ></Entity>
         
          <Entity
            primitive="a-light"
            type="ambient"
            ></Entity>
          <Entity
            primitive="a-box"
            id="exit"
            position="0 0 -1"
            class="raycasterable" 
            events={{ 
                click: handleClick
            }} 
            visible="false"
            />
            <BarGraph valueArray={[2,3,4,5,6]} value="test bars" location="0 2 -1" />
            <User neurosity={neurosity} /> 
            </Entity>
            </Scene>
    );
  }
  /** <main className="main-container">
        {user ? <Nav neurosity={neurosity} /> : null}
        <div className="calm-score">
          &nbsp;{calm * 100}% <div className="calm-word">Calm</div>
        </div>
      </main> 
      <Entity 
              id="floor"
                primitive="a-box"
                position="0 -2 0"
                rotation="-90 0 0"
                height="100"
                width="100"
                color="blue"
                />
      */