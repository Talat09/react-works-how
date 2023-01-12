import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div style={{ border: "3px solid green", margin: "10px" }}>
      <h1>Name:{props.name}</h1>
      <p>SO far steps:{props.steps}</p>
      <Dial steps={props.steps}></Dial>
    </div>
  );
};

export default Display;
