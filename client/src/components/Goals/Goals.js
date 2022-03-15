import React, { useEffect, useState } from "react";
import List from "./List";
import { useQuery} from "@apollo/client";
import { Get_GoalsForPartner } from "../../utils/queries";
import Auth from '../../utils/auth';
const Goals = () => {
  const { data } = useQuery(Get_GoalsForPartner);
  const [user1Data, setuser1] = useState([]);
  const [user2Data, setuser2] = useState([]);

  useEffect(() => {
    if (data) {
      setuser1(data.GFP);
      setuser2(data.GFP);
    }
  }, [data]);

  const user1goals = user1Data.filter(
    (goal) => goal.loveFilter === "Acts of Service"
  );
  const user2goals = user2Data.filter(
    (goal) => goal.loveFilter === "Gift Giving"
  );
  return (
    <div>
      <div className="row">
      <h3 className='h3'>{Auth.getName().data.username} 's list </h3>
        <div style={style} className="">
          <List user={user1goals} />
        </div>
      </div>

      <div className="row">
      <h3 className='h3'>{Auth.getName().data.username2} 's list </h3>
        <div style={style} className="">
          <List user={user2goals} />
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundImage:
    "radial-gradient(circle, #e07373, #ea908c, #f3ada6, #fac9c3, #ffe5e1)",
  width: "500px",
  height: "280px",
  overflow: "scroll",
  borderStyle: "solid",
  borderWidth: "4px",
};

export default Goals;
// user state for user 1 & user 2
// user setters inside
// passdown as props
