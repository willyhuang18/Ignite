import {useState, useEffect} from "react";
import Button from "./Button";
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';

const Counter=()=>{
    const [count, setCount] = useState(0); 
   

    let incrementCount = () => {
        setCount(count + 1);
      };
    
      let decrementCount = () => {
        setCount(count - 1);
        if (count === 0 ){
          setCount(0)
        }
      };

    return(
        <>
            <div className="row d-felx justify-content-center">
            <Button className="col-3" title={<FaMinusCircle/>} action={decrementCount}/>    
            <h1 className="col-6 d-felx pl-4">{count}</h1>
            <Button className="col-3" title={<FaPlusCircle/>} action={incrementCount} />
            </div>
        </>
    );
}

export default Counter;