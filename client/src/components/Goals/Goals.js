import React from "react";
import List from './List';
const Goals = () => {
  return (
  <div>
   <div style={style} className="">
    <List />
  </div>
  </div>
  );
};

const style = {
  "backgroundImage": "radial-gradient(circle, #e07373, #ea908c, #f3ada6, #fac9c3, #ffe5e1)",
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
