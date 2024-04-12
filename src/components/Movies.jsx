import { useState } from "react";

export const Movies = () => {
  const [count, setCount] = useState(0);

  const update = () => {
    setCount(1);
    console.log(count);
  };

  console.log("0" == false);
  return (
    <div style={{ marginTop: "100px" }}>
      <p>Count: {count}</p>
      <button onClick={update}>Update Count</button>
    </div>
  );
};
