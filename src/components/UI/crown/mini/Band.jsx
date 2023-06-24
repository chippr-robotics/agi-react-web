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
        delta:   [ -0.2,   0, -3.5],
        theta:   [ -0.1,   0, -3.55],
        alpha:   [ 0 ,     0, -3.51],
        beta:    [ 0.1,    0, -3.55],
        gamma:   [ 0.2,    0, -3.5],
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
    <Entity
    rotation="0 40 0">
        { Object.keys(signal).map((i)=> (          
        <Entity>
            <Probe 
            value={i} 
            probeColor="red" 
            position={getPosition(i)} 
            />
            <Entity
            primitive="a-text" 
            value={i}
            color="white"
            width="3"
            align="left"
            rotation="0 0 90"
            position={getPosition(i)}
            />
        </Entity>
            ))}
    </Entity>
    )};
