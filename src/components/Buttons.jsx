import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const Buttons = () => {
  const { setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </>
  );
};

export default Buttons;