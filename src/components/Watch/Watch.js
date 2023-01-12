import React, { useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  return (
    <div style={{ border: "3px solid red", padding: "10px" }}>
      <h2>This is my smart Watch</h2>
      <h3>My current steps:{steps}</h3>
      <button onClick={increaseSteps}>De Dhur.........</button>
      <Display name="germin" steps={steps}></Display>
    </div>
  );
};

export default Watch;
