import { h, Fragment } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 
import { Entity } from "aframe-react";
import { Orientate } from "./mini/Orientate";
import { Haptics } from "./mini/Haptics";
import { Sensors } from "./mini/Sensors";
import { Band } from "./mini/Band";



export function MiniDevice( { neurosity } ) {
    const [accelerometer, setAccelerometer] = useState(null);
    const [avgRoll, setAvgRoll] = useState(0);
    const [avgPitch, setAvgPitch] = useState(0);
    const [avgInc, setAvgInc] = useState([]);
    
    const { acceleration, inclination, orientation, pitch, roll, x, y, z } = accelerometer || {};
    
    //smooth
    function setItem (array, item, length) {
        array.unshift(item) > length ?  array.pop() : null;
        
        return array;
    }
    let rollArray= [];
    let pitchArray= [];
    let incArray= [];

    useEffect(() => {
        if (!neurosity) {
          return;
        }
        //Get status info
        let len = 10;
        const subscription = neurosity.accelerometer().subscribe( (acc) => {
            setAccelerometer(acc);
            setItem(rollArray, Number(acc.roll), len);
            setItem(pitchArray, Number(acc.pitch), len);
            setAvgInc(setItem(incArray, [acc.acceleration, acc.x, acc.y, acc.z], 10));
            
            //smooth the movement
        let sum1 = 0;
        let sum2 = 0; 
        let sum3 = 0;
        rollArray.forEach((number) => {
          sum1 += number;
        });
        pitchArray.forEach((number) => {
          sum2 += number;
        });
        incArray.forEach((number) => {
          sum3 += number[0];
        });
        setAvgRoll(sum1 / len);
        setAvgPitch(sum2 / len);
      
        });
        return () => {
            subscription.unsubscribe();
        };
      }, [neurosity]);
    function getRotation(){
        //adjust rotation elements by some bias to make it feel right
        let xRot = -avgRoll    ;
        let yRot = -avgPitch  ; 
        let zRot = -avgPitch  ;
        //console.log(avgRoll + " " + avgPitch + " " + avgInc)
        
        //bi tilt right
        let rotation = "" + xRot + " " + yRot  + " " + zRot; // 0 pitch
        return rotation.toString();
    }
    return (
      <Entity 
          position="-1 -1 -2"
          rotation="-120 0 0"
          scale=".5 .5 .5" 
          >
    
          <Entity
          rotation={getRotation()}
          >
          <Orientate  / > 
          <Haptics neurosity={neurosity} />
          <Sensors neurosity={neurosity} />
        </Entity>
      </Entity>
     )};
