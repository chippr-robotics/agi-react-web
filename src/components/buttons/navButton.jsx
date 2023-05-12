import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 

export function NavButton(_action) {   
      return(
        <Entity 
                primitive="a-box"  
                visible="true" 
                depth=".05" 
                height=".15" 
                width=".15" 
                color="grey"
                class="raycasterable" 
                {..._action}
        />
    );
}