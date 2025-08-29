function DestructuringPropsAndState(props) {
  const changeContent = () => {
    alert("Content changed in function component!");
  };

  const helloName = (name) => {
    alert("Hello " + name);
  };

  const { name, age, city } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
      <button onClick={changeContent}>Click</button>
      <button onClick={() => helloName("AsadUllah")}>Print Name</button>
    </>
  );
}

export default DestructuringPropsAndState;
