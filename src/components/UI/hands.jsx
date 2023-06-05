import { h } from "preact"; 
import { Entity} from "aframe-react"; 
import { useContext, useState } from "preact/hooks"; 
import {ContextCounter} from '../../index';
import { coordAt, emojiAt } from "geohash-emoji";

export default function Hands() {   
    return (                           
        <Entity
            > 
            <Entity
                id = "leftHand"
                hand-tracking-controls="hand: left;"
            />  
            <Entity
                id = "rightHand"
                hand-tracking-controls="hand: right;"
            />           
        </Entity>   
    )
}