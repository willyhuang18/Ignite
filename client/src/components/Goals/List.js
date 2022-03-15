// import {useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import Counter from "./Counter";
const List = ({user, onSave}) => {
 
 
  return (
    <>
      {user.map((val) => (
        <li style={{listStyle:"none"}} key={val._id}>
          <Card style={cardSt}>
            <Card.Body className="row">
              <div className="col-6">
                <Card.Title>{val.goalTitle}</Card.Title>
                <Card.Text style={filter}>{val.loveFilter}</Card.Text>
              </div>
              <div className="col-4">
                <Counter onSave={()=> onSave(val._id, )} />
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
