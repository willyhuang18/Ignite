// import React from 'react';
import React, { useState } from 'react';
import './Questionnaire.css'
import { Modal } from 'react-bootstrap';

// import AuthService from '../../utils/auth'
let physicalTouch2 = 0;
let qualityTime2 = 0;
let actsOfService2 = 0;
let wordsOfAffirmation2 = 0;
let gifts2 = 0;


export default function Questionnaire2(){
    const [selectedQuestion2, setSelectedQuestion2] = useState(0);
    const [showResult2, setShowResult2] = useState(false);
    const [loveLanguage2, setLoveLanguage2] = useState('');
    // const [showContent2, setShowContent2] = useState(false);




    // const [addUserLoveLanguage, { error }] = useMutation(ADD_LOVE_LANGUAGE)


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

    // const openModal = () => {
    //     setShowContent2(true)
    //   }

    //   const closeModal = () => {
    //     setShowContent2(false)
    //   }


    // this function will add 1 to designated love language each time the answer corresponding with that love language is clicked.   
    function nextQuestion2(index) {
        console.log("index is " + index)

        if (index === 1) {
            physicalTouch2 += 1
            console.log('is this running?!?!?!?!');
        }
        else if (index === 2) {
            qualityTime2 += 1
        }
        else if (index === 3) {
            actsOfService2 += 1
        }
        else if (index === 4) {
            wordsOfAffirmation2 += 1
        }
        else {
            gifts2 += 1
        }

        console.log('physical touch equals');
        // console.log(physicalTouch);
        console.log(physicalTouch2)

        console.log('quality time equals');
        console.log(qualityTime2)

        console.log('acts of service equals');
        console.log(actsOfService2)

        console.log('words equals');
        console.log(wordsOfAffirmation2)

        console.log('gifts equals');
        console.log(gifts2)

        // this will display the next question in the questions array
        const getNextQuestion = selectedQuestion2 + 1;
        if (getNextQuestion < questions.length) {
            setSelectedQuestion2(getNextQuestion);
        } else {
            setShowResult2(true)
            displayLoveLanguage2()
        }
    }


    function displayLoveLanguage2() {
        if (physicalTouch2 > qualityTime2 && physicalTouch2 > actsOfService2 && physicalTouch2 > wordsOfAffirmation2 && physicalTouch2 > gifts2) {
            setLoveLanguage2('Physical Touch')
            console.log('physicaaaaal');
        } else if (qualityTime2 > physicalTouch2 && qualityTime2 > actsOfService2 && qualityTime2 > wordsOfAffirmation2 && qualityTime2 > gifts2) {
            setLoveLanguage2('Quality Time')
            console.log('quaaaality');
        } else if (actsOfService2 > physicalTouch2 && actsOfService2 > qualityTime2 && actsOfService2 > wordsOfAffirmation2 && actsOfService2 > gifts2) {
            setLoveLanguage2('Acts of Service')
            console.log('serviceeeeeee');
        } else if (wordsOfAffirmation2 > physicalTouch2 && wordsOfAffirmation2 > qualityTime2 && wordsOfAffirmation2 > actsOfService2 && wordsOfAffirmation2 > gifts2) {
            setLoveLanguage2('Words of Affirmation')
            console.log('wordssssss');
        } else if (gifts2 > physicalTouch2 && gifts2 > qualityTime2 && gifts2 > actsOfService2 && gifts2 > wordsOfAffirmation2) {
            setLoveLanguage2('Gifts')
            console.log('giftsssss');
        }

    }

    // async function saveLoveLanguage() {
    //     const usersInformation = AuthService.getName()
    //     const { data } = await addUserLoveLanguage({
    //         variables: { username: username, loveLanguage1: loveLanguage1, loveLanguage2: loveLanguage2 }
    //     })
    // }

    return (
        <>
            {/* <Modal show={showContent2} onHide={closeModal} className="modal-bg"> */}
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Discover Your Love Language</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {
                            showResult2 ? (
                                <div>
                                    <h3> Your Love Language is {loveLanguage2}
                                    </h3>
                                </div >
                            ) : (
                                <div className="questionnaire">
                                    <div className="questionTitle text-center">
                                        <strong>
                                            It's MOST meaningful when my partner...
                                        </strong>
                                    </div>
                                    <br />
                                    {/* QUESTIONNAIRE BEGINS */}
                                    {questions.map((question, index) => {
                                        if (index === selectedQuestion2) {
                                            return (
                                                <div class="allAnswers">
                                                    <button onClick={() => nextQuestion2(1)} type="radio" className="my-3 option1">
                                                        <p>
                                                            {question.physicalTouchAnswer}
                                                        </p>
                                                    </button>

                                                    <button onClick={() => nextQuestion2(2)} type="radio" className="my-3 option2">
                                                        <p>
                                                            {question.qualityTimeAnswer}
                                                        </p>
                                                    </button>

                                                    <button onClick={() => nextQuestion2(3)} type="radio" name="my-3 option3">
                                                        <p>
                                                            {question.actsOfServiceAnswer}
                                                        </p>
                                                    </button>

                                                    <button onClick={() => nextQuestion2(4)} type="radio" name="my-3 option4">
                                                        <p>
                                                            {question.wordsOfAffirmationAnswer}
                                                        </p>
                                                    </button>

                                                    <button onClick={() => nextQuestion2(5)} type="radio" name="my-3 option5">
                                                        <p>
                                                            {question.giftsAnswer}
                                                        </p>
                                                    </button>
                                                </div>


                                            )
                                        }
                                    }
                                    )}
                                </div>
                            )}
                        </div >
                </Modal.Body>
            {/* </Modal> */}
        </>   
    )
}


