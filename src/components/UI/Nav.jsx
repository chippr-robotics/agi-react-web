import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 

import { navigate } from "@reach/router";




export function Nav({ neurosity }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!neurosity) {
      return;
    }

    neurosity.getInfo().then((info) => {
      setInfo(info);
    });
  }, [neurosity]);

  return (
    <nav className="card">
      <Status neurosity={neurosity} info={info} />
      <button onClick={() => navigate("/logout")} className="card-btn">
        Logout
      </button>
    </nav>
  );
}