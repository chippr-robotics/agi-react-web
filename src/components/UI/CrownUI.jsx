import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { useState, useEffect  } from "preact/hooks"; 
import { Toptext } from "./other/Toptext";
import { StatusMarker } from "./crown/StatusMarker";
import { BatteryMarker } from "./crown/Battery";
import { SleepMarker } from "./crown/SleepMarker";
import { InfoBox } from "./crown/InfoBox";
import { MiniDevice } from "./crown/MiniDevice";
import { Band } from "./crown/mini/Band";
  
  export default function Crown({ neurosity }) {
    const [status, setStatus] = useState(null);

    const { state, charging, battery, sleepMode } = status || {};
  
    useEffect(() => {
      if (!neurosity) {
        return;
      }
      //Get status info
        
      const subscription = neurosity.status().subscribe(async (status) => {
        setStatus(status);
      });
      
      
      return () => {
        subscription.unsubscribe();
      };
    }, [neurosity]);
  
    if (!status) {
      return <div>Connecting to device...</div>;
    } 
    return (
      <Entity
      visible="true">
        <StatusMarker state={state} />
        { sleepMode ? <SleepMarker /> : null}
        <InfoBox neurosity={neurosity} />
        <BatteryMarker charging={charging} battery={battery} />
              
        <MiniDevice neurosity={neurosity} />
        <Band neurosity={neurosity} />
      </Entity>

    );
  }