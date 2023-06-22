import { h } from "preact"; 
import { Entity } from "aframe-react";
import { useState, useEffect  } from "preact/hooks"; 

const statesLabels = {
    booting: "Starting OS...",
    shuttingOff: "Shutting off...",
    updating: "Updating OS...",
    online: "Online",
    offline: "Offline"
  };
  
  const stateColors = {
    booting: "darkslategrey",
    shuttingOff: "darkslategrey",
    updating: "orange",
    online: "limegreen",
    offline: "crimson"
  };
  
  function getStatusColor(state) {
    if (state in stateColors) {
      return stateColors[state];
    }
  
    return stateColors.offline;
  }
  
  export function Status({ neurosity, info }) {
    const [status, setStatus] = useState(null);
    const { state, charging, battery, sleepMode } = status || {};
  
    useEffect(() => {
      if (!neurosity) {
        return;
      }
  
      const subscription = neurosity.status().subscribe((status) => {
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
      <Entity>
        {info ? <Entity className="deviceName" primitive = >{info.deviceNickname}</h3> : null}
        
        <div className="status-item status-state">
          <span
            className="status-indicator"
            style={{ background: getStatusColor(state) }}
          ></span>
          {state in statesLabels ? statesLabels[state] : state}
        </div>
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
      </Entity>
    );
  }