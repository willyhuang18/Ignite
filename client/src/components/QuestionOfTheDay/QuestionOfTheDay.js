import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_questionOfTheDay } from '../../utils/queries';

const QuestionOfTheDay = () => {
  const { error, loading, data } = useQuery(QUERY_questionOfTheDay);
  const [questionOfTheDay, setQuestion] = useState([]);
  useEffect(() => {
    if (data) {
      setQuestion(data.questionOfTheDay);
    }
  }, [data]);

  console.log('data: ', data);
  console.log('questionOfTheDay: ', questionOfTheDay);
  console.log('data.questionOfTheDay: ', data.questionOfTheDay);

 

  const randomNum = Math.floor(Math.random() * 46);
  console.log('randomNum: ', randomNum);

  const randomQuestion = data[randomNum].question;
  console.log('randomQuestion: ', randomQuestion);

  return (
    <>
       {/* <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <p>{questionOfTheDay[randomNum].question}</p>
          )}
        </div>
      </div> */}

      Question of The Day
      {questionOfTheDay.map((question) => (
        <li key={question._id}>{question.question}</li>
      ))}

      



    </>
  );
};

export default QuestionOfTheDay;
