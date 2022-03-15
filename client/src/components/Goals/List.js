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
              <div className="col-7">
                <Card.Title>{val.goalTitle}</Card.Title>
                <Card.Text style={filter}>{val.loveFilter}</Card.Text>
              </div>
              <div className="col-5">
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
  margin: " 15px 0",
  backgroundImage: " linear-gradient(to top, #e07373, #bf5c5c, #a04745, #813231, #631d1d)",
  color: "white",
  borderRadius:"25px",
  borderStyle:"solid",
  borderWidth:"3px"
};

const filter = {
  fontSize: "13px",
};

export default List;
