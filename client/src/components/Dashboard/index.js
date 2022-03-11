import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import Card from '../Card/Card'
// import { ADD_THOUGHT } from '../../utils/mutations';
// import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import Question from '../Question/Question';

const Dashboard = () => {

  // const [thoughtText, setThoughtText] = useState('');

  // const [characterCount, setCharacterCount] = useState(0);

  // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
  //   update(cache, { data: { addThought } }) {
  //     try {
  //       const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

  //       cache.writeQuery({
  //         query: QUERY_THOUGHTS,
  //         data: { thoughts: [addThought, ...thoughts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
  //     });
  //   },
  // });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addThought({
  //       variables: {
  //         thoughtText,
  //         thoughtAuthor: Auth.getProfile().data.username,
  //       },
  //     });

  //     setThoughtText('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'thoughtText' && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }
  // };

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <div className='d-flex flex-row justify-content-between'>
          <Question />
          </div>
        </>
      ) : (
          <>
          </>
      )}
    </>
  );
};

export default Dashboard;


// import React, { Component } from "react";
// import Modal from './Modal.js';

// class Dashboard extends Component {
//   // ...
//   render() {
//     return (
//       <main>
//         <h1>React Modal</h1>
//         <Modal show={this.state.show} handleClose={this.hideModal}>
//           <p>Modal</p>
//         </Modal>
//         <button type="button" onClick={this.showModal}>
//           Open
//         </button>
//       </main>
//     );
//   }
// }

// export default Dashboard