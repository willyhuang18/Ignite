import {useState} from "react";
import Button from "./Button";


const Counter=()=>{
    const [count, setCount] = useState(0);

    let incrementCount = () => {
        setCount(count + 1);
      };
    
      let decrementCount = () => {
        setCount(count - 1);
      };
    return(
        <>
        </>
    );
}

export default Counter;