import { useEffect } from "preact/hooks";
import { navigate } from "@reach/router";

export function Logout({ crown, resetState }) {
  useEffect(() => {
    if (crown) {
      crown.logout().then(() => {
        resetState();
        navigate("/");
      });
    }
  }, [crown, resetState]);

  return null;
}