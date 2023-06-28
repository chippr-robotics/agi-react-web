import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 

import { LoginForm } from "../components/LoginForm";



export function Login({ neurosity, user, setUser, setDeviceId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  useEffect(() => {
    if (!user && neurosity && email && password) {
      login();
    }
  
    async function login() {
      setIsLoggingIn(true);
      const auth = await neurosity.login({ email, password }).catch((error) => {
        setError(error.message);
      });
  
      if (auth) {
        setUser(auth.user);
      }
  
      setIsLoggingIn(false);
    }

  }, [email, password, neurosity, user, setUser, setError]);
  
  function onLogin({ email, password, deviceId }) {
    if (email && password && deviceId) {
      setError("");
      setEmail(email);
      setPassword(password);
      setDeviceId(deviceId);
    } else {
      setError("Please fill the form");
    }
  }

  return <LoginForm class="overlay" onLogin={onLogin} loading={isLoggingIn} error={error} />;
}