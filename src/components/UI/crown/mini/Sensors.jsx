import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { Probe } from "./Probe";
import { useState, useEffect  } from "preact/hooks"; 



export function Sensors({neurosity}) { 
    const [signal, setSignal] = useState([]);
    
    useEffect(() => {
        if (!neurosity) {
          return;
        }
        //Get status info
        const subscription = neurosity.signalQuality().subscribe((signalQuality) => {
            setSignal(signalQuality);  
          });
        return () => {
            subscription.unsubscribe();
        };
      }, [neurosity]);
    
    const sensorPosition = {
        CP3:    " -.2 -.1 .15",
        C3:     " -.2   0 .2",
        F5:     " -.3  .2  0.05",
        PO3:    "-.15 -.3 0",
        PO4:    " .15 -.3 0",
        F6:     "  .3 .2 0.05",
        C4:     "  .2  0 .2",
        CP4:    " .2 -.1 .15"
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

    const textColors = {
        great: "white",
        good: "black",
        bad: "black",
        noContact: "white",
    };

    const statusColors = {
        great: "green",
        good: "orange",
        bad: "red",
        noContact: "black",
    };

    function getPosition(name){
        //console.log(name);
        return sensorPosition[name];
    }

    return (
    <Entity>
        { Object.keys(signal).map((i)=> (
        <Entity>
       
        <Probe 
            value={sensorName[i]} 
            probeColor={statusColors[signal[i].status]} 
            textColor= {textColors[signal[i].status]}
            position={getPosition(sensorName[i])} 
            />
        </Entity>
            ))}
    </Entity>
    )};
