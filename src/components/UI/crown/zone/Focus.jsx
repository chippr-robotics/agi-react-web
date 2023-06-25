import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

import { useState, useEffect  } from "preact/hooks"; 
import { CircleDial } from "./CircleDial";

//smooth
function setItem (array, item, length) {
    array.unshift(item) > length ?  array.pop() : null
}


export function Focus({neurosity}) { 
    const [signal, setSignal] = useState([]);
    const [maxS, setMaxS] = useState(0);
    const [avgAlpha, setAvgAlpha] = useState(0);
    
    let signalArray = [];
    
    useEffect(() => {
        if (!neurosity) {
          return;
        }
        //Get status info
        const subscription = neurosity.focus().subscribe((focus) => {
           let fs = Number(focus.probability.toFixed(2) * 100);
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
            <CircleDial dialValue={signal} name="FOCUS" location="1 0 1" />
    )};
