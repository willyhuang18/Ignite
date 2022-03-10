import React from 'react';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <main >
      <div className="flex-row ">
        <div className="col-12 col-md-10 mb-3 p-3">
        <Dashboard />
        </div>
      </div>
    </main>
  );
};

export default Home;
