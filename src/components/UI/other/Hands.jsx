import { h, Fragment } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
import "super-hands";


export default function Hands() {
        return (
            <>    
                <Entity
                    sphere-collider="objects: a-box"
                    super-hands 
                    hand-controls="colliderEvent: raycaster-intersection;
                    colliderEventProperty: els;
                    colliderEndEvent:raycaster-intersection-cleared;
                    colliderEndEventProperty: clearedEls; "
                    raycaster="
                        showLine: true;
                        objects: .raycasterable" 
                    />
                    
            </>           
       ); 
}