import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseHandler = () => {
    setCounter(counter - 1);
  }

  const increaseHandler = () => {
    setCounter(counter + 1);
  }

  const resetHandler = () => {
    setCounter(0);
  }
  return (

<div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200 space-y-10">
<div className="text-teal-300 font-medium text-3xl tracking-wide shadow-md">Increment & Decrement</div>

  <div className="bg-white flex items-center gap-12 py-3 rounded-md shadow-md text-4xl text-white-700">
    <button onClick={decreaseHandler} className="border-r-2 text-center w-16 border-gray-300 text-2xl  rounded-1-md">
      -
    </button>

    <div className="font-bold text-4xl">
      {counter}
    </div>

    <button onClick={increaseHandler} className="border-1-2 text-center w-16 border-gray-300 text-2xl rounded-r-md">
      +
    </button>
  </div>

  <button
    onClick={resetHandler}
    className="bg-teal-500 text-whaite-800 px-6 py-2 rounded-md text-md  shadow-md "
  >
    Reset
  </button>
</div>

  );
}

export default App;


