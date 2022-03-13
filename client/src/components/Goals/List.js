import React from "react";


const List = ({GFP})=>{
    return (
        <>
        {GFP.map((GFP)=> (
            <li key={GFP._id}>
            <h1>{GFP.goalTitle}</h1> 
            <p>{GFP.loveFilter}</p>   
             </li>
        ))}
        </>
    );
};


export default List;