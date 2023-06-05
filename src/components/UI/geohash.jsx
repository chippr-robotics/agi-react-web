import { h } from "preact"; 
import { Entity} from "aframe-react"; 
import { useContext, useState } from "preact/hooks"; 
import {ContextCounter} from '../../index';
import { coordAt, emojiAt } from "geohash-emoji";
export default function Geohash() {   
    const [ emoji, SetEmoji ] = useState(0);
    SetEmoji(coordAt(40.1, -93.7));
    console.log('emoji');
    console.log(emoji);
    const loc = "emoji:"+emoji ;
    return (                           
        <Entity
            > 
            <Entity
                id = "geohash"
                primitive="a-text" 
                depth="1" 
                height="1" 
                width="1" 
                value={loc}
                position="0 .5 -2" 
                rotation=" 0 0 0"
            />         
           
    </Entity>   
    )
}