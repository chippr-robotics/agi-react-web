import { h, Fragment } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 
import { Entity } from "aframe-react";



export function InfoBox( { neurosity, expanded } ) {
    const [info, setInfo] = useState({});
    useEffect(async () => {
      if (!neurosity) {
        return;
      }
      let deviceInfo = await neurosity.getInfo();
      setInfo(deviceInfo);
    }, [neurosity])
  
    if(expanded == "true"){
      return (
        <Entity
        position="1.8 0 -1.5"
        visible="true"
        >
        { Object.keys(info).map((keyName, i)=> (
        <Entity 
            className="TopText" 
            primitive="a-text" 
            position={"0 "+ -i*.1 +" 0"}
            width="1.5"
            align="right" 
            value={keyName + " : " + info[keyName]} 
            />
        ))}
            </Entity>

    )}
    //return the minimum info
    return (
      <Entity
      position="1.28 1.1 -1.5"
      visible="true"
      >
        <Entity 
          primitive="a-plane"
          height=".005"
          width=".2"
          position="0 -.04 0" 
          color="white"
          />
        <Entity 
          className="TopText" 
          primitive="a-text" 
          position="0 0 0"
          width="1"
          align="center" 
          value={"Device: "+ info["deviceNickname"]} 
          color="silver"
          />
          </Entity>
  )};
