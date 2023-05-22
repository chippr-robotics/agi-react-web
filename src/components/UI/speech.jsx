import * as annyang from "annyang";
import "aframe-speech-command-component";
import { h } from "preact"; 
import { Entity} from "aframe-react"; 
import { useContext, useState } from "preact/hooks"; 
import {ContextCounter} from '../../index';
import "../../assets/af_components/voice-nav";

export default function Menu() {   
    const { increment, decrement, home } = useContext(ContextCounter);
    let nextCommand = [
        "command: next;",
        "type: function;",
        "targetComponent: voice-nav;",
        "function:  increment  ;"
    ]
    let backCommand = [
        "command: back;",
        "type: function;", 
        "targetComponent: voice-nav;",
        "function: decrement;"
    ]
    let restartCommand = [
        "command: restart;",
        "type: function;",
        "targetComponent: voice-nav;",
        "function: home ;"
    ]
    
    return (                           
        <Entity
            > 
            <Entity
                id = "annyang"
                annyang-speech-recognition 
            />         
           <Entity 
                id="voice"
                voice-nav
                speech-command__next={nextCommand.join("")}
                speech-command__back={backCommand.join("")}
                speech-command__restart={restartCommand.join("")}
                events={{
                    next : increment,
                    back : decrement,
                    restart : home  
                }}
                />
    </Entity>   
    )
}