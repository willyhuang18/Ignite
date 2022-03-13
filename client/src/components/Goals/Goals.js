import React from "react";
import List from './List';

const Goals = () => {
  return (
  <div>
    <h1 style={title}> Goals list </h1>
   <div style={style} className="">
    <List />
  </div>
  </div>
  );
};

const style = {
  "backgroundImage": "linear-gradient(to right bottom, #bf1d8f, #a74fba, #8370d8, #538ae8, #129feb)",
  "width": "500px",
  "height": "280px",
  "overflow": "scroll",
  "borderStyle":"solid",
  "borderWidth": "4px",
};

const title = {
  "color": "black"
}


export default Goals;
