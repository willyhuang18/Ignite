import React, {useEffect, useState} from "react";
import { useQuery, gql } from "@apollo/client";
import {Get_GoalsForPartner} from '../../utils/queries';
import Card from 'react-bootstrap/Card'
const List = ()=>{

    const {error, loading, data} = useQuery(Get_GoalsForPartner)
    const [GFP, getGFP] = useState([]);
    useEffect(()=>{
        if (data){
        getGFP(data.GFP);
        }
    }, [data])

    return (
        <>
        {GFP.map((val)=> (
            <li key={val._id}>
            <Card>
                <Card.Body>
                    <Card.Title>{val.goalTitle}</Card.Title>
                        <Card.Text>
                            {val.loveFilter}
                        </Card.Text>
             </Card.Body>
            </Card> 
             </li>
        ))}
        </>
    );
};



export default List;