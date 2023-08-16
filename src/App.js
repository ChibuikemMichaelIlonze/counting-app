import { useState } from "react";
import "./App.css";

function App() {
  const [count, countStart] = useState(0);
  const handle = () => {
    return countStart(count + 1);
  };
  const handlenegative = () => {
    return countStart(count - 1);
  };
  return (
    <div className="flex flex-col gap-9 text-blue-800 w-full h-screen justify-center items-center bg-gray-700">
      <p className="text-6xl text-white">{count}</p>
      <div className="gap-3 flex">
        <button
          className="bg-blue-500 rounded shadow-lg p-2"
          onClick={handlenegative}
        >
          Decrease
        </button>{" "}
        <button className="bg-blue-500 rounded shadow-lg p-2" onClick={handle}>
          Increase
        </button>
      </div>
    </div>
  );
}
export default App;
