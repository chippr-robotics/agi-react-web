import { h } from "preact"; 
import { useState, useEffect  } from "preact/hooks"; 

import { Nav } from "../components/UI/Nav";

export function Calm({ user, neurosity }) {
  const [calm, setCalm] = useState(0);

  useEffect(() => {
    if (!user || !neurosity) {
      return;
    }

    const subscription = neurosity.calm().subscribe((calm) => {
      setCalm(Number(calm.probability.toFixed(2)));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [user, neurosity]);

  return (
    <main className="main-container">
      {user ? <Nav neurosity={neurosity} /> : null}
      <div className="calm-score">
        &nbsp;{calm * 100}% <div className="calm-word">Calm</div>
      </div>
    </main>
  );
}