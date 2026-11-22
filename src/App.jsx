import React, { useState } from "react";
import { CountContext } from "./contexts/CountContext";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Counter />
      <Buttons />
    </CountContext.Provider>
  );
};

export default App;