import { useEffect } from "preact/hooks";
import { navigate } from "@reach/router";

export function Logout({ neurosity, resetState }) {
  useEffect(() => {
    if (neurosity) {
      neurosity.logout().then(() => {
        resetState();
        navigate("/");
      });
    }
  }, [neurosity, resetState]);

  return null;
}