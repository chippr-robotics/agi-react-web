

import { h, Component } from 'preact'; 
import { Entity, Scene } from 'aframe-react'; 

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59'] 
      
class Main extends Component { 
     constructor(props) { 
          super(props) 
          this.state = { color: 'red' } 
     } 
                         
     changeColor() { 
          const colors = ['red', 'orange', 'yellow', 'green', 'blue'] 
          this.setState({ 
               color: colors[Math.floor(Math.random() * colors.length)] 
           }) 
      } 
                                                       
     render() { 
          return ( 
               <Scene> 
                    <a-assets> 
                         <img crossOrigin id="groundTexture" src="img/floor.png" /> 
                         <img crossOrigin id="skyTexture" src="img/sky.png" /> 
                    </a-assets> 
                                                                                                                
                     <Entity 
                         primitive="a-plane" 
                         src="#groundTexture" 
                         rotation="-90 0 0" 
                         height="100" 
                         width="100" 
                    /> 
                    <Entity primitive="a-light" type="ambient" color="#445451" /> 
                    <Entity 
                         primitive="a-light" 
                         type="point" 
                         intensity="2" 
                         position="2 4 4" 
                         /> 
                    <Entity 
                         primitive="a-sky" 
                         height="2048" 
                         radius="30" 
                         src="#skyTexture" 
                         theta-length="90" 
                         width="2048" 
                         /> 
                    <Entity particle-system={{ preset: 'snow', particleCount: 2000 }}/>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    <Entity primitive="a-camera"> 
                         <Entity 
                              primitive="a-cursor" 
                              animation__click={{ 
                                   property: 'scale', 
                                   startEvents: 'click', 
                                   from: '0.1 0.1 0.1', 
                                   to: '1 1 1', 
                                   dur: 150 
                              }} 
                         /> 
                    </Entity> 
               </Scene> 
          ) 
     } 
}
export default Main