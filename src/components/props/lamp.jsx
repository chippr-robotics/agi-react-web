//import preact
import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks";

//import for aframe-react
import "aframe"; 
import { Entity } from "aframe-react";

let lamp_obj = "./dist/components/models/desk_lamp.obj";
let lamp_mtl = "./dist/components/models/desk_lamp.mtl";

const stateColors = {
    booting: "darkslategrey",
    shuttingOff: "darkslategrey",
    updating: "orange",
    online: "limegreen",
    offline: "crimson"
  };

  const statesLabels = {
    booting: "Starting OS...",
    shuttingOff: "Shutting off...",
    updating: "Updating OS...",
    online: "Online",
    offline: "Offline"
  };

  function getStatusColor(state) {
    if (state in stateColors) {
      return stateColors[state];
    }
  
    return stateColors.offline;
  }

export default function Lamp({ neurosity }) {   
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

    console.log(`status: ${status}`)
    console.log(`state: ${state}`)
    return(
        <Entity
         position="0 0 -1"
        >
            <Entity 
            primitive="a-obj-model"
            src={lamp_obj}
            mtl={lamp_mtl}
            />
             <Entity
            primitive="a-text"
            value={state in statesLabels ? statesLabels[state] : "Connecting to device..."}
            position="0 0 -1"
            />
            {state !== "offline" ? ( 
            
            <Entity
            primitive="a-light"
            type="point"
            position ="0 0 0"
            color={getStatusColor(status)}
            />) : null}
        </Entity>
    );
}