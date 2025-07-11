import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DefaultExport, NamedExport2 } from "./namedExport";
import ClassComponent, { FunctionComponent } from "./ClassComponent";
import ConsructorInClass from "./ConsructorInClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <DefaultExport />
      <NamedExport2 />
      <ClassComponent name="Asad Ullah Jamil" />
      <ClassComponent name="Hafeez">
        <h2>This is Children props</h2>
        <button>Submit</button>
        <ul>
          <li>Zain</li>
          <li>Mubashir</li>
          <li>Haider</li>
        </ul>
      </ClassComponent>
      <FunctionComponent />
      <ConsructorInClass name="Asad Ullah" />
    </>
  );
}

export default App;
