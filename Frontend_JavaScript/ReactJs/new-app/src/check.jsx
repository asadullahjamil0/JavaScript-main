import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Check() {
  const [count, setCount] = useState(0);
  let name = "Asad Ullah Jamil Ch";
  const car_obj = {
    name: "Ford",
    year: "2019",
  };
  return (
    <>
      <div>
        <h1>My name is {name}</h1>
        <p>2 + 3 = {2 + 3}</p>
        <h1>
          {car_obj.name} {car_obj.year}
        </h1>
        <h1>{10 > 40 ? "Greater" : "Less"}</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Check;
