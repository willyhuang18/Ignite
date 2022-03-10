import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import Card from '../components/Card/Card'
import Question from '../components/Question/Question';

const Home = () => {
  return (
    <main >
      <div className="flex-row ">
        <div className="col-12 col-md-10 mb-3 p-3">
        <Card />
        
        <Question />
        </div>
      </div>
    </main>
  );
};

export default Home;
