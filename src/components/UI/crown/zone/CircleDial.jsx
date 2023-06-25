import { h, Fragment } from "preact"; 
import { Entity } from "aframe-react";
import { useState } from "preact/hooks"; 


export function CircleDial({dialValue, name, location}) {
    const [maxValue, setMaxValue] = useState(0);
    const [maxPos, setMaxPos] = useState(180);

    function setNewMax(){
        setMaxValue(dialValue);
        let rot = 90 + (dialValue / 100 *270)
        setMaxPos(rot);
    }

    function getTheta(){
        //start angle is 0
        //finish angle is 270
        if (dialValue > maxValue) setNewMax();
        let theta = dialValue / 100 * 270 
        return theta;
    }
    return (
        <Entity
        position={location}
        >
        <Entity
        id="value"
        primitive="a-text"
        value={dialValue+ "%"}
        width="12"
        color="white"            
        align="center"
        position="0 0 0"
    />
        
        <Entity  
            id="framering"
            primitive="a-torus" 
            radius="1"
            radius-tubular=".1"
            rotation="0 0 -90"
            arc="90"
            side="double"
            />
        <Entity  
            id="guidering"
            primitive="a-torus" 
            radius="1"
            radius-tubular=".01"
            rotation="0 0 -90"
            side="double"
            />
        <Entity  
            id="indicatorRing"
            primitive="a-torus" 
            radius="1"
            radius-tubular=".05"
            rotation="180 0 90"
            arc={getTheta()}
            color="lightblue"
            side="double"
            />
        <Entity 
            id="maxRing"
            primitive="a-torus" 
            radius="1"
            radius-tubular=".06"
            rotation={"180 0 " + maxPos}
            arc="2"
            color="darkblue"
            side="double"
            />
        <Entity 
            id="NameDisplay"
            position=".60 -.85 .25"
            >
            <Entity 
                primitive="a-circle"  
                radius=".35" 
                rotation="0 0 0"
                position="0 0 0"
                transparent="true"
                opacity=".8"
                color="lightgrey"             
                />
            <Entity 
                primitive="a-torus"  
                radius=".35"
                radius-tubular=".009"
                rotation="0 0 0"
                color="white"             
                />
            <Entity
                id="label"
                primitive="a-text"
                value={name}
                width="5"
                color="darkblue"            
                align="center"
                position="0 0 .030"
            />
            </Entity>
            <Entity 
            id="MaxValueDisplay"
            position=".88 -.25 .25"
            >
            <Entity 
                primitive="a-circle"  
                radius=".2" 
                rotation="0 0 0"
                position="0 0 0"
                transparent="true"
                opacity=".8"
                color="lightgrey"             
                />
            <Entity 
                primitive="a-torus"  
                radius=".2"
                radius-tubular=".005"
                rotation="0 0 0"
                color="white"             
                />
            <Entity
                id="label"
                primitive="a-text"
                value={maxValue}
                width="3"
                color="blue"
                position="0 0 0"            
                align="center"
            />        
            <Entity
                id="label"
                primitive="a-text"
                value="MAX"
                width="1"
                color="black"
                position="0 -.15 0"            
                align="center"
            />        
            </Entity>
        </Entity>
    )};
