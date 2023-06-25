
//import things for preact
import { h, render, createContext} from "preact"; 
import { useState , useMemo, useEffect } from "preact/hooks";
import { Router, navigate } from "@reach/router";
import "preact/devtools"; 
import "./styles/index.css"; 
import useLocalStorage from "use-local-storage";
import { Entity, Scene } from "aframe-react";


// BCI - neurosity crown
import { Neurosity } from "@neurosity/sdk";

//pages
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Dojo } from "./pages/Dojo";

export const ContextCounter = createContext(null);

function App() {
   const [neurosity, setNeurosity] = useState(null);
   const [user, setUser] = useState(null);
   const [deviceId, setDeviceId] = useLocalStorage("deviceId");
   const [loading, setLoading] = useState(true);
   
   //sync the device id 
   useEffect(() => {
      if (deviceId) {
        const neurosity = new Neurosity({ deviceId });
        setNeurosity(neurosity);
      } else {
        setLoading(false);
      }
    }, [deviceId]);

   //wait until we have a device before starting
   useEffect(() => {
      if (!neurosity) {
        return;
      }
    
      const subscription = neurosity.onAuthStateChanged().subscribe((user) => {
        if (user) {
          setUser(user);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    
      return () => {
        subscription.unsubscribe();
      };
    }, [neurosity]);

   // If already authenticated, redirect user to the Calm page
   useEffect(() => {
      if (user != null) {
      navigate("/dojo");
      }
   } , [user]);
   
   return (
    <Router>
      <Login
        path="/"
        neurosity={neurosity}
        user={user}
        setUser={setUser}
        setDeviceId={setDeviceId}
      />
      <Logout
      path="/logout"
      neurosity={neurosity}
      resetState={() => {
        setNeurosity(null);
        setUser(null);
        setDeviceId("");
      }}
      />
 
      <Dojo 
      path="/dojo" 
      neurosity={neurosity} 
      user={user} 
      />
      </Router> 
    
   );
};


render(<App />, document.body);