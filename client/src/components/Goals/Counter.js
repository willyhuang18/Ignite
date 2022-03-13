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
            <div className="row">
            <h1>{count}</h1>
            </div>
            <div className="row">
            <Button title={"-"} action={decrementCount} />
            <Button title={"+"} action={incrementCount} />
            </div>
             
        </>
    );
}

export default Counter;