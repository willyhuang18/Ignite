import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Modal, Button } from 'react-bootstrap';
import { FaCamera } from "react-icons/fa";
import Questionnaire from '../Questionnaire/Questionnaire.js'
import Questionnaire2 from '../Questionnaire/Questionnaire2.js'
import QuestionOfTheDay from '../QuestionOfTheDay/QuestionOfTheDay';
import './Dashboard.css'
import Goals from '../Goals/Goals';
import $ from 'jquery'

let physicalTouch = 0;
let qualityTime = 0;
let actsOfService = 0;
let wordsOfAffirmation = 0;
let gifts = 0;


const questions = [
  {
    'physicalTouchAnswer': 'pulls me close and cuddles me while we watch a movie',
    'qualityTimeAnswer': 'and I spend a weekend alone in a cabin',
    'actsOfServiceAnswer': 'completes a task for me that I have been dreading for weeks',
    'wordsOfAffirmationAnswer': 'leaves me a thoughtful note in my bag',
    'giftsAnswer': 'surprises me with an item I had mentioned I wanted weeks ago'
  },
  {
    'physicalTouchAnswer': 'greets me with a long hug',
    'qualityTimeAnswer': 'sits near me while I finish up work',
    'actsOfServiceAnswer': 'cooks me dinner after a busy day',
    'wordsOfAffirmationAnswer': 'reminds me they are thinking of me in the middle of the day',
    'giftsAnswer': 'buys concert tickets to go see my favorite artist'
  },
  {
    'physicalTouchAnswer': 'grabs my hand during a walk',
    'qualityTimeAnswer': 'plans a device free evening for us',
    'actsOfServiceAnswer': 'wakes me up with breakfast in bed',
    'wordsOfAffirmationAnswer': 'leaves a loving sticky note on my bathroom mirror',
    'giftsAnswer': 'gets me a unique drawing of my favorite city'
  },
  {
    'physicalTouchAnswer': 'gives me a massage as I get ready for bed',
    'qualityTimeAnswer': 'and I start a new tv series together',
    'actsOfServiceAnswer': 'shows up to my job with a cup of my favorite coffee',
    'wordsOfAffirmationAnswer': 'speaks highly of me when introducing me to new friends',
    'giftsAnswer': 'brings my cat/dog gourmet treats and toys'
  },
  {
    'physicalTouchAnswer': 'plays with my hair',
    'qualityTimeAnswer': 'buys ingredients so we can cook a meal together',
    'actsOfServiceAnswer': 'plans a date night for us',
    'wordsOfAffirmationAnswer': 'told me how good looking I was on an average day',
    'giftsAnswer': 'creates a playlist of songs that I might love'
  },
  {
    'physicalTouchAnswer': 'rested their head on my lap',
    'qualityTimeAnswer': 'goes volunteering with me',
    'actsOfServiceAnswer': 'takes care of my every need while I lay in bed sick',
    'wordsOfAffirmationAnswer': 'asks me to help with mundane tasks because they feel everything is more fun when they are with me',
    'giftsAnswer': 'makes me a calendar full of pictures of our favorite memories together'
  },
  {
    'physicalTouchAnswer': 'holds on to me while we walk together',
    'qualityTimeAnswer': 'tried out a hobby that I love',
    'actsOfServiceAnswer': 'tossed my towel in the dryer while I showered so I have a warm towel to use when I exit',
    'wordsOfAffirmationAnswer': 'tells me the things they admire about me',
    'giftsAnswer': 'gave me an inspirational poster to hang in my new office'
  },
  {
    'physicalTouchAnswer': 'rests their hand on mine while we drive',
    'qualityTimeAnswer': 'exercised with me',
    'actsOfServiceAnswer': 'meal prepped all of our meals for the week',
    'wordsOfAffirmationAnswer': 'tells me why they appreciate me',
    'giftsAnswer': 'bought me new shoes after I shared that I wanted to start running'
  }
]


