//import preact
import { h, Fragment } from "preact"; 
import { useState, useEffect  } from "preact/hooks";

//import for aframe-react
import "aframe"; 
import { Entity } from "aframe-react";

const mapLength=8;
const mapWidth=4;



const maze = [ 
    {
        id: 0,

        position:"1, -1, 0" 
    },{
        id: 1,
        position:"0, -1, 0" 
    },{
        id: 2,
        position:"-1, -1, 0" 
    },{
        id: 3,
        position:"1, -1, -1" 
    },{
        id: 4,
        position:"0, -1, -1" 
    },{
        id: 5,
        position:"-1, -1, -1" 
    },{
        id: 6,
        position:"1, -1, -2" 
    },{
        id: 7,
        position:"0, -1, -2" 
    },{
        id: 8,
        position:"-1, -1, -2" 
    },{
        id: 9,
        position:"1, -1, -3" 
    }, {
        id: 10,
        position:"0, -1, -3" 
    },{
        id: 11,
        position:"-1, -1, -3" 
    },  
    {
        id: 12,
        position:"1, 0, 0" 
    },{
        id: 13,
        position:"0, -1, 0" 
    },{
        id: 14,
        position:"-1, 0, 0" 
    },{
        id: 15,
        position:"1, -1, -1" 
    },{
        id: 16,
        position:"0, -1, -1" 
    },{
        id: 17,
        position:"-1, -1, -1" 
    },{
        id: 18,
        position:"1, 0, -2" 
    },{
        id: 19,
        position:"0, 0, -2" 
    },{
        id: 20,
        position:"-1, 0, -2" 
    },{
        id: 21,
        position:"1, 0, -3" 
    }, {
        id: 22,
        position:"0, 0, -3" 
    },{
        id: 23,
        position:"-1, 0, -3" 
    },   
]

export default function Maze() {
    return (
        <Entity>
            {
                maze.map(block => { 
                    console.log(block)
                    return(
                    <Entity 
                        primitive="a-box"
                        position={ block.position}
                        depth="1" 
                        height="1" 
                        width="1"
                        color="red"
                        ></Entity>
                        )
                    })            
            }
        </Entity>
        );
};   
