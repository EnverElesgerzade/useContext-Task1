import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const Counter = () => {
  const { count } = useContext(CountContext);
  return <h2>Count: {count}</h2>;
};

export default Counter;