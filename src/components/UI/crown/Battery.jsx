import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

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

export function BatteryMarker({ charging, battery }) {
    return (
        <>
        <Entity 
            className="StatText" 
            primitive="a-text" 
            position="2 2 -3"
            rotation="0 -15 0"
            align="center" 
            value={charging ? " Charging " : " Charged "} />
        <Entity 
            className="StatText" 
            primitive="a-text" 
            position="2 1.75 -3"
            rotation="0 -15 0"
            align="center" 
            value={battery + "%"} />
        </>
    )};