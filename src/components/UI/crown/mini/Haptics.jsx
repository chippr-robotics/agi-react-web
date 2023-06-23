import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { Probe } from "./Probe";



export function Haptics({neurosity}) { 
    const effects = neurosity.getHapticEffects();
    
    async function vibrate(){
    const result = await neurosity.haptics({
        P7: [
            effects.transitionRampUpLongSmooth1_0_to_100,
            effects.transitionRampDownLongSmooth1_100_to_0,
            effects.transitionRampUpLongSmooth1_0_to_100,
            effects.transitionRampDownLongSmooth1_100_to_0,
            effects.transitionRampUpLongSmooth1_0_to_100,
            effects.transitionRampDownLongSmooth1_100_to_0,
            effects.longDoubleSharpClickStrong1_100
          ]
      });
      console.log(result);
    }

    return (
    <Entity
    rotation="15 0 0">
        <Probe 
            value="P7" 
            textColor="black" 
            probeColor="white"
            position= "-.25 -.4 .2" 
            />
         
        <Probe 
            value="P8" 
            textColor="black" 
            probeColor="white"
            position=".25 -.4 .2" 
            />
    </Entity>
    )};
