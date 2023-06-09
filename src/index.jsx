
//import things for preact
import { h, render, createContext} from "preact"; 
import { useState , useMemo, useEffect } from "preact/hooks";
import { Router, navigate } from "@reach/router";
import "preact/devtools"; 
import "./styles/index.css"; 
import useLocalStorage from "use-local-storage";

//import for aframe-react
import "aframe"; 
import { Entity, Scene } from "aframe-react";

//pages
import { Login } from "./pages/Login";

//Custom components
import User from "./components/User";
import Menu from "./components/UI/speech";
import "aframe-event-set-component" 
import "./assets/js/aframe-environment"; 
import "./assets/af_components/ar-components";
import "./assets/af_components/voice-nav";


export const ContextCounter = createContext(null);

function App() {
   const [neurosity, setNeurosity] = useState(null);
   const [user, setUser] = useState(null);
   const [deviceId, setDeviceId] = useLocalStorage("deviceId");
   const [loading, setLoading] = useState(true);
     
   return (
      <Router>
      <Login
        path="/"
        neurosity={neurosity}
        user={user}
        setUser={setUser}
        setDeviceId={setDeviceId}
      />
      </Router> 
   );
};
/*
      <Scene >
         <ContextCounter.Provider value={counter}>
            <User />
            <Entity primitive="a-sky" color="grey" />
         </ContextCounter.Provider>
      </Scene>*/

render(<App />, document.body);