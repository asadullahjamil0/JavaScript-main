import { useState } from "react";
import "./App.css";

function Check(props) {
  const [count, setCount] = useState(0);
  let name = "Asad Ullah Jamil Ch";
  const car_obj = {
    name: "Ford",
    year: "2019",
  };
  return (
    <>
      <h1>My name is {name}</h1>
      <p>2 + 3 = {2 + 3}</p>
      <h1>
        {car_obj.name} {car_obj.year}
      </h1>
      <h1>{10 > 40 ? "Greater" : "Less"}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count{count}
      </button>
      <h1>This is props : {props.year}</h1>
      <h3>This is obj : {props.brand.name}</h3>
    </>
  );
}

export default Check;
