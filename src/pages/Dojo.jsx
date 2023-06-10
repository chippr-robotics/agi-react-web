//import preact
import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks";

//import for aframe-react
import "aframe"; 
import { Entity, Scene } from "aframe-react";

//Custom components
import User from "../components/User";
import Menu from "../components/UI/speech";
import "aframe-event-set-component" 
import "../assets/js/aframe-environment"; 
import "../assets/af_components/ar-components";
import "../assets/af_components/voice-nav";
import Lamp from "../components/props/lamp";

export function Dojo({ user, neurosity }) {
    const [calm, setCalm] = useState(0);
    console.log(`user: ${JSON.stringify(user)}`)
    useEffect(() => {
      if (!user || !neurosity) {
        return;
      }
  
      const subscription = neurosity.calm().subscribe((calm) => {
        setCalm(Number(calm.probability.toFixed(2)));
      });
  
      return () => {
        subscription.unsubscribe();
      };
    }, [user, neurosity]);

    const ground = '0 '+ calm +' -2';
    return (
        <Scene >
           <User />
           <Entity 
            primitive="a-sphere"
            position={ground} 
            color="red"
            radius=".2"
            />
            <Lamp neurosity={neurosity} />
           
            <Entity
            primitive="a-light"
            type="ambient"
            />
            <Entity 
                primitive="a-box"
                position="0 -2 0"
                rotation="-90 0 0"
                height="100"
                width="100"
                color="blue"
                />
            
           <Entity primitive="a-sky" color="lightblue" />
     </Scene>
    );
  }
  /** <main className="main-container">
        {user ? <Nav neurosity={neurosity} /> : null}
        <div className="calm-score">
          &nbsp;{calm * 100}% <div className="calm-word">Calm</div>
        </div>
      </main> */