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

  const randomNum = Math.floor(Math.random() * 46);
  console.log(randomNum);

  return (
    <>
      Question of The Day
      {questionOfTheDay.Math.floor(Math.random() * ((question) => (
        <li key={question._id}>{question.question}</li>
      )))}
      {/* <p>{questionOfTheDay[randomNum].question}</p> */}
    </>
  );
};

export default QuestionOfTheDay;
