import { h, Fragment } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 
import { Entity } from "aframe-react";



export function InfoBox( { neurosity } ) {
    const [info, setInfo] = useState({});
    useEffect(async () => {
      if (!neurosity) {
        return;
      }
      let deviceInfo = await neurosity.getInfo();
      setInfo(deviceInfo);
    }, [neurosity])
   
    return (
        <Entity>
        { Object.keys(info).map((keyName, i)=> (
        <Entity 
            className="TopText" 
            primitive="a-text" 
            position={"1.5 "+ -i*.1 +" -1.5"}
            rotation="0 -15 0"
            width=".5"
            align="right" 
            value={keyName + " : " + info[keyName]} 
            />
        ))}
            </Entity>
    )};
