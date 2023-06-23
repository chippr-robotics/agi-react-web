import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { Probe } from "./Probe";
import { useState, useEffect  } from "preact/hooks"; 

//smooth
function setItem (array, item, length) {
    array.unshift(item) > length ?  array.pop() : null
}


export function Band({neurosity}) { 
    const [signal, setSignal] = useState([]);
    const {alpha , beta, delta, gamma, theta } = signal || {};
    const [avgAlpha, setAvgAlpha] = useState(0);
    
    let alphaArray = [];
    
    useEffect(() => {
        if (!neurosity) {
          return;
        }
        //Get status info
        const subscription = neurosity.brainwaves("powerByBand").subscribe((brainwaves) => {
           setSignal(brainwaves.data); 
           //setItem(alphaArray, Number(brainwaves.roll), len);
          });
          console.log(subscription);
        return () => {
            subscription.unsubscribe();
        };
      }, [neurosity]);
    
    const bandPosition = {
        delta:   [-2,   0, -2],
        theta:   [-1.8, 0, -2],
        alpha:   [-1.6, 0, -2],
        beta:    [-1.4, 0,-2],
        gamma:   [-1.2, 0, -2],
    };

    const sensorName = {
        0 : "CP3",
        1: "C3",
        2: "F5",
        3: "PO3",
        4: "PO4",
        5: "F6",
        6: "C4",
        7: "CP4"
    };


    function getPosition(name){
        let startP = bandPosition[name];

        let valueP = " " + startP[0] + " " + startP[1] + " " + startP[2]
        return valueP;
    }

    return (
    <Entity>
        { Object.keys(signal).map((i)=> (          
       <Probe 
            value={i} 
            probeColor="red" 
            position={getPosition(i)} 
            />
            ))}
    </Entity>
    )};
