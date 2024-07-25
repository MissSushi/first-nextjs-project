"use client";

import { useEffect, useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow((show) => !show)}>
        Toggle
      </button>
      {show ? <Child /> : null}
    </>
  );
};

const Child = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Welt. (Child)");
  }, []);

  return (
    <div>
      <button type="button" onClick={() => setShow((show) => !show)}>
        Toggle (Child)
      </button>
      {show ? "Hallo Welt" : null}
    </div>
  );
};

export default Main;

// const CounterPage = () => {
//   const [counter, setCounter] = useState(0);
//   const [server, setServer] = useState(0);

//   useEffect(() => {
//     console.log("effect");

//     return () => console.log("blub");
//   }, [server]);

//   return (
//     <>
//       <button type="button" onClick={() => setCounter((c) => c + 1)}>
//         {counter} mal geklickt.
//       </button>
//       <button onClick={() => setServer(Math.random())}>
//         Server wechseln ({server})
//       </button>
//     </>
//   );
// };

// export default CounterPage;
