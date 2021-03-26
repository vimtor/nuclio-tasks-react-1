import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}

export default useCount;
