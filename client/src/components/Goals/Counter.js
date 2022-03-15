import {useState, useEffect} from "react";
import Button from "./Button";


const Counter=()=>{
    const [count, setCount] = useState(0); 
   

    let incrementCount = () => {
        setCount(count + 1);
        // localStorage.setItem("count", count);
      };
    
      let decrementCount = () => {
        setCount(count - 1);
        if (count === 0 ){
          setCount(0)
        }
        // localStorage.setItem("count", count);
      };

      // useEffect(() => {
      //   const initialValue = localStorage.getItem("count");
      //   if (initialValue) setCount(initialValue);
      // }, []);
    
      
      console.log(localStorage.getItem("count"));
    return(
        <>
            <div className="row">
            <Button className="col-4" title={"-"} action={decrementCount}/>    
            <h1 className="col-4">{count}</h1>
            <Button className="col-4" title={"+"} action={incrementCount} />
            </div>
            {/* <div className="row">
            <Button title={"-"} action={decrementCount} />
            <Button title={"+"} action={incrementCount} />
            </div> */}
             
        </>
    );
}

export default Counter;