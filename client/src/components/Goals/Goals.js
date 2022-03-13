import React from "react";


const Goals = () => {
  return (
  <div>
    <h1 style={title}> Goals list </h1>
   <div style={style}>
     <p> test </p>
     <p> test 1 </p>
     <p> test  2</p>
     <p> test 3  </p>
     <p> test  4 </p>
     <p> test  5 </p>
  </div>
  </div>
  );
};

const style = {
  "backgroundImage": "linear-gradient(to right bottom, #bf1d8f, #a74fba, #8370d8, #538ae8, #129feb)",
  "width": "auto",
  "height": "280px",
  "overflow": "scroll"
};

const title = {
  "color": "black"
}


export default Goals;
