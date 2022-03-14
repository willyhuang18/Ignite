import React from 'react';

// example file 
// import React, {useState} from 'react'
// import './Question.css'
// import heart from '../../heart.png'
// import { FaCamera } from "react-icons/fa";
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';
// import Goals from '../Goals/Goals';
// ​
// ​
// const questions = [
//   {
//     questionText: 'What is the capital of France?',
//     answerOptions: [
//       { answerText: 'New York', counter: 0 },
//       { answerText: 'London', counter: 0 },
//       { answerText: 'Paris', counter: 0 },
//       { answerText: 'Dublin', counter: 0 },
//     ],
//   },
//   {
//     questionText: 'Who is CEO of Tesla?',
//     answerOptions: [
//       { answerText: 'New York', counter: 0 },
//       { answerText: 'London', counter: 0 },
//       { answerText: 'Paris', counter: 0 },
//       { answerText: 'Dublin', counter: 0 },
//     ],
//   },
//   {
//     questionText: 'The iPhone was created by which company?',
//     answerOptions: [
//       { answerText: 'New York', counter: 0 },
//       { answerText: 'London', counter: 0 },
//       { answerText: 'Paris', counter: 0 },
//       { answerText: 'Dublin', counter: 0 },
//     ],
//   },
//   {
//     questionText: 'How many Harry Potter books are there?',
//     answerOptions: [
//       { answerText: 'New York', counter: 0 },
//       { answerText: 'London', counter: 0 },
//       { answerText: 'Paris', counter: 0 },
//       { answerText: 'Dublin', counter: 0 },
//     ],
//   },
// ];
// ​
// ​
// ​
// function Question() {
//     const [name, setName] = useState ('Mark');
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [score, setScore] = useState('');
//     const [start, setStart] =useState(false);
//     // const [showContent, setShowContent] = useState(false)
//     // const [modal, setModal] = useState(false)
//     const { username: userParam } = useParams();
// ​
//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//       variables: { username: userParam },
//     });
  
//     const user = data?.me || data?.user || {};
//     // navigate to personal profile page if username is yours
//     if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//       return <Navigate to="/me" />;
//     }
//     const handleClickStart = ()=>{
//       // setShowContent({showContent: !showContent})
//     }
 
//     // const value1 = questions.answerOptions[0].value;
//     // console.log(value1);
    
//     const handleAnswerOptionClick = (answerOptions) => {
//       for (let i = 0; i < answerOptions.length; i++) {
//         const element = answerOptions[i];
//         if(element){
//           element.counter += 1;
//         }
//         if(answerOptions[i].counter > 3 ){
//           setScore(answerOptions[i].answerText)
//         }
//         console.log(answerOptions.answerText);
//       }
//       // if (answerOptions) {
        
//       //   setScore(score + 1);
//       // }
// ​
//       const nextQuestion = currentQuestion + 1;
//       if (nextQuestion < questions.length) {
//         setCurrentQuestion(nextQuestion);
//       } else {
//         setShowScore(true);
//       }
//     };
// ​
//   return (
//     <div className='question'>
//     <div className='upper-container '>
//         <h1>Ignite 
//         <br />
//         A couple App
//         </h1>
//     <div className='row '>
//       <div className="col-4 mx-5">
//         <div className="image-container">
//           <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
//           <span className='upload-button'><FaCamera /></span>
//             <input className="file-upload" type="file" accept="image/*" />
//         </div>
//         <div className='lower-container'>
//           <div className='m-2'>
//             <h3>{userParam ? `${user.username}'s` : 'your'}</h3>
//             <button className='button m-2'>{name} 's Love Language: {score}<br /> {questions[0].questionText}</button>
//           {start ? (
//               <div>
//               <button className='button'>{score} 's Love Language:<br /> {questions.length}</button>
//               </div>
//               ) : (
//                 <>
//               <button className='button' onClick={handleClickStart}>Please answer some love language questions</button>
//                 </>
//               )}
//           </div>
//         </div>
        
//       </div>
//     <div className='col-6'>
//       <div className='px-5' >
//         <img src={heart} alt='heart' />
//       </div>
//           <div className='context'>
//              {/* {showContent &&  */}
//              <div className='app'>
//                 {showScore ? (
//                   <div className='score-section vstack'>
//                   <div>
//                     How to make {name} Feel More Loved
//                   </div>
//                   <div className='answer-section'>
//                   {questions[2].answerOptions.map((answerOption) => (
//                         <button onClick={() => handleAnswerOptionClick(answerOption.counter)}>{answerOption.answerText}</button>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <>
//                     <div className='question-section'>
//                       <div className='question-count'>
//                         <span>Question {currentQuestion + 1}</span>/{questions.length}
//                       </div>
//                       <div className='question-text'>{questions[currentQuestion].questionText}</div>
//                     </div>
//                     <div className='answer-section'>
//                       {questions[currentQuestion].answerOptions.map((answerOption) => (
//                         <button onClick={() => handleAnswerOptionClick(answerOption.counter)}>{answerOption.answerText}</button>
//                       ))}
//                     </div>
//                   </>
//                 )} 
//           </div>
//             {/* } */}
//            </div>
//           <div className="row">
//                     <Goals />
//             </div>
//         </div>
//     </div>
       
       
//     </div>
//     </div>
//   )
// }
// ​
// export default Question





export default function Result() {

}