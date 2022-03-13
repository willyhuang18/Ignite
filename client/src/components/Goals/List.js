import React from "react";
import { useQuery, gql } from "@apollo/client";
import {Get_GoalsForPartner} from '../../utils/queries';

const List = ()=>{

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