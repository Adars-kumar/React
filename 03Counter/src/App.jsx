import { useState } from "react";
import "./App.css";

function App() {
  // counter is a variable that is controlled by methoud 'setCounter'
  let [counter, setCounter] = useState(15);

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;

// UI updation controlled by React
