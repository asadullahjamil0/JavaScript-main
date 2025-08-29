import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function Check(props) {
  const [count, setCount] = useState(0);
  let name = "Asad Ullah Jamil Ch";
  const car_obj = {
    name: "Ford",
    year: "2019",
  };
  const friendsList = [];
  for (let i = 0; i < props.arr.length; i++) {
    friendsList.push(<li key={i}>{props.arr[i]}</li>);
  }

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
      <h3>This is number : {props.year}</h3>
      <h3>This is obj : {props.brand.name}</h3>
      <h3>This is string : {props.model}</h3>
      <h3>This is boolean: {props.isMarried.toString()}</h3>
      <h3>This is boolean: {String(props.isMarried)}</h3>
      <p>These are my friends: {friendsList}</p>
    </>
  );
}

Check.PropTypes = {
  year: PropTypes.number,
  model: PropTypes.string,
  brand: PropTypes.object,
  isMarried: PropTypes.bool,
};

Check.defaultProps = {
  year: 2002,
};

export default Check;
