import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { useState, useEffect  } from "preact/hooks"; 
import { Toptext } from "./Toptext";
import { StatusMarker } from "./StatusMarker";
import { BatteryMarker } from "./Battery";
  
  export function Status({ neurosity }) {
    const [status, setStatus] = useState(null);
    const [info, setInfo] = useState(null);

    const { state, charging, battery, sleepMode } = status || {};
  
    useEffect(() => {
      if (!neurosity) {
        return;
      }
      //Get status info
      const subscription = neurosity.status().subscribe((status) => {
        setStatus(status);
      });
      
      //get device info
      const setDeviceInfo = setInterval(async ()=>{
        let deviceInfo = await neurosity.getInfo();
        setInfo(deviceInfo);
        console.log(info);
      }, 5000);

      return () => {
        clearInterval(setDeviceInfo);
        subscription.unsubscribe();
      };
    }, [neurosity]);
  
    if (!status) {
      return <div>Connecting to device...</div>;
    }
  
    return (
      <>
        {info ? <Toptext textValue={info.deviceNickname} /> : <Toptext textValue={"Device name not availiable"} />}
        
        <StatusMarker state={state} />
        {state !== "offline" ? (
        <BatteryMarker charging={charging} battery={battery} />
        ): null}
        </>
    );
  }/*
 
        {state !== "offline" ? (
          <div className="status-item status-battery">
            <span role="img" aria-label="Electricity Emoji">
              &#x26A1;
            </span>
            {charging ? " Charging " : " Charged "}
            {battery}%
          </div>
        ) : null}
        {sleepMode && state !== "offline" ? (
          <div className="status-item status-sleep-mode">
            <span role="img" aria-label="Moon Emoji">
              &#127769;
            </span>
            {" Sleep mode "}
          </div>
        ) : null}
  */ 