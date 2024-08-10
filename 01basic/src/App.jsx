import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    // console.log("Clicked",Math.random());
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
    // console.log(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2>Hello React with Vite</h2>
      <h4>Counter value: {counter}</h4>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
