import React, {useState} from 'react'
import './Question.css'
import heart from '../../heart.png'


const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];



function Question() {
    const [name, setName] = useState ('Mark');
    const [about, setabout] = useState ('Quality of time')
    const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
};

  return (
    <div className='question'>
    <div className='upper-container '>
        <h1>Ignite 
        <br />
        A couple App
        </h1>
    <div className='d-flex justify-content-center container'>
    <img src={heart} alt='heart' />
       <div className='heart-shape'>
        <h2>Question of <br />the Day</h2>
        </div> 
    </div>
        <div className='low-container'>
           
            <div className='app align-center'>
              {showScore ? (
                <div className='score-section'>
                  You scored {score} out of {questions.length}
                </div>
              ) : (
                <>
                  <div className='question-section'>
                    <div className='question-count'>
                      <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                  </div>
                  <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                      <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                  </div>
                </>
              )}
	          </div>
        </div>
       
    </div>
    </div>
  )
}

export default Question

// <div className='container'>
// <h4 id="question">question</h4>
//   <div className="answers" id="answers"></div>
// <div id="alert">
//   <hr />
// </div>
// </div>
// <h3>{name}</h3>
// <button className='button'>{name} 's Love Language:<br/> {about}</button>