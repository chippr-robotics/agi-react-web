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
    const [avgInc, setAvgInc] = useState(0);
    
    const { acceleration, inclination, orientation, pitch, roll, x, y, z } = accelerometer || {};
    
    //smooth
    function setItem (array, item, length) {
        array.unshift(item) > length ?  array.pop() : null
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
            setItem(incArray, Number(acc.inclination), len);
            (acc.acceleration > 1.1) ? console.log(acc.acceleration  + " x: " + acc.x + " y: " + acc.y + " z: " + acc.z) : null;
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
          sum3 += number;
        });
        setAvgRoll(sum1 / len);
        setAvgPitch(sum2 / len);
        setAvgInc(sum3 / len);
        });
          
        return () => {
            subscription.unsubscribe();
        };
      }, [neurosity]);
    function getRotation(){
        //adjust rotation elements by some bias to make it feel right
        let ort = 1;
        let xRoll = -70   ;
        let yRoll= avgPitch * -3 ; 
        let zRoll= avgPitch * 3;
        //console.log(avgRoll + " " + avgPitch + " " + avgInc)
        
        //bi tilt right
        let rotation = "" + xRoll + " " + yRoll  + " " + zRoll; // 0 pitch
        return rotation.toString();
    }
    return (
     
      <Entity 
          position="-1 -1 -2"
          rotation={getRotation()}>
        <Orientate  / > 
        <Haptics neurosity={neurosity} />
        <Sensors neurosity={neurosity} />
        
        </Entity>
     )};
