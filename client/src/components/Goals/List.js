import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Get_GoalsForPartner } from "../../utils/queries";
import Card from "react-bootstrap/Card";
import Counter from "./Counter";
const List = () => {
  const { error, loading, data } = useQuery(Get_GoalsForPartner);
  const [GFP, getGFP] = useState([]);
  useEffect(() => {
    if (data) {
      getGFP(data.GFP);
    }
  }, [data]);

  return (
    <>
      {GFP.map((val) => (
        <li key={val._id}>
          <Card style={cardSt}>
            <Card.Body className="row">
              <div className="col-6">
                <Card.Title>{val.goalTitle}</Card.Title>
                <Card.Text style={filter}>{val.loveFilter}</Card.Text>
              </div>
              <div className="col-4">
                <Counter />
              </div>
            </Card.Body>
          </Card>
        </li>
      ))}
    </>
  );
};

const cardSt = {
  width: "400px",
  margin: " 5px",
  backgroundColor: "grey",
  color: "white",
};

const filter = {
  fontSize: "13px",
};

export default List;
