import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

import { useState, useEffect  } from "preact/hooks"; 

//smooth
function setItem (array, item, length) {
    array.unshift(item) > length ?  array.pop() : null
}


export function Calm({neurosity}) { 
    const [signal, setSignal] = useState([]);
    const [maxS, setMaxS] = useState(0);
    const [avgSignal, setAvgSignal] = useState(0);
    
    let signalArray = [];
    
    useEffect(() => {
        if (!neurosity) {
          return;
        }
        //Get status info
        const subscription = neurosity.calm().subscribe((calm) => {
          let fs = Number(calm.probability.toFixed(2)); 
          if(maxS < fs ){ setMaxS(fs) ;}
          setItem(signalArray, fs, 10);
          let sum = 0;
          signalArray.forEach((number) => {
            sum += number;
          });
          setSignal(sum / 10);
          });
          
        return () => {
            subscription.unsubscribe();
        };
      }, [neurosity]);
    
    return (
        <Entity
        position="-.5 0 0">
            <Entity
            primitive="a-text" 
            value="CALM >"
            color="white"
            width="3"
            align="center"
            position={"0 "+ signal +" 0"}
            />
        
            <Entity
            primitive="a-text" 
            value="-->"
            color="white"
            width="3"
            align="left"
            position={".1 " + maxS.toString() + " 0.01"}
            />
        </Entity>
            
    )};
