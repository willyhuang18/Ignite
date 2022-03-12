import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './Question.css'
import heart from '../../heart.png'
import { FaCamera } from "react-icons/fa";
import Questionnaire from '../Questions/Questionnaire.js'

export default function Question() {
  const [name, setName] = useState('Mark');
  const [showContent, setShowContent] = useState(false)

  // this will open the modal upon click
  const openModal = () => {
    setShowContent(true)
  }

  // this will close the modal upon click
  const closeModal = () => {
    setShowContent(false)
  }

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);
  // const [start, setStart] = useState(false);


  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }

  // const nextQuestion = currentQuestion + 1;
  // if (nextQuestion < questions.length) {
  //   setCurrentQuestion(nextQuestion);
  // } else {
  //   setShowScore(true);
  // }


  return (
    <div className='question'>
      <div className='upper-container '>
        <h1>Ignite
          <br />
          A couple App
        </h1>
        <div className='row '>
          <div className="col-4 mx-5">
            <div className="image-container">
              <img className="profilePic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
              <span className='uploadButton'><FaCamera /></span>
              <input className="fileUpload" type="file" accept="image/*" />
            </div>
            <div className='lower-container'>
              <div>
                <h3>{name}</h3>
                <br />
                <button className='button'>{name} 's Love Language: <br /> </button>

                {/* Questionnaire Modal */}
                <button className='button' onClick={openModal}>Discover Your Love Language!</button>
                <Modal show={showContent} onHide={closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Discover Your Love Language</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Questionnaire />
                  </Modal.Body>
                </Modal>
                
              </div>
            </div>

          </div>
          <div className='col-6'>
            <div className='px-5' >
              <img src={heart} alt='heart' />
            </div>

            {/* <div className='context'>
                {showContent && <div className='app'>
                  {showScore ? (
                    <div className='score-section vstack'>
                      <div>
                        How to make {name} Feel More Loved
                      </div>
                      <div className='answer-section'>
                        {questions[2].answerOptions.map((answerOption) => (
                          <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                      </div>
                    </div> */}

            {/* <div className='question-section'>
                        <div className='question-count'>
                          <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                      </div>
                      <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                          <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

                        ))}
                      </div> */}
          </div>

        </div>
      </div>
    </div>
  )
};

