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
            <Card style={cardSt}>
                <Card.Body className="row">
                    <div className="col-6">
                    <Card.Title>{val.goalTitle}</Card.Title>
                        <Card.Text>
                            {val.loveFilter}
                        </Card.Text>
                     </div>   
                    <div className="col-4">
                        <p> 3</p>
                    </div> 
             </Card.Body>
            </Card> 
             </li>
        ))}
        </>
    );
};

const cardSt = {
    "width": "400px",
    "margin": " 5px",
    "backgroundColor": "grey",
    "color": "white"
}


export default List;