$(document).ready(function () {


  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      }
      reader.addEventListener('load', () => {
        localStorage.setItem('recent-image', reader.result)
      })
      reader.readAsDataURL(input.files[0]);
    }
  }

  $(".file-upload").on('change', function () {
    readURL(this);
  });

  $(".upload-button").on('click', function () {
    $(".file-upload").click();
  });

  $(window).on("load", () => {
    const recentImageDataUrl = localStorage.getItem('recent-image')

    if (recentImageDataUrl) {
      $('.profile-pic').attr('src', recentImageDataUrl);
    }
  })
});
const Dashboard = () => {
  const [showContent, setShowContent] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loveLanguage, setLoveLanguage] = useState('')
  // const [loveLanguage2, setLoveLanguage2] = useState('')
  const [showContent2, setShowContent2] = useState(false);



  // this will open the modal upon click
  const openModal = (partner) => {
    if (partner === 1) {
      setShowContent(true)
    } else { setShowContent2(true) }
  }

  // const openModal = () => {
  //   if (Auth.getName().data.username) {
  //     setShowContent(true)
  //   }
  //   if (Auth.getName().data.username2) {
  //     setShowContent(true)
  //   }
  // }


  // this will close the modal upon click
  const closeModal = () => {
    setShowContent(false)
    setShowContent2(false)
  }


  function nextQuestion(index) {
    // console.log("index is " + index)

    if (index === 1) {
      physicalTouch += 1
    }
    else if (index === 2) {
      qualityTime += 1
    }
    else if (index === 3) {
      actsOfService += 1
    }
    else if (index === 4) {
      wordsOfAffirmation += 1
    }
    else {
      gifts += 1
    }

    const nextQuestion = selectedQuestion + 1;
    if (nextQuestion < questions.length) {
      setSelectedQuestion(nextQuestion);
    } else {
      setShowResult(true)
      displayLoveLanguage()
      // setLoveLanguage2(displayLoveLanguage())
    }
  }

  function displayLoveLanguage() {

    if (physicalTouch > qualityTime && physicalTouch > actsOfService && physicalTouch > wordsOfAffirmation && physicalTouch > gifts) {
      setLoveLanguage('Physical Touch')
      // setLoveLanguage2('Physical Touch') 
      console.log('physicaaaaal');
    } else if (qualityTime > physicalTouch && qualityTime > actsOfService && qualityTime > wordsOfAffirmation && qualityTime > gifts) {
      setLoveLanguage('Quality Time')
      // setLoveLanguage2('Quality Time') 
      console.log('quaaaality');
    } else if (actsOfService > physicalTouch && actsOfService > qualityTime && actsOfService > wordsOfAffirmation && actsOfService > gifts) {
      setLoveLanguage('Acts of Service')
      // setLoveLanguage2('Acts of Service') 
      console.log('serviceeeeeee');
    } else if (wordsOfAffirmation > physicalTouch && wordsOfAffirmation > qualityTime && wordsOfAffirmation > actsOfService && wordsOfAffirmation > gifts) {
      setLoveLanguage('Words of Affirmation')
      // setLoveLanguage2('Words of Affirmation') 

      console.log('wordssssss');
    } else if (gifts > physicalTouch && gifts > qualityTime && gifts > actsOfService && gifts > wordsOfAffirmation) {
      setLoveLanguage('Gifts')
      // setLoveLanguage2('Gifts') 

      console.log('giftsssss');
    }

  }

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <div className='col-lg-9 col-md-12 d-flex flex-row justify-content-between'>
            <div className='question'>
              <div className='upper-container text-center'>
                <h1>Hey, {Auth.getName().data.username} & {Auth.getName().data.username2}! </h1>
                <h4 className='mt-0'> Welcome to your couples dashboard :) </h4>
              </div>

              <div className='container qotd my-4 col-10 hvr-pop'>
                <h4 className='qotd-title'>Question of the Day</h4>
                <QuestionOfTheDay />
              </div>

              <div className='row my-4'>
                <div className="col-4 mx-5">
                  <div className="image-container col-12">
                    <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
                    <span className='upload-button'> <FaCamera /> </span>
                    <input className="file-upload" type="file" accept="image/*" />
                  </div>


                  <div className='lower-container'>
                    {/* Partner 1 */}
                    <h3 className='h3'>{Auth.getName().data.username}</h3>
                    <button className='button'>{Auth.getName().data.username} 's Love Language: {loveLanguage} <br /> </button>
                    {/* Partner 1's Questionnaire Modal */}
                    <button className='button mt-2' data-whichuser="1" onClick={() => openModal(1)}>
                      Discover Your Love Language!
                    </button>
                    <Modal show={showContent} onHide={closeModal} className="bg-light modal-questions">
                      <Modal.Header closeButton>
                        <Modal.Title>Discover Your Love Language</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <Questionnaire
                          loveLanguage={loveLanguage}
                          showResult={showResult}
                          selectedQuestion={selectedQuestion}
                          nextQuestion={nextQuestion}
                        />
                      </Modal.Body>

                    </Modal>

                    {/* Partner 2 */}
                    <h3 className='h3 mt-5'>{Auth.getName().data.username2}</h3>
                    {/* <button className='button'>{Auth.getName().data.username2} 's Love Language: {loveLanguag} <br /> </button> */}
                    {/* Partner 2's Questionnaire Modal */}
                    <button className='button mt-2' data-whichuser="2" onClick={() => openModal(2)}>
                      Discover Your Love Language!
                    </button>
                    <Modal show={showContent2} onHide={closeModal} className="modal-bg">
                      <Questionnaire2 />
                      {/* <Modal show={showContent} onHide={closeModal} className="modal-bg">
                      <Modal.Header className="modal-header" closeButton>
                        <Modal.Title>Discover Your Love Language</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <Questionnaire2
                        />
                      </Modal.Body>
*/}
                    </Modal>
                  </div>
                </div>

                {/* Goals For Partner List */}
                <div className='col-6'>
                  <div className="row">
                    <Goals />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        </>
      )
      }
    </>
  );
};


export default Dashboard;