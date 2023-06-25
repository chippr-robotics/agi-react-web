import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";

const statesLabels = {
    booting: "Starting OS...",
    shuttingOff: "Shutting off...",
    updating: "Updating OS...",
    online: "ONLINE",
    offline: "OFFLINE"
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


export function StatusMarker({ state }) {
    return (
        
        <Entity 
            className="StatText" 
            primitive="a-text" 
            position="2 1.65 -2.75"
            align="left"
            width="2" 
            color={getStatusColor(state)}
            value={state in statesLabels ? statesLabels[state] : state} />
        )